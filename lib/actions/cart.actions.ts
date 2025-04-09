'use server';

import { cookies } from "next/headers";
import { CartItem } from "@/types";
import { convertToPlainObject, formatError, round2 } from "../utils";
import { auth } from "@/auth";
import { prisma } from "@/db/prisma";
import { cartItemSchema, insertCartSchema } from "../validators";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";


//Calculate cart prices
const calcPrice = (items: CartItem[]) => {
    // Calculate the total cost of items (actual cost)
    const itemsPrice = items.reduce((acc, item) => acc + Number(item.price) * item.qty, 0);

    // Define tax rate (e.g., 10% or 0.10)
    const taxRate = 0.12;

    // Calculate base itemsPrice (excluding tax)
    const actualCost = round2(itemsPrice / (1 + taxRate));

    // Calculate taxPrice
    const taxPrice = round2(itemsPrice - actualCost);

    // Calculate shipping price
    const shippingPrice = round2(itemsPrice > 74.99 ? 0 : 2);

    // Calculate total price (actual cost + shipping)
    const totalPrice = round2(itemsPrice + shippingPrice);

    return {
        itemsPrice: itemsPrice.toFixed(2),
        shippingPrice: shippingPrice.toFixed(2),
        taxPrice: taxPrice.toFixed(2),
        totalPrice: totalPrice.toFixed(2),
    };
};




export async function addItemToCart(data: CartItem) {
    try {
      //Check for cart cookie
      const sessionCartId = (await cookies()).get('sessionCartId')?.value;
        if (!sessionCartId) throw new Error('Cart session not found');

        //Get session and user ID
        const session = await auth();
        const userId = session?.user?.id ? (session.user.id as string) : undefined;
        
        //Get cart
        const cart = await getMyCart();

        //Parse and validate item
        const item = cartItemSchema.parse(data);

        //Find product in database
        const product = await prisma.product.findFirst({
            where: {id: item.productId}
        });
        if (!product) throw new Error('Product not found');
        
        if (!cart) {
            //Create new cart object
            const newCart = insertCartSchema.parse({
                userId: userId,
                items: [item],
                sessionCartId: sessionCartId,
                ...calcPrice([item])
            });

            //Add to database
            await prisma.cart.create({
                data: newCart
            });

            //Revalidate product page
            revalidatePath(`/product/${product.slug}`);

        return {
            success: true,
            message: `${product.name} added to cart`,
            };
        } else {
            //Check if the item is already in the cart
            const existItem = (cart.items as CartItem[]).find((x) => x.productId === item.
        productId);

        if (existItem) {
            //Check stock
            if (product.stock < existItem.qty + 1) {
                throw new Error('Not enough stock');
            }

            //Increase the quantity
            (cart.items as CartItem[]).find((x) => x.productId === item.
        productId)!.qty = existItem.qty + 1;
        } else {
            //If item does not exist in cart
            //Check stock
            if (product.stock < 1) throw new Error('Not enough stock');
            //Add item to the cart.items
            cart.items.push(item);
             }
             //Save to database
             await prisma.cart.update({
                where: {
                    id: cart.id},
                    data: {
                        items: cart.items as Prisma.CartUpdateitemsInput[],
                        ...calcPrice(cart.items as CartItem[])
                    }
             });
             revalidatePath(`/product/${product.slug}`);

             return {
                success: true,
                message: `${product.name} ${existItem ? 'updated in' : 'added to'} cart`
             }
        }
    } catch (error) {
        return {
            success: false,
            message: formatError(error)
        }
    }
    
}


export async function getMyCart(){
//Check for cart cookie
const sessionCartId = (await cookies()).get('sessionCartId')?.value;
if (!sessionCartId) throw new Error('Cart session not found');

//Get session and user ID
const session = await auth();
const userId = session?.user?.id ? (session.user.id as string) : undefined;

//Get user cart from database
const cart = await prisma.cart.findFirst({
    where: userId ? {userId: userId} : {sessionCartId: sessionCartId}
});
if (!cart) return undefined;

//Convert  decimals and return
return convertToPlainObject({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
});
}

export async function removeItemFromCart(productId: string) {

    try {
        //Check for cart cookie
        const sessionCartId = (await cookies()).get('sessionCartId')?.value;
        if (!sessionCartId) throw new Error('Cart session not found');
        
        //Get Product
        const product = await prisma.product.findFirst({
            where: {
                id: productId}
        });

        if(!product) throw new Error('Product not found');

        //Get user cart
        const cart = await getMyCart();
        if(!cart) throw new Error('Cart not found');

        //Check for item
        const exist = (cart.items as CartItem[]).find((x) => x.productId === productId);
        if(!exist) throw new Error('Item not found');

        //Check if only one in qty
        if(exist.qty ===1) {
            //Remove from cart
            cart.items = (cart.items as CartItem[]).filter((x) => x.productId !== exist.productId );
        } else {
            //Decrease qty
            (cart.items as CartItem[]).find((x) => x.productId === productId)!.qty = exist.qty - 1;
        }

        //Update cart in database
        await prisma.cart.update({
            where: {id: cart.id},
            data: {
                items: cart.items as Prisma.CartUpdateitemsInput[],
                ...calcPrice(cart.items as CartItem[]),
            }
        });

        revalidatePath(`/product/${product.slug}`);

        return {
            success: true,
            message: `${product.name} was remove from cart`,
        }

    } catch (error) {
        return {success: false, message: formatError(error)}
    }
}


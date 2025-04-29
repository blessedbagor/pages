import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const RewardPage = () => {
    return ( <>
        
        {/* Coming Soon */}
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* IGIFT LOGO */}
            <Image 
                      src="/images/logo.svg" 
                      alt={`${APP_NAME} logo`} 
                      height={125}
                      width={125}
                      priority={true}
                      className="mb-4"
                    />
            <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
            <p className="mt-4 text-lg text-gray-600">Rewards page is under construction.</p>
        </div>
    </> );
}
 
export default RewardPage;
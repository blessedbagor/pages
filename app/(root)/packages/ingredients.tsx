import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ingredientsData = [
  {
    title: "Astaxanthin",
    question: "Feeling too tired to enjoy your family after work?",
    description:
      "Astaxanthin fights inflammation and helps you bounce back faster, keeping you energized and ready for quality time with your loved ones.",
    image: "/images/astaxanthin.png",
    imageFirst: true,
  },
  {
    title: "Rosehips Extract",
    question: "Skin looking dull from stress?",
    description:
      "Rosehips, packed with Vitamin C, not only keep your immune system strong but also give your skin a healthy glow—because looking good is part of feeling good.",
    image: "/images/rosehips-extract.png",
    imageFirst: false,
  },
  {
    title: "Inulin Fiber",
    question: "Always bloated or sluggish?",
    description:
      "A healthy gut is essential for immunity and energy. Inulin Fiber supports good gut bacteria, keeping you focused and fueled for the day.",
    image: "/images/inulin-fiber.png",
    imageFirst: true,
  },
  {
    title: "Citrus Bioflavonoids",
    question: "Exposed to pollution and stress?",
    description:
      "Citrus Bioflavonoids protect your body from harmful free radicals, so you stay strong no matter what your environment throws at you.",
    image: "/images/citrus-bioflavonoids.png",
    imageFirst: false,
  },
  {
    title: "Sodium Ascorbate",
    question: "Don't want to feel that first sneeze coming on?",
    description:
      "Sodium Ascorbate keeps your immune system ready to fight back before sickness slows you down.",
    image: "/images/sodium-ascorbate.png",
    imageFirst: true,
  },
  {
    title: "Vitamin D3",
    question: "Always stuck indoors?",
    description:
      "A lack of sunlight can weaken your immunity. Vitamin D3 fills that gap, keeping your defenses strong so you can power through your daily grind without getting sick.",
    image: "/images/vitamin-d3.png",
    imageFirst: true,
  },
  {
    title: "Lysine & Magnesium",
    question: "Tired of feeling drained?",
    description:
      "These nutrients help you stay energized, mentally sharp, and physically strong.",
    image: "/images/lysine-magnesium.png",
    imageFirst: false,
  },
  {
    title: "Zinc",
    question: "Ever dragged yourself through work with a cold?",
    description:
      "Zinc helps your body fight infections and speeds up recovery, getting you back to work and your family faster.",
    image: "/images/zinc.png",
    imageFirst: true,
  },
  {
    title: "B Vitamins",
    question: "Mental fog slowing you down?",
    description:
      "B vitamins supercharge your brain and body to keep you productive all day.",
    image: "/images/b-vitamins.png",
    imageFirst: false,
  },
  {
    title: "Iron",
    question: "Running on empty?",
    description:
      "Iron ensures your body gets the oxygen it needs to keep fatigue at bay.",
    image: "/images/iron.png",
    imageFirst: true,
  },
  {
    title: "Calcium",
    question: "Struggling with weak bones and cramps?",
    description:
      "Calcium helps keep your bones strong and muscles functioning smoothly, so you can move without discomfort.",
    image: "/images/calcium.png",
    imageFirst: false,
  },
  {
    title: "Vitamin A & E",
    question: "Want to stay resilient?",
    description:
      "These antioxidants protect your cells and keep you healthy long-term.",
    image: "/images/vitamin-a-e.png",
    imageFirst: true,
  },
];

const Ingredients = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl text-center mt-12">
        Stronger Immunity, More Energy, and Fewer Sick Days
      </h2>

      {ingredientsData.map((item, index) => (
        <Card
          key={index}
          className="flex flex-col md:flex-row gap-4 p-6 border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12"
        >
          {item.imageFirst && (
            <div className="rounded-2xl flex-shrink-0">
              <Image
                src={item.image}
                alt={`${item.title} Image`}
                width={250}
                height={250}
                className="rounded-xl object-cover mx-auto"
              />
            </div>
          )}

          <CardContent className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
            <p className="mb-4 font-bold">{item.question}</p>
            <p>{item.description}</p>
          </CardContent>

          {!item.imageFirst && (
            <div className="rounded-2xl flex-shrink-0">
              <Image
                src={item.image}
                alt={`${item.title} Image`}
                width={250}
                height={250}
                className="rounded-xl object-cover"
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Ingredients;

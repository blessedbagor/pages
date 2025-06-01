"use client";

import {Carousel} from "@/components/ui/animated-carousel";
export function ResourcesList() {
  const slideData = [
    {
      button: "View Slides",
      src: "/images/resources/1.png",
      href: "https://www.canva.com/design/DAGSTlL6gN4/V6ppFmTLQmjF8jrel79wag/view?utm_content=DAGSTlL6gN4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=had9d42c5b3",
    },
    {
        button: "View Slides",
        src: "/images/resources/2.png",
        href: "https://www.canva.com/design/DAGS8osscQs/JlR3Al4kBBCKMt5KL3VyRg/view?utm_content=DAGS8osscQs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6736ca0c1e",
    },
    {
        button: "View Slides",
        src: "/images/resources/3.png",
        href: "https://www.canva.com/design/DAGUpNxL-sw/Sz-8vdbFWAk_MOouqL4a9g/view?utm_content=DAGUpNxL-sw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a73e3673d",
    },
    {
        button: "View Slides",
        src: "/images/resources/4.png",
        href: "https://www.canva.com/design/DAGULif8bV0/s55Astj3t611WdJF4v6N9Q/view?utm_content=DAGULif8bV0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h06e9787770",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-[50rem] py-20">
      <Carousel slides={slideData} />
    </div>
  );
}


import React from "react";

export function SignUpHeroSection() {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center text-center px-4">
      {/* Radial gradient for a faded look */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        Sign Up
      </h2>
      <div className="relative z-20 mt-6">
      </div>
    </div>
  );
}

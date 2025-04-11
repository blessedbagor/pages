"use client";

import { BookIcon, DollarSignIcon, HeartIcon} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ServiceList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<HeartIcon className="h-12 w-12 text-black dark:text-gold" />}
    title="iGift Care Program"
    description="Access expert telehealth services for medical, mental health, and wellness support—anytime, anywhere."
  />
<GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<BookIcon className="h-12 w-12 text-black dark:text-gold" />}
    title="iGift Learn Program"
    description="Join a supportive community to develop sales skills, leadership, personal growth, and health awareness."
  />
  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<DollarSignIcon className="h-12 w-12 text-black dark:text-gold" />}
    title="iGift Earn Program"
    description="Achieve financial independence through personal selling, team development, and residual income."
  />
  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<DollarSignIcon className="h-12 w-12 text-black dark:text-gold" />}
    title="iGift Reward Program"
    description="Earn reward credits on purchases and gift certificates (GCs), then redeem them like cash at iGift partner merchants."
  />
</ul>

  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400 font-mono"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

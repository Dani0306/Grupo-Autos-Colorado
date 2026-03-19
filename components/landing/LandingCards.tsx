import { LANDING_CARDS_INFO } from "@/data/landing/cardsInfo";
import { LucideIcon } from "lucide-react";
import React from "react";

const LandingCard = ({
  logo: Logo,
  title,
  description,
}: {
  logo: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col space-y-4 items-center max-w-75">
      <Logo className="size-12 p-2 rounded-full bg-gold/30 text-gold border border-gold" />
      <h3 className="font-bold text-gold text-sm">{title}</h3>
      <p className="text-center text-foreground/60 text-xs">{description}</p>
    </div>
  );
};

const LandingCards = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center my-20 space-y-20">
      <h2 className="text-2xl md:text-3xl italic lg:text-4xl font-black uppercase leading-none tracking-tight text-foreground">
        Estándar <span className="text-gold">Colorado.</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {LANDING_CARDS_INFO.map((item) => (
          <LandingCard
            key={item.title}
            description={item.description}
            title={item.title}
            logo={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingCards;

"use client";

import { CARS_INFO } from "@/data/landing/carsInfo";
import Button from "../shared/Button";
import ImageComponent from "../shared/ImageComponent";
import { formatToCOP } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useInviewCustom } from "@/hooks/shared/useInViewCustom";

const CarCard = ({
  name,
  price,
  image,
  model,
  km,
  category,
}: {
  name: string;
  price: number;
  image: string;
  model: string;
  km: string;
  category: string;
}) => {
  return (
    <div className="w-75 h-90 border border-gold glow-gold flex flex-col">
      <ImageComponent className="w-full h-[60%]" src={image} alt="car image" />
      <div className="flex flex-col space-y-2 p-4">
        <span className="text-[10px] text-gold font-semibold uppercase">
          {category}
        </span>
        <strong className="text-white text-base font-semibold">{name}</strong>
        <span className="text-foreground-muted text-xs">
          {model} - {km} km
        </span>
        <strong className="text-gold text-xl font-bold">
          {formatToCOP(price)}
        </strong>
        <Button className="w-full" text="Detalles" fill />
      </div>
    </div>
  );
};

const Catalog = () => {
  const { ref, inView } = useInviewCustom();

  return (
    <div
      ref={ref}
      className={`mx-auto items-center flex flex-col px-4 lg:px-6 space-y-16 my-30 opacity-0 ${inView && "slide-right"}`}
    >
      <h2 className="text-2xl md:text-3xl italic lg:text-4xl font-black uppercase leading-none tracking-tight text-foreground">
        Elige tu <span className="text-gold">vehículo ideal.</span>
      </h2>
      <div className="flex flex-wrap gap-8 items-center justify-center relative">
        <div className="absolute -top-10 right-0">
          <span className=" text-sm flex space-x-2 hover:text-gold-light hover:border-gold-light transition-all duration-200 cursor-pointer items-center text-gold font-semibold w-max pb-1 px-2 mt-2">
            <p>Ver Todo</p>
            <ArrowRight className="size-4" />
          </span>
        </div>
        {CARS_INFO.map((item) => (
          <CarCard
            key={item.km}
            name={item.name}
            price={item.price}
            image={item.image}
            model={item.model}
            km={item.km}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

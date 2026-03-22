import { CARS_INFO } from "@/data/landing/carsInfo";
import Button from "../shared/Button";
import ImageComponent from "../shared/ImageComponent";
import { formatToCOP } from "@/lib/utils";

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
  return (
    <div className="mx-auto items-center flex flex-col px-4 lg:px-6 space-y-16 my-30">
      <h2 className="text-2xl md:text-3xl italic lg:text-4xl font-black uppercase leading-none tracking-tight text-foreground">
        Elige tu <span className="text-gold">vehículo ideal.</span>
      </h2>
      <div className="flex flex-wrap space-x-4 space-y-8 items-center justify-center">
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

"use client";

import { useInviewCustom } from "@/hooks/shared/useInViewCustom";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const History = () => {
  const { ref, inView } = useInviewCustom();

  return (
    <div
      ref={ref}
      className={`mx-auto flex items-center flex-col md:flex-row space-y-8 justify-center my-40 px-6 opacity-0 ${inView && "slide-left"}`}
    >
      <div className="relative w-full md:w-100 h-80 md:h-150 mx-auto md:mx-8">
        <Image
          className="object-cover"
          src="/carinside.jpg"
          alt="car inside"
          fill // ← let it fill the parent div instead of fixed w/h on the image itself
        />
        <div className="w-45 h-25 absolute flex flex-col justify-center items-center bottom-0 left-0 bg-gold glow-gold text-black">
          <span className="text-3xl font-extrabold tracking-tighter">100%</span>
          <span className="font-semibold text-sm">Garantía</span>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl md:text-3xl italic lg:text-4xl font-black uppercase leading-none tracking-tight text-foreground">
          Pasión por la <br />
          <span className="text-gold">Perfección.</span>
        </h2>

        <p className="text-foreground-muted text-sm leading-relaxed max-w-md">
          Grupo Autos Colorado nace con la visión de ofrecer una experiencia
          diferente en la compra y venta de vehículos, basada en la confianza,
          la transparencia y la atención personalizada. <br /> <br /> Aunque
          estamos dando nuestros primeros pasos, cada vehículo en nuestro
          inventario es seleccionado cuidadosamente, pensando en la calidad, el
          rendimiento y el valor para nuestros clientes. <br /> <br /> Nuestro
          compromiso es crecer junto a ti, construyendo una reputación sólida a
          través de cada negocio realizado.
        </p>
        <span className="flex space-x-2 hover:text-gold-light hover:border-gold-light transition-all duration-200 cursor-pointer items-center text-gold font-semibold border-b border-gold w-max pb-1 px-2 mt-2">
          <p>Nuestra visión</p>
          <ArrowRight className="size-4" />
        </span>
      </div>
    </div>
  );
};

export default History;

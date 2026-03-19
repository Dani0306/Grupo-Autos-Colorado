import React from "react";
import ImageComponent from "../shared/ImageComponent";

const History = () => {
  return (
    <div className="mx-auto flex items-center flex-col md:flex-row space-y-8 justify-center my-40 px-6">
      <div className="relative">
        <ImageComponent
          className="object-fit w-full md:w-100 h-150 mx-auto md:mx-8"
          src="/carinside.jpg"
          alt="car inside"
        />
        <div className="w-45 h-25 absolute  flex flex-col justify-center items-center bottom-0 left-0 bg-gold glow-gold text-black">
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
      </div>
    </div>
  );
};

export default History;

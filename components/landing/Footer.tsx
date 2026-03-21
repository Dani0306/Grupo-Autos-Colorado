import React from "react";
import Logo from "../shared/Logo";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex items-start justify-between flex-wrap px-4 md:px-6 mb-20 gap-10">
      <div className="flex flex-col space-y-4 max-w-80">
        <div className="flex space-x-4 items-center">
          <Logo />
          <span className=" text-gold font-extrabold tracking-tighter text-xl">
            GRUPO AUTOS COLORADO
          </span>
        </div>
        <p className="text-foreground/60 text-xs uppercase">
          Excelencia automotriz con el respaldo de una tradición familiar
          inquebrantable.
        </p>
      </div>
      <div className="flex flex-col space-y-4 min-w-70">
        <span className="uppercase text-gold text-sm font-bold cursor-pointer hover:text-gold-light transition-all duration-200">
          Arquitectura
        </span>
        <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
          inventario
        </span>
        <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
          servicios
        </span>
        <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
          atelier
        </span>
        <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
          legado
        </span>
      </div>

      <div className="flex flex-col space-y-5 min-w-70">
        <span className="uppercase text-gold text-sm font-bold cursor-pointer hover:text-gold-light transition-all duration-200">
          contacto
        </span>
        <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
          +57 (302) 101 5931
        </span>
        <span className="text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
          tatocoos@yahoo.com
        </span>
      </div>

      <div className="flex flex-col space-y-5 min-w-70">
        <span className="uppercase text-gold text-sm font-bold cursor-pointer hover:text-gold-light transition-all duration-200">
          Síguenos
        </span>
        <div className="flex items-center space-x-2">
          <Instagram className="size-4 text-foreground-muted" />
          <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
            instagram
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Facebook className="size-4 text-foreground-muted" />
          <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
            facebook
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Twitter className="size-4 text-foreground-muted" />
          <span className="uppercase text-foreground-muted text-xs cursor-pointer hover:text-white transition-all duration-200">
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

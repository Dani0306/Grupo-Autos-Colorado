import ImageComponent from "./ImageComponent";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <ImageComponent className="w-8 h-10" alt="Logo" src="/logo1.png" />
      {/* <span className="hidden md:block text-2xl font-bold text-foreground">
        Grupo Autos <span className="text-gold">Colorado</span>
      </span> */}
    </div>
  );
};

export default Logo;

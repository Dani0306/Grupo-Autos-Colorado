import { LucideIcon } from "lucide-react";

const Button = ({
  fill = false,
  text,
  logo: Logo,
  className,
}: {
  fill: boolean;
  text: string;
  logo?: LucideIcon;
  className?: string;
}) => {
  return (
    <button
      className={`hover:bg-gold-light hover:scale-[1.02] transition-all duration-500 cursor-pointer py-2 px-5 text-xs font-bold rounded-sm border border-gold uppercase flex items-center justify-center space-x-3 ${fill ? "bg-gold text-black" : "bg-transparent text-foreground"} ${className}`}
    >
      <span>{text}</span>
      {Logo && <Logo className="size-4" />}
    </button>
  );
};

export default Button;

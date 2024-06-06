import { FC, ReactNode } from "react";
import { cn } from "../../../utils";

type TProps = {
  children?: ReactNode;
  className?: string;
  bold?: boolean;
  size?: "sm" | "md" | "lg";
};

export const BodyText: FC<TProps> = ({ children, className, bold, size='sm' }) => {
  return (
    <p
      className={cn(
        "text-neutral-200",
        bold && "font-bold",
        size === "sm" && "text-base",
        size === "md" && "text-xl",
        size === "lg" && "text-4xl",
        className
      )}
    >
      {children}
    </p>
  );
};

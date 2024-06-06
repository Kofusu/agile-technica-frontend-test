import { FC, ReactElement, ReactNode } from "react";
import { cn } from "../../../utils";

type TProps = {
  className?: string;
  iconElement?: ReactElement;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  variant?: "main" | "secondary";
};

export const Button: FC<TProps> = ({
  className,
  children,
  iconElement,
  iconPosition = 'left',
  size = "sm",
  variant = "main",
}) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center rounded-lg hover:bg-opacity-90 hover:scale-105 active:bg-opacity-75 active:scale-95",
        // Icon
        iconElement || children ? "gap-2" : "",
        iconPosition === "left" ? "flex-row" : "flex-row-reverse",
        // Variant
        variant === "main" && "bg-main-700 text-main-100",
        variant === "secondary" && "bg-neutral-900 text-neutral-200",
        // Size
        size === "sm" && "px-4 py-0.5 text-base",
        size === "md" && "px-8 py-2 text-lg",
        size === "lg" && "px-12 py-4 text-2xl",
        className
      )}
    >
      {iconElement && iconElement}
      {children}
    </button>
  );
};

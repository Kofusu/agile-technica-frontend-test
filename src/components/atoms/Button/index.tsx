import { FC, InputHTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "../../../utils";

type TProps = InputHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  iconElement?: ReactElement;
  iconPosition?: "left" | "right";
  btnSize?: "sm" | "md" | "lg";
  children?: ReactNode | string | ReactElement;
  variant?: "main" | "secondary";
};

export const Button: FC<TProps> = (
  {
    className,
    children,
    iconElement,
    iconPosition = "left",
    btnSize = "sm",
    variant = "main",
  },
  ...restProps
) => {
  return (
    <button
      className={cn(
        "flex shadow-xl justify-center items-center rounded-lg hover:bg-opacity-90 hover:scale-105 active:bg-opacity-75 active:scale-95",
        // Icon
        iconElement || children ? "gap-2" : "",
        iconPosition === "left" ? "flex-row" : "flex-row-reverse",
        // Variant
        variant === "main" && "bg-main-700 text-main-100",
        variant === "secondary" && "bg-neutral-900 text-neutral-200",
        // Size
        btnSize === "sm" && "px-4 py-0.5 text-base",
        btnSize === "md" && "px-8 py-2 text-lg",
        btnSize === "lg" && "px-12 py-4 text-2xl",
        className
      )}
      {...restProps}
    >
      {iconElement && iconElement}
      {children}
    </button>
  );
};

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../../utils";

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, TProps>(
  ({ className, ...restProps }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "text-neutral-700 placeholder:text-neutral-300 bg-inherit focus:outline-none w-full h-full",
          className
        )}
        {...restProps}
      />
    );
  }
);

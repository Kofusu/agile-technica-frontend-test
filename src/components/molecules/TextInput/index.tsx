import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Input } from "../../atoms";
import { cn } from "../../../utils";

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  iconElement?: ReactNode;
  iconPosition?: "left" | "right";
};

export const TextInput = forwardRef<HTMLInputElement, TProps>(({
  iconElement,
  iconPosition = "left",
  className,
  ...restProps
}, ref) => {
  return (
    <div
      className={cn(
        "border-b shadow-md flex justify-between items-center px-6 rounded-md",
        iconElement && "gap-4",
        iconPosition === "left" ? "flex-row" : "flex-row-reverse",
        className
      )}
    >
      <Input ref={ref} className="py-4" {...restProps} />
      {iconElement && <span className={cn("text-neutral-700")}>{iconElement}</span>}
    </div>
  );
})

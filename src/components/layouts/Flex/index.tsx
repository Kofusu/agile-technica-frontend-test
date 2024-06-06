import { FC, ReactNode } from "react";
import { cn } from "../../../utils";

type TProps = {
  children?: ReactNode;
  justify?: "center" | "start" | "end" | "between" | "around";
  items?: "center" | "start" | "end" | "stretch";
  direction?: "vertical" | "horizontal";
  onClick?: () => void
  className?: string;
};

export const Flex: FC<TProps> = ({
  children,
  className,
  justify = "center",
  items = "center",
  direction = "horizontal",
  onClick
}) => {
  return (
    <div
    onClick={onClick}
      className={cn(
        "flex gap-0",
        // Justify
        justify === "center" && "justify-center",
        justify === "start" && "justify-start",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        justify === "around" && "justify-around",
        // Items
        items === "center" && "items-center",
        items === "start" && "items-start",
        items === "end" && "items-end",
        items === "stretch" && "items-stretch",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

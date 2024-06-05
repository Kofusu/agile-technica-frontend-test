import { FC, ReactNode } from "react";
import { cn } from "../../../utils";

type TProps = {
  id?: string;
  bg?: string;
  direction?: "vertical" | "horizontal";
  className?: string;
  justify?: "center" | "start" | "end" | "between" | "around";
  items?: "center" | "start" | "end";
  children?: ReactNode;
};

export const ScreenSection: FC<TProps> = ({
  id,
  bg,
  direction = "horizontal",
  children,
  items = "center",
  justify = "center",
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex justify-center items-center bg-cover bg-center text-neutral-200",
        bg ?? `bg-hero-img`
      )}
    >
      <div
        className={cn(
          "h-full min-h-screen w-full flex container p-4 overflow-hidden",
          // Items
          items === "center" && "items-center",
          items === "start" && "items-start",
          items === "end" && "items-end",
          // Justify
          justify === "center" && "justify-center",
          justify === "start" && "justify-start",
          justify === "end" && "justify-end",
          justify === "between" && "justify-between",
          justify === "around" && "justify-around",
          // Direction
          direction === "horizontal" ? "flex-row" : "flex-col",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

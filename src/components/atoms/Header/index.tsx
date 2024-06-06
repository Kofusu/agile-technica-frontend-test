import { FC, ReactNode } from "react";
import { cn } from "../../../utils";

type TProps = {
  children?: ReactNode;
  className?: string;
  bold?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Header: FC<TProps> = ({
  children,
  className,
  bold = "bold",
  level = 1,
}) => {
  if (level === 1) {
    return (
      <h1
        className={cn(
          "text-neutral-200 text-6xl",
          bold && "font-bold",
          className
        )}
      >
        {children}
      </h1>
    );
  }
  if (level === 2) {
    return (
      <h2
        className={cn(
          "text-neutral-200 text-5xl",
          bold && "font-bold",
          className
        )}
      >
        {children}
      </h2>
    );
  }
  if (level === 3) {
    return (
      <h3
        className={cn(
          "text-neutral-200 text-4xl",
          bold && "font-bold",
          className
        )}
      >
        {children}
      </h3>
    );
  }
  if (level === 4) {
    return (
      <h4
        className={cn(
          "text-neutral-200 text-3xl",
          bold && "font-bold",
          className
        )}
      >
        {children}
      </h4>
    );
  }
  if (level === 5) {
    return (
      <h5
        className={cn(
          "text-neutral-200 text-2xl",
          bold && "font-bold",
          className
        )}
      >
        {children}
      </h5>
    );
  }
  if (level === 6) {
    return (
      <h6
        className={cn(
          "text-neutral-200 text-xl",
          bold && "font-bold",
          className
        )}
      >
        {children}
      </h6>
    );
  }
  return (
    <span className={cn("text-neutral-200", bold && "font-bold", className)}>
      {children}
    </span>
  );
};

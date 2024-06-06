import { FC } from "react";
import { cn } from "../../../utils";

type TProps = {
  src?: string;
  alt?: string;
  className?: string;
  caption?: string;
};

export const Image: FC<TProps> = ({ src, alt = "", className, caption }) => {
  return (
    <figure className={cn("overflow-hidden", className)}>
      <img src={src} alt={alt} loading="lazy" className={cn("h-full w-full object-cover")} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

import * as React from "react";

interface PosterProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | string[];
  alt: string;
  borderRadius?: string | number;
  sizes?: string;
  className?: string;
}

export const Poster: React.FC<PosterProps> = ({
  src,
  alt,
  sizes = "100vw",
  className = "",
  style,
  ...rest
}) => {
  const sources = Array.isArray(src) ? src : [src];
  const srcSet = sources.length > 1 ? sources.join(", ") : undefined;
  const mainSrc = sources[0];

  return (
    <img
      src={mainSrc}
      srcSet={srcSet}
      alt={alt}
      sizes={srcSet ? sizes : undefined}
      className={className}
      style={{
        ...style,
      }}
      {...rest}
    />
  );
};

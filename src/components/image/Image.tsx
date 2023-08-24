import { ImageType } from "../../data/types";

export interface ImageProps extends ImageType {
  withBorderBottom?: boolean;
}

export const Image = ({ src, alt, withBorderBottom }: ImageProps) => {
  return (
    <img
      className={`w-[400px] ${
        withBorderBottom ? "border-b-4 border-primary" : ""
      }`}
      src={src}
      alt={alt}
    />
  );
};

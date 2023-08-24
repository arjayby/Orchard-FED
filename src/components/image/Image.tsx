import { ImageType } from "../../data/types";

export interface ImageProps extends ImageType {
  withBorderBottom?: boolean;
}

export const Image = ({ src, alt, withBorderBottom }: ImageProps) => {
  return (
    <div className="relative group">
      {withBorderBottom && (
        <div className="absolute bottom-0 h-1 w-full bg-left bg-gradient-to-r from-primary to-primary bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out" />
      )}
      <img
        className="md:w-[400px] w-screen object-contain"
        src={src}
        alt={alt}
      />
    </div>
  );
};

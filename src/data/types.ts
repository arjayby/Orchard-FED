export type ImageType = {
  src: string;
  enlargeSrc: string;
  alt: string;
};

export type BlogType = {
  title: string;
  intro: string;
  description?: string;
  images: ImageType[];
};

interface IImageProps {
  width?: string;
  height?: string;
  alt?: string;
  src?: string;
}

type ImageProps = IImageProps & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<ImageProps> = ({ width, height, ...props }) => (
  <img width={width} height={height} {...props} />
);

import { IImageProps } from 'interface';

type ImageProps = IImageProps & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<ImageProps> = ({ width, height, ...props }) => (
  <img width={width} height={height} {...props} />
);

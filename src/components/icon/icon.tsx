import { Image as ImageIcon } from '../image';
import { useEffect, useState } from 'react';

type IconProps = {
  variant: string;
  width?: string;
  height?: string;
};

export const Icon: React.FC<IconProps> = ({ variant, width, height }) => {
  const [src, setSrc] = useState();

  const mount = async () => {
    const { default: src } = await import(`../../assets/${variant}.svg`);
    if (!src) return;
    return setSrc(src);
  };

  useEffect(() => {
    mount();
  }, [mount]);

  return <ImageIcon src={src} width={width} height={height} alt={variant} />;
};

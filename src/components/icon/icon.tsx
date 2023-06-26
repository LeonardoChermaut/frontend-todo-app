import { Image as ImageIcon } from '../image';
import { useEffect, useState } from 'react';

type IconProps = {
  variant: string;
};

export const Icon: React.FC<IconProps> = ({ variant }) => {
  const [src, setSrc] = useState();

  const mount = async () => {
    const { default: src } = await import(`../../../public/${variant}.svg`);
    if (!src) return;
    return setSrc(src);
  };

  useEffect(() => {
    mount();
  }, []);

  return <ImageIcon src={src} width="22px" height="22px" alt={variant} />;
};

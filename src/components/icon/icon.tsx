import { useEffect, useState } from 'react';

type IconProps = {
  variant: string;
};

export const Icon: React.FC<IconProps> = ({ variant }) => {
  const [src, setSrc] = useState();

  const mount = async () => {
    const result = await import(`../../../public/${variant}.svg`);
    if (result) return setSrc(result.default);
  };

  useEffect(() => {
    mount();
  }, []);

  return <img src={src} width="22px" height="22px" alt={variant} />;
};

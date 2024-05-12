import React, { PropsWithChildren } from 'react';

interface LabelProps extends PropsWithChildren {}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <label className='left-3 z-20 mb-1.5 block max-w-full overflow-hidden text-ellipsis pb-0 pe-2 text-small subpixel-antialiased'>{children}</label>
  );
};

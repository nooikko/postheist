import { WithTailwind } from '#types';
import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface RestraintLayoutProps extends WithTailwind<PropsWithChildren> {}

export const RestraintLayout: React.FC<RestraintLayoutProps> = ({ children, className }) => {
  const classes = twMerge(['max-w-7xl', 'mx-auto', 'flex', 'w-full', 'items-center', 'px-6', className]);

  return <div className={classes}>{children}</div>;
};

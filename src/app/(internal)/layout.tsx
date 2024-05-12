import { RestraintLayout } from '#atoms/RestraintLayout';
import { CommandPalette } from '#organisms/CommandPalette';
import { TopNav } from '#organisms/TopNav';
import React, { type PropsWithChildren } from 'react';
import { Providers } from './providers';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Providers>
      <CommandPalette />
      <TopNav />
      <RestraintLayout>{children}</RestraintLayout>
    </Providers>
  );
};

export default Layout;

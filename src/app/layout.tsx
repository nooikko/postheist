import { NextUIProvider } from '@nextui-org/react';
import React, { type PropsWithChildren } from 'react';
import '../styles/tailwind.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <div className='text-sm'>{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default Layout;

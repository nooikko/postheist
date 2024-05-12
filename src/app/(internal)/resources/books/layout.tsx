import { BookProvider } from '#atoms/BookContext';
import React, { type PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <BookProvider>{children}</BookProvider>;
};

export default Layout;

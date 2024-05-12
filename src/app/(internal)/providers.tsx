'use client';
import { SearchProvider } from '#atoms/SearchContext';
import React, { type PropsWithChildren } from 'react';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

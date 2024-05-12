import { isAppleDevice } from '@react-aria/utils';
import React, { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react';

interface SearchContextShape {
  search: string;
  setSearch: (search: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SearchContext = createContext<SearchContextShape>({
  search: '',
  setSearch: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const hotkey = isAppleDevice() ? 'metaKey' : 'ctrlKey';

      if (e?.key?.toLowerCase() === 'k' && e[hotkey]) {
        e.preventDefault();
        isOpen ? setIsOpen(false) : setIsOpen(true);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      isOpen,
      setIsOpen,
    }),
    [isOpen, search, setIsOpen, setSearch],
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

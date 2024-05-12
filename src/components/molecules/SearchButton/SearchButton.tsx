'use client';
import { Icon } from '#atoms/Icon';
import { Button } from '#atoms/NextUI';
import { SearchContext } from '#atoms/SearchContext';
import React, { useContext } from 'react';

export const SearchButton: React.FC = () => {
  const { setIsOpen } = useContext(SearchContext);

  return (
    <Button
      startContent={<Icon icon='radix-icons:magnifying-glass' className='mx-0 h-10 w-full px-0 text-white/70 md:w-6' />}
      variant='bordered'
      size='sm'
      className='h-8 !min-w-0 justify-start gap-0 border-transparent pl-2 text-base text-white/60 md:w-36 md:gap-3 md:border-secondary lg:w-48'
      onClick={() => setIsOpen(true)}
    >
      <div className='hidden w-full items-center justify-between text-sm md:flex'>
        <div className='hidden md:flex'>Search</div>
        <div className='hidden text-xs text-white/80 md:flex'>
          <Icon icon='icomoon-free:ctrl' /> K
        </div>
      </div>
    </Button>
  );
};

'use client';
import { BookContext } from '#atoms/BookContext';
import { Autocomplete, AutocompleteItem } from '#atoms/NextUI';
import { HumanReadableBookTypes } from '#constants';
import type { BookType } from '@prisma/client';
import React, { useContext } from 'react';

export const BookTypeFilter: React.FC = () => {
  const { setType, type } = useContext(BookContext);

  return (
    <Autocomplete
      label='Book Type'
      placeholder='Select a Book Type'
      size='sm'
      labelPlacement='outside'
      variant='bordered'
      className='max-w-full md:max-w-56'
      onSelectionChange={(value) => setType(value as BookType)}
      value={type}
      inputProps={{
        classNames: {
          inputWrapper: 'data-[hover=true]:border-secondary group-data-[focus=true]:border-secondary',
        },
      }}
    >
      {Object.entries(HumanReadableBookTypes).map(([value, text]) => (
        <AutocompleteItem key={value} value={value}>
          {text}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

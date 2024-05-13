'use client';
import { Autocomplete, AutocompleteItem } from '#atoms/NextUI';
import { HumanReadableBookTypes } from '#constants';
import type { BookType } from '@prisma/client';
import React from 'react';

interface BookTypeAutocompleteProps {
  value: BookType | undefined;
  onSelectionChange: (value: any) => void;
}

export const BookTypeAutocomplete: React.FC<BookTypeAutocompleteProps> = ({ value, onSelectionChange }) => {
  return (
    <Autocomplete
      label='Book Type'
      placeholder='Select a Book Type'
      size='sm'
      labelPlacement='outside'
      variant='bordered'
      className='max-w-full md:max-w-56'
      onSelectionChange={(value) => onSelectionChange(value)}
      value={value}
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

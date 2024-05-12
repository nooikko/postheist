'use client';
import { Autocomplete, AutocompleteItem } from '#atoms/NextUI';
import { HumanReadableBookTypes } from '#constants';
import React from 'react';

export const BookTypeFilter: React.FC = () => {
  return (
    <Autocomplete
      label='Book Type'
      placeholder='Select a Book Type'
      size='sm'
      labelPlacement='outside'
      variant='bordered'
      className='max-w-full sm:max-w-56'
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

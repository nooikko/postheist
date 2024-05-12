'use client';
import { Autocomplete, AutocompleteItem } from '#atoms/NextUI';
import { TrainingLevel } from '@prisma/client';
import React from 'react';

export const BookLevelFilter: React.FC = () => {
  return (
    <Autocomplete
      label='Training Level'
      placeholder='Select a Training Level'
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
      {Object.values(TrainingLevel).map((level) => (
        <AutocompleteItem key={level} value={level}>
          {level}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

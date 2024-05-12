'use client';
import { BookContext } from '#atoms/BookContext';
import { Autocomplete, AutocompleteItem } from '#atoms/NextUI';
import { TrainingLevel } from '@prisma/client';
import React, { useContext } from 'react';

export const BookLevelFilter: React.FC = () => {
  const { setTrainingLevel, trainingLevel } = useContext(BookContext);
  return (
    <Autocomplete
      label='Training Level'
      placeholder='Select a Training Level'
      size='sm'
      labelPlacement='outside'
      variant='bordered'
      value={trainingLevel}
      onSelectionChange={(value) => setTrainingLevel(value as TrainingLevel)}
      className='max-w-full md:max-w-56'
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

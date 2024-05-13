'use client';
import { BookContext } from '#atoms/BookContext';
import { BookTypeAutocomplete } from '#molecules/BookTypeAutocomplete';
import React, { useContext } from 'react';

export const BookTypeFilter: React.FC = () => {
  const { setType, type } = useContext(BookContext);

  return <BookTypeAutocomplete value={type} onSelectionChange={setType} />;
};

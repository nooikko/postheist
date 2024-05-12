'use client';
import { BookContext } from '#atoms/BookContext';
import { BookOverview } from '#molecules/BookOverview';
import { DataNotFound } from '#molecules/DataNotFound';
import React, { useContext } from 'react';

export const BookOverviewList: React.FC = () => {
  const { filteredBooks, selectedId } = useContext(BookContext);

  if (!filteredBooks.length) {
    return <DataNotFound />;
  }

  return (
    <>
      {filteredBooks.map((book) => (
        <BookOverview key={book.id} active={selectedId === book.id} {...book} />
      ))}
    </>
  );
};

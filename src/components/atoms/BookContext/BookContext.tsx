'use client';
import { getAllBooks } from '#actions/Books';
import { Book, BookType, type TrainingLevel } from '@prisma/client';
import React, { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react';

interface BookContextShape {
  selectedId?: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
  books?: Book[];
  loading?: boolean;
  trainingLevel?: TrainingLevel;
  setTrainingLevel: React.Dispatch<React.SetStateAction<TrainingLevel | undefined>>;
  type?: BookType;
  setType: React.Dispatch<React.SetStateAction<BookType | undefined>>;
  filteredBooks?: Book[];
}

export const BookContext = createContext<BookContextShape>({
  selectedId: undefined,
  setSelectedId: () => {},
  books: [],
  loading: true,
  trainingLevel: undefined,
  setTrainingLevel: () => {},
  type: undefined,
  setType: () => {},
  filteredBooks: [],
});

export const BookProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [trainingLevel, setTrainingLevel] = useState<TrainingLevel | undefined>(undefined);
  const [type, setType] = useState<BookType | undefined>(undefined);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (loading || books.length > 0) {
      return;
    }

    const fetchBooks = async () => {
      try {
        setLoading(true);
        const books = await getAllBooks();
        setBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error); // eslint-disable-line no-console
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [books.length, loading]);

  useEffect(() => {
    if (!books.length) {
      return;
    }

    const filtered = books.filter((book) => {
      if (trainingLevel && book.trainingLevel !== trainingLevel) {
        return false;
      }

      if (type && book.type !== type) {
        return false;
      }

      return true;
    });

    setFilteredBooks(filtered);
  }, [type, trainingLevel, books]);

  const value = useMemo(
    () => ({
      selectedId,
      setSelectedId,
      books,
      loading,
      trainingLevel,
      setTrainingLevel,
      type,
      setType,
      filteredBooks,
    }),
    [books, loading, selectedId, trainingLevel, type, setSelectedId, setTrainingLevel, setType, filteredBooks],
  );

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

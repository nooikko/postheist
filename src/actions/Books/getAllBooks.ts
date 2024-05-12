'use server';
import { prisma } from '#prisma';
import type { Book } from '@prisma/client';

/**
 * Retrieves all books from the database.
 * @returns A promise that resolves to an array of books.
 * @throws If an error occurs while fetching the books.
 */
export const getAllBooks = async (): Promise<Book[]> => {
  try {
    return await prisma.book.findMany();
  } catch (error) {
    // Handle the error here
    console.error('Error occurred while fetching all books:', error); // eslint-disable-line no-console
    throw error; // Rethrow the error to be handled by the caller
  }
};

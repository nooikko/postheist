'use server';
import { prisma } from '#prisma';
import type { TrainableSkill } from '@prisma/client';

/**
 * Retrieves all skills from the database.
 * @returns A promise that resolves to an array of skills.
 * @throws If an error occurs while fetching the skills.
 */
export const getAllSkills = async (): Promise<TrainableSkill[]> => {
  try {
    return await prisma.trainableSkill.findMany();
  } catch (error) {
    // Handle the error here
    console.error('Error occurred while fetching skills:', error); // eslint-disable-line no-console
    throw error; // Rethrow the error to be handled by the caller
  }
};

'use server';
import { prisma } from '#prisma';

/**
 * Retrieves the count of all skills.
 * @returns A promise that resolves to the number of skills.
 */
export const getSkillsCount = async (): Promise<number> => {
  try {
    return await prisma.trainableSkill.count();
  } catch (error) {
    // Handle the error here
    console.error('Error occurred while fetching skills:', error); // eslint-disable-line no-console
    throw error; // Rethrow the error to be handled by the caller
  }
};

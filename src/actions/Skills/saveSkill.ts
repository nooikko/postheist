'use server';
import { prisma } from '#prisma';
import { TrainableSkill } from '@prisma/client';

type SavableSkill = Pick<TrainableSkill, 'name' | 'description'>;

/**
 * Saves a skill to the database.
 * @param skill - The skill to be saved.
 * @returns A promise that resolves to the saved skill.
 * @throws If there is an error while saving the skill.
 */
export const saveSkill = async (skill: SavableSkill): Promise<TrainableSkill> => {
  try {
    return await prisma.trainableSkill.create({ data: skill });
  } catch (error) {
    console.error('Error saving skill:', error); // eslint-disable-line no-console
    throw error;
  }
};

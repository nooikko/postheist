import { BookType } from '@prisma/client';

export const HumanReadableBookTypes = {
  [BookType.TrainingBook]: 'Training',
  [BookType.RecipeBook]: 'Recipe',
};

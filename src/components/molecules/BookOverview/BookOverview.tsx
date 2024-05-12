import { Icon } from '#atoms/Icon';
import { Card, CardBody, CardFooter, CardHeader, Link } from '#atoms/NextUI';
import { Book, type TrainingLevel } from '@prisma/client';
import React from 'react';

interface BookOverviewProps {
  name: Book['name'];
  description: Book['description'];
  recipesCount?: number;
  featCount?: number;
  hours: number;
  myHours?: number;
  trainingLevel: TrainingLevel;
  active?: boolean;
}

export const BookOverview: React.FC<BookOverviewProps> = ({
  name,
  description,
  hours,
  trainingLevel,
  recipesCount = 0,
  featCount = 0,
  myHours = 0,
  active = false,
}) => {
  return (
    <Card
      as={Link}
      href='/resources/books/1'
      className='group w-full cursor-pointer rounded-md border-2 border-transparent hover:border-secondary data-[selected=true]:border-secondary '
      data-selected={active}
    >
      <CardHeader className='justify-between text-xl font-semibold '>
        <div className='group-hover:text-secondary'>{name}</div>
        <div>
          {myHours} / {hours} Hours
        </div>
      </CardHeader>
      <CardBody className='text-base'>{description}</CardBody>
      <CardFooter className='items-center justify-between text-large'>
        <div>
          {recipesCount > 0 && (
            <div className='flex items-center'>
              <Icon icon='mdi:invoice-line-items-outline' className='h-6 w-6' />
              &nbsp;{recipesCount} Recipes
            </div>
          )}
          {featCount > 0 && (
            <div className='flex items-center'>
              <Icon icon='mdi:arm-flex-outline' className='h-6 w-6' />
              &nbsp;{featCount} Feats
            </div>
          )}
        </div>
        <div>{trainingLevel}</div>
      </CardFooter>
    </Card>
  );
};

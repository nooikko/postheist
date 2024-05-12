import { Card, CardBody, CardHeader } from '#atoms/NextUI';
import { TrainableSkill } from '@prisma/client';
import React from 'react';

interface SkillOverviewProps {
  name: TrainableSkill['name'];
  description: TrainableSkill['description'];
}

export const SkillOverview: React.FC<SkillOverviewProps> = ({ name, description }) => {
  return (
    <Card className='group w-full cursor-pointer rounded-md border-2 border-transparent hover:border-secondary data-[selected=true]:border-secondary '>
      <CardHeader className='justify-between text-xl font-semibold '>
        <div className='group-hover:text-secondary'>{name}</div>
      </CardHeader>
      <CardBody className='text-base'>{description}</CardBody>
    </Card>
  );
};

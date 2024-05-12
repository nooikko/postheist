import { Card } from '#atoms/NextUI';
import React from 'react';

export const DataNotFound: React.FC = () => {
  return (
    <Card className='flex w-full items-center justify-center space-y-2 rounded-md py-10'>
      <div className='text-lg'>It appears that Ganymede got lost trying to find your data.</div>
      <div className='text-xs opacity-50'>(Between you and me, I think he got distracted by the talking books again.)</div>
    </Card>
  );
};

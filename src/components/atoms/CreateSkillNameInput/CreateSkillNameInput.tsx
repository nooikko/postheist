'use client';
import { CreateSkillContext } from '#atoms/CreateSkillContext';
import { Input } from '#atoms/NextUI';
import React, { useContext } from 'react';

export const CreateSkillNameInput: React.FC = () => {
  const { name, setName } = useContext(CreateSkillContext);
  return (
    <Input
      value={name}
      onValueChange={(value) => setName(value)}
      size='sm'
      variant='bordered'
      labelPlacement='outside'
      label='Skill Name'
      placeholder='Enter a name'
      classNames={{
        inputWrapper: 'rounded-small group-data-[focus=true]:border-secondary data-[hover=true]:border-secondary',
      }}
    />
  );
};

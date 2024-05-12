'use client';
import { saveSkill } from '#actions/Skills';
import { CreateSkillContext } from '#atoms/CreateSkillContext';
import { Button } from '#atoms/NextUI';
import React, { useContext } from 'react';

export const CreateSkillSaveButton: React.FC = () => {
  const { name, description } = useContext(CreateSkillContext);

  const handleSave = async () => {
    if (!name || !description) {
      console.log('Name and description are required'); // eslint-disable-line no-console
      return;
    }

    try {
      await saveSkill({ name, description });
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  };

  return (
    <Button size='sm' variant='bordered' color='success' onClick={handleSave}>
      Create Skill
    </Button>
  );
};

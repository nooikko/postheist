'use client';
import { CreateSkillContext } from '#atoms/CreateSkillContext';
import { MarkdownEditor } from '#atoms/MarkdownEditor';
import React, { useContext } from 'react';

export const CreateSkillDescription: React.FC = () => {
  const { setDescription, description } = useContext(CreateSkillContext);

  return <MarkdownEditor value={description} onValueChange={(value) => setDescription(value)} />;
};

'use client';
import React, { PropsWithChildren, createContext, useMemo, useState } from 'react';

interface CreateSkillContextShape {
  name?: string;
  description?: string;
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const CreateSkillContext = createContext<CreateSkillContextShape>({
  name: '',
  description: '',
  setName: () => {},
  setDescription: () => {},
});

export const CreateSkillProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [name, setName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();

  const value = useMemo(() => ({ name, description, setName, setDescription }), [name, description, setName, setDescription]);

  return <CreateSkillContext.Provider value={value}>{children}</CreateSkillContext.Provider>;
};

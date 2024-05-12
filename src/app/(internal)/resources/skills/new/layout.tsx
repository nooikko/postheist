import { CreateSkillProvider } from '#atoms/CreateSkillContext';
import React, { type PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <CreateSkillProvider>{children}</CreateSkillProvider>;
};

export default Layout;

'use client';
import { getSkillsCount } from '#actions/Skills';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '#atoms/NextUI';
import React, { useEffect, useState } from 'react';

interface ResourceDropdownProps {
  active?: boolean;
}

export const ResourceDropdown: React.FC<ResourceDropdownProps> = ({ active }) => {
  const [skillCount, setSkillCount] = useState(0);

  useEffect(() => {
    const fetchSkillsCount = async () => {
      try {
        const count = await getSkillsCount();
        setSkillCount(count);
      } catch (error) {
        console.error('Failed to fetch skills count:', error); // eslint-disable-line no-console
      }
    };

    fetchSkillsCount();
  }, []);

  return (
    <Dropdown placement='bottom'>
      <DropdownTrigger className={`${active && 'text-secondary'} cursor-pointer text-medium font-semibold`}>Resources</DropdownTrigger>
      <DropdownMenu aria-label='Resource List' variant='flat'>
        <DropdownItem href='/resources/skills' className='text-white [&>span]:flex [&>span]:justify-between'>
          <div>Skills</div>
          <div className='text-secondary'>({skillCount})</div>
        </DropdownItem>
        <DropdownItem href='/resources/books' className='text-white [&>span]:flex [&>span]:justify-between'>
          <div>Books</div>
          <div className='text-secondary'>(16)</div>
        </DropdownItem>
        <DropdownItem href='/resources/npcs' className='text-white [&>span]:flex [&>span]:justify-between'>
          <div>NPCs</div>
          <div className='text-secondary'>(3)</div>
        </DropdownItem>
        <DropdownItem href='/resources/items' className='text-white [&>span]:flex [&>span]:justify-between'>
          <div>Items</div>
          <div className='text-secondary'>(16)</div>
        </DropdownItem>
        <DropdownItem href='/resources/feats' className='text-white [&>span]:flex [&>span]:justify-between'>
          <div>Feats</div>
          <div className='text-secondary'>(2)</div>
        </DropdownItem>
        <DropdownItem href='/resources/spells' className='text-white [&>span]:flex [&>span]:justify-between'>
          <div>Spells</div>
          <div className='text-secondary'>(7)</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

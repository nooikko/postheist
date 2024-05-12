'use client';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '#atoms/NextUI';
import React from 'react';

interface ResourceDropdownProps {
  active?: boolean;
}

export const ResourceDropdown: React.FC<ResourceDropdownProps> = ({ active }) => {
  return (
    <Dropdown placement='bottom'>
      <DropdownTrigger className={`${active && 'text-secondary'} cursor-pointer text-medium font-semibold`}>Resources</DropdownTrigger>
      <DropdownMenu aria-label='Resource List' variant='flat'>
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

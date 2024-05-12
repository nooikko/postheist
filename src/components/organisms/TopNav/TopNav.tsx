'use client';
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '#atoms/NextUI';
import { RestraintLayout } from '#atoms/RestraintLayout';
import { ProfileDropdown } from '#molecules/ProfileDropdown';
import { ResourceDropdown } from '#molecules/ResourceDropdown';
import { SearchButton } from '#molecules/SearchButton';

export const TopNav: React.FC = () => {
  return (
    <Navbar isBordered className='[&>header]:max-w-full [&>header]:px-0'>
      <RestraintLayout>
        <NavbarContent justify='start'>
          <NavbarBrand className='mr-4'>
            <p className='hidden font-bold text-inherit sm:block'>ACME</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='center' className='hidden gap-3 sm:flex'>
          <NavbarItem>
            <ResourceDropdown />
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page' color='secondary'>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent as='div' className='items-center' justify='end'>
          <SearchButton />
          <ProfileDropdown />
        </NavbarContent>
      </RestraintLayout>
    </Navbar>
  );
};

import { Button, Link } from '#atoms/NextUI';
import { BookLevelFilter } from '#molecules/BookLevelFilter';
import { BookOverviewList } from '#organisms/BookOverviewList';
import { BookTypeFilter } from '#organisms/BookTypeFilter';

export default () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='my-4 flex w-full items-end justify-between py-2'>
        <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <BookLevelFilter />
          <BookTypeFilter />
        </div>
        <div className='hidden md:flex'>
          <Button as={Link} href='/resources/books/new' variant='bordered' className='hover:border-secondary hover:text-white'>
            Create Book
          </Button>
        </div>
      </div>
      <div className='flex space-x-4'>
        <div className='flex-1 xl:flex'>
          <div className='xl:flex-1'>
            <BookOverviewList />
          </div>
        </div>
        <div className='hidden shrink-0 border-t border-gray-200 bg-yellow-500 px-4 py-6 sm:px-6 lg:flex lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6'>
          {/* Right column area */}
        </div>
      </div>
    </div>
  );
};

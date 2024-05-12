import { Label } from '#atoms/Label';
import { Input } from '#atoms/NextUI';
import { BookLevelFilter } from '#molecules/BookLevelFilter';
import { BookTypeFilter } from '#molecules/BookTypeFilter';

export default () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='my-4 flex w-full items-end justify-between py-2'>
        <div className='text-3xl font-semibold'>Create New Book</div>
      </div>
      <div className='flex space-x-4'>
        <div className='flex-1 xl:flex'>
          <div className='space-y-4 '>
            <div className='grid grid-cols-5 gap-4'>
              <div className='col-span-5 md:col-span-3'>
                <Input
                  size='sm'
                  variant='bordered'
                  labelPlacement='outside'
                  label='Title'
                  placeholder='Enter a title'
                  classNames={{
                    inputWrapper: 'rounded-small group-data-[focus=true]:border-secondary data-[hover=true]:border-secondary',
                  }}
                />
              </div>
              <div className='col-span-5 md:col-span-2'>
                <Input
                  type='number'
                  variant='bordered'
                  labelPlacement='outside'
                  size='sm'
                  label='Hours to Read'
                  placeholder='Enter hours to read'
                  classNames={{
                    inputWrapper: 'rounded-small group-data-[focus=true]:border-secondary data-[hover=true]:border-secondary',
                  }}
                />
              </div>
            </div>
            <div>
              <Label>Description</Label>
              {/* <MarkdownEditor /> */}
            </div>
            <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3'>
              <BookLevelFilter />
              <BookTypeFilter />
            </div>
          </div>
        </div>
        <div className='hidden shrink-0 border-t border-gray-200 bg-yellow-500 px-4 py-6 sm:px-6 lg:flex lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6'>
          {/* Right column area */}
        </div>
      </div>
    </div>
  );
};

import { Icon } from '#atoms/Icon';
import { Button } from '#atoms/NextUI';

export default function Page() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 sm:p-4 lg:p-8'>
      <div className='flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-6 pt-6 shadow-large'>
        <div className='flex flex-col gap-2'>
          <Button className='fill-white/80 hover:border-white hover:fill-white' variant='bordered'>
            Login with <Icon className='m-0 h-4 w-14 !max-w-20' icon='logos:auth0' />
          </Button>
        </div>
      </div>
    </div>
  );
}

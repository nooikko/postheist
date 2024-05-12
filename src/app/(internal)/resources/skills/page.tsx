import { Button, Link } from '#atoms/NextUI';
import { SkillOverviewList } from '#organisms/SkillOverviewList';

export default () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='my-4 flex w-full items-end justify-end py-2'>
        <Button as={Link} href='/resources/skills/new' variant='bordered' className='hover:border-secondary hover:text-white'>
          Create Skill
        </Button>
      </div>
      <div className='flex space-x-4'>
        <div className='flex-1 xl:flex'>
          <div className='xl:flex-1'>
            <SkillOverviewList />
          </div>
        </div>
      </div>
    </div>
  );
};

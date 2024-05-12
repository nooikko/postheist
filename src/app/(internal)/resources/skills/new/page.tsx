import { CreateSkillNameInput } from '#atoms/CreateSkillNameInput';
import { Label } from '#atoms/Label';
import { CreateSkillDescription } from '#molecules/CreateSkillDescription';
import { CreateSkillSaveButton } from '#molecules/CreateSkillSaveButton';

export default () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='my-4 flex w-full items-end justify-between py-2'>
        <div className='text-3xl font-semibold'>Create New Skill</div>
      </div>
      <div className='flex space-x-4'>
        <div className='flex-1 xl:flex'>
          <div className='space-y-4'>
            <div className='col-span-5 md:col-span-3'>
              <CreateSkillNameInput />
            </div>
            <div>
              <Label>Description</Label>
              <CreateSkillDescription />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 self-end'>
        <CreateSkillSaveButton />
      </div>
    </div>
  );
};

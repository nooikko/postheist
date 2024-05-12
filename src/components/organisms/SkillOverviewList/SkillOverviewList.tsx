'use client';
import { getAllSkills } from '#actions/Skills';
import { DataNotFound } from '#molecules/DataNotFound';
import { SkillOverview } from '#molecules/SkillOverview';
import type { TrainableSkill } from '@prisma/client';
import { useEffect, useState } from 'react';

export const SkillOverviewList: React.FC = () => {
  const [skills, setSkills] = useState<TrainableSkill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataNotFound, setDataNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (skills.length || dataNotFound) {
      return;
    }

    const fetchSkills = async () => {
      try {
        const fetchedSkills = await getAllSkills();
        if (fetchedSkills.length === 0) {
          setDataNotFound(true);
        } else {
          setSkills(fetchedSkills);
        }
      } catch (error) {
        console.error('Error occurred while fetching skills:', error); // eslint-disable-line no-console
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, [skills.length, dataNotFound]);

  if (!loading && dataNotFound) {
    return <DataNotFound />;
  }

  return (
    <>
      {skills.map((skill) => (
        <SkillOverview key={skill.id} {...skill} />
      ))}
    </>
  );
};

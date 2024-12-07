import { FC } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

const team = [
  {
    name: 'Adam Johnson',
    role: 'Founder & CRO Strategist',
    image: '/images/team/adam.jpg',
    bio: '10+ years of experience in conversion optimization and digital marketing.'
  }
];

const Team: FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experts dedicated to optimizing your digital success
          </p>
        </AnimatedSection>

        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <AnimatedSection
              key={person.name}
              {...fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                className="aspect-[3/2] w-full object-cover"
                src={person.image}
                alt={person.name}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-blue-600">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
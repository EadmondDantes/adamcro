import { FC } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

const Mission: FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're on a mission to transform the digital landscape by helping businesses achieve their full potential through data-driven conversion optimization. Our commitment to excellence and innovation drives measurable results for our clients.
          </p>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Vision</h3>
              <p className="mt-2 text-gray-600">
                To be the leading force in conversion rate optimization, setting industry standards and driving digital innovation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Values</h3>
              <p className="mt-2 text-gray-600">
                Data-driven decisions, continuous improvement, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Mission;
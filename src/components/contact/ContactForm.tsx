import React from 'react';
import { useForm } from 'react-hook-form';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <AnimatedSection {...fadeInUp} className="bg-white px-6 py-8 sm:p-10 rounded-2xl shadow-lg">
      {/* Form content */}
    </AnimatedSection>
  );
}
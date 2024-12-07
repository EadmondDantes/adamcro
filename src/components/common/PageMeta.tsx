import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { MetaProps } from '../../types/common';

export default function PageMeta({ title, description }: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
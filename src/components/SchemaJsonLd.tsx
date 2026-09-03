import React from 'react';
import { liveSeoData } from '@/lib/seo';

interface SchemaJsonLdProps {
  path?: string;
  customSchemas?: any[];
}

export default function SchemaJsonLd({ path = '/', customSchemas }: SchemaJsonLdProps) {
  const pageConfig = liveSeoData[path];
  const schemasToRender = customSchemas && customSchemas.length > 0 
    ? customSchemas 
    : (pageConfig?.schemas || []);

  if (!schemasToRender || schemasToRender.length === 0) return null;

  return (
    <>
      {schemasToRender.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

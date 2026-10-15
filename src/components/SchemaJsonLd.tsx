import React from 'react';
import { liveSeoData } from '@/lib/seo';
import { getLiveSeo } from '@/lib/liveSeo';

interface SchemaJsonLdProps {
  path?: string;
  customSchemas?: any[];
}

// Structured data that would expose placeholder copy (dummy cards / FAQ answers) must never be published.
const hasPlaceholder = (schema: any) => JSON.stringify(schema).includes('Placeholder content');

export default function SchemaJsonLd({ path = '/', customSchemas }: SchemaJsonLdProps) {
  // Exact JSON-LD blocks of the live page (verbatim) take priority.
  const live = getLiveSeo(path);
  // For every URL the live site has, its structured data (or the absence of it) is reproduced exactly.
  if (live && !live.jsonLd?.length) return null;
  if (live?.jsonLd?.length) {
    return (
      <>
        {live.jsonLd.map((block, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: block }} />
        ))}
      </>
    );
  }

  const pageConfig = liveSeoData[path];
  const schemasToRender = (customSchemas && customSchemas.length > 0 ? customSchemas : (pageConfig?.schemas || [])).filter(
    (schema) => !hasPlaceholder(schema),
  );

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

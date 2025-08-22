import Script from 'next/script';
import type { JsonLdData } from '../shared/types';

interface JsonLdScriptProps {
  data: JsonLdData;
  id?: string;
}

export function JsonLdScript({ data, id }: JsonLdScriptProps) {
  return (
    <Script
      id={id || 'json-ld'}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0).replace(/</g, '\\u003c'),
      }}
    />
  );
}

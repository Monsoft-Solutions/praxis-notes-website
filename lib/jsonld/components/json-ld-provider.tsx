import { JsonLdScript } from './json-ld-script';
import type { JsonLdData } from '../shared/types';

interface JsonLdProviderProps {
  schemas: JsonLdData[];
  children?: React.ReactNode;
}

export function JsonLdProvider({ schemas, children }: JsonLdProviderProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLdScript
          key={`schema-${index}`}
          data={schema}
          id={`json-ld-${index}`}
        />
      ))}
      {children}
    </>
  );
}

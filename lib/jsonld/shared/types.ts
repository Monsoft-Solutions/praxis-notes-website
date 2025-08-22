// Base JSON-LD schema structure
export interface JsonLdSchema {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

// Generic JSON-LD data type for better type safety
export type JsonLdData = JsonLdSchema | JsonLdSchema[];

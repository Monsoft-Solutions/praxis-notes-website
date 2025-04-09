// Type for Next.js 15 page props
import { Metadata } from "next";

declare global {
  // Type for Next.js dynamic route params
  type PageParams<T = Record<string, string>> = {
    params: T;
    searchParams?: Record<string, string | string[] | undefined>;
  };
  
  // Type for generateMetadata function
  type GenerateMetadata<T = Record<string, string>> = (
    props: PageParams<T>
  ) => Promise<Metadata>;
}

export {};
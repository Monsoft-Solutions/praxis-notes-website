import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface OrganizationSchemaProps {
  additionalInfo?: {
    numberOfEmployees?: string;
    foundingDate?: string;
    awards?: string[];
  };
}

export function generateOrganizationSchema(props?: OrganizationSchemaProps) {
  return {
    ...ORGANIZATION_BASE_DATA,
    ...(props?.additionalInfo?.numberOfEmployees && {
      numberOfEmployees: props.additionalInfo.numberOfEmployees,
    }),
    ...(props?.additionalInfo?.foundingDate && {
      foundingDate: props.additionalInfo.foundingDate,
    }),
    ...(props?.additionalInfo?.awards && {
      award: props.additionalInfo.awards,
    }),
  };
}

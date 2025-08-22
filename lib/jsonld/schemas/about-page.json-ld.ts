import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface AboutPageSchemaProps {
  additionalInfo?: {
    foundingStory?: string;
    mission?: string;
    values?: string[];
    teamSize?: string;
  };
}

export function generateAboutPageSchema(props?: AboutPageSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'AboutPage',
    mainEntity: {
      ...ORGANIZATION_BASE_DATA,
      ...(props?.additionalInfo?.foundingStory && {
        foundingStory: props.additionalInfo.foundingStory,
      }),
      ...(props?.additionalInfo?.mission && {
        mission: props.additionalInfo.mission,
      }),
      ...(props?.additionalInfo?.values && {
        values: props.additionalInfo.values,
      }),
      ...(props?.additionalInfo?.teamSize && {
        numberOfEmployees: props.additionalInfo.teamSize,
      }),
    },
    about:
      'Learn about Praxis Notes, our mission, and our team dedicated to improving ABA therapy documentation',
    url: `${WEBSITE_BASE_URL}/about`,
  };
}

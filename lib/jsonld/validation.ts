import type { JsonLdSchema } from './shared/types';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export class SchemaValidator {
  /**
   * Comprehensive schema validation
   */
  static validateSchema(schema: JsonLdSchema): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Required fields validation
    if (!schema['@context']) {
      errors.push('Missing required @context field');
    }

    if (!schema['@type']) {
      errors.push('Missing required @type field');
    }

    // Context validation
    if (schema['@context'] && schema['@context'] !== 'https://schema.org') {
      warnings.push(
        'Consider using https://schema.org as @context for better compatibility'
      );
    }

    // Type-specific validations
    this.validateByType(schema, errors, warnings);

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Type-specific validation rules
   */
  private static validateByType(
    schema: JsonLdSchema,
    errors: string[],
    warnings: string[]
  ): void {
    const type = schema['@type'];

    switch (type) {
      case 'Organization':
        this.validateOrganization(schema, errors, warnings);
        break;
      case 'BlogPosting':
        this.validateBlogPosting(schema, errors, warnings);
        break;
      case 'Product':
        this.validateProduct(schema, errors, warnings);
        break;
      case 'FAQPage':
        this.validateFAQPage(schema, errors, warnings);
        break;
      // Add more type validations as needed
    }
  }

  private static validateOrganization(
    schema: JsonLdSchema,
    errors: string[],
    warnings: string[]
  ): void {
    if (!schema.name) {
      errors.push('Organization missing required "name" field');
    }
    if (!schema.url) {
      errors.push('Organization missing required "url" field');
    }
    if (!schema.logo) {
      warnings.push(
        'Organization missing "logo" field - recommended for rich results'
      );
    }
  }

  private static validateBlogPosting(
    schema: JsonLdSchema,
    errors: string[],
    warnings: string[]
  ): void {
    if (!schema.headline) {
      errors.push('BlogPosting missing required "headline" field');
    }
    if (!schema.datePublished) {
      errors.push('BlogPosting missing required "datePublished" field');
    }
    if (!schema.author) {
      warnings.push(
        'BlogPosting missing "author" field - recommended for rich results'
      );
    }
    if (!schema.image) {
      warnings.push(
        'BlogPosting missing "image" field - recommended for rich results'
      );
    }
  }

  private static validateProduct(
    schema: JsonLdSchema,
    errors: string[],
    warnings: string[]
  ): void {
    if (!schema.name) {
      errors.push('Product missing required "name" field');
    }
    if (!schema.offers) {
      warnings.push(
        'Product missing "offers" field - recommended for rich results'
      );
    }
  }

  private static validateFAQPage(
    schema: JsonLdSchema,
    errors: string[],
    warnings: string[]
  ): void {
    if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
      errors.push('FAQPage missing required "mainEntity" array');
    } else {
      if (schema.mainEntity.length < 3) {
        warnings.push(
          'FAQPage has fewer than 3 questions - consider adding more for better rich results'
        );
      }

      schema.mainEntity.forEach(
        (item: Record<string, unknown>, index: number) => {
          if (!item.name) {
            errors.push(
              `FAQ item ${index + 1} missing required "name" (question)`
            );
          }
          const acceptedAnswer = item.acceptedAnswer as
            | Record<string, unknown>
            | undefined;
          if (!acceptedAnswer?.text) {
            errors.push(
              `FAQ item ${index + 1} missing required "acceptedAnswer.text"`
            );
          }

          // Add warnings for FAQ quality
          if (item.name && (item.name as string).length < 10) {
            warnings.push(
              `FAQ item ${index + 1}: Question is very short - consider making it more descriptive`
            );
          }
          if (
            acceptedAnswer?.text &&
            (acceptedAnswer.text as string).length < 20
          ) {
            warnings.push(
              `FAQ item ${index + 1}: Answer is very short - consider providing more detail`
            );
          }
        }
      );
    }
  }

  /**
   * Validate multiple schemas at once
   */
  static validateMultipleSchemas(schemas: JsonLdSchema[]): ValidationResult {
    const allErrors: string[] = [];
    const allWarnings: string[] = [];

    schemas.forEach((schema, index) => {
      const result = this.validateSchema(schema);

      result.errors.forEach(error => {
        allErrors.push(`Schema ${index + 1}: ${error}`);
      });

      result.warnings.forEach(warning => {
        allWarnings.push(`Schema ${index + 1}: ${warning}`);
      });
    });

    return {
      valid: allErrors.length === 0,
      errors: allErrors,
      warnings: allWarnings,
    };
  }

  /**
   * Development mode validation with console output
   */
  static validateInDevelopment(
    schema: JsonLdSchema,
    schemaName?: string
  ): void {
    if (process.env.NODE_ENV === 'development') {
      const result = this.validateSchema(schema);
      const prefix = schemaName ? `[${schemaName}] ` : '';

      if (result.errors.length > 0) {
        console.error(`${prefix}JSON-LD Validation Errors:`, result.errors);
      }

      if (result.warnings.length > 0) {
        console.warn(`${prefix}JSON-LD Validation Warnings:`, result.warnings);
      }

      if (result.valid && result.warnings.length === 0) {
        console.log(`${prefix}✅ JSON-LD schema validation passed`);
      }
    }
  }
}

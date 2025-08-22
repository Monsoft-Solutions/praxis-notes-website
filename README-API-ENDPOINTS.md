# API Endpoints Documentation

This document describes the API endpoints created for managing blog posts/resources via N8N.

## Authentication

All API endpoints require Bearer token authentication. Include the token in the `Authorization` header:

```
Authorization: Bearer your-api-token-here
```

The token is configured via the `API_BEARER_TOKEN` environment variable.

## Environment Variables

Add these environment variables to your `.env` file:

```bash
# API Authentication
API_BEARER_TOKEN=your-secure-random-token-here

# Vercel Blob (for image uploads)
BLOB_READ_WRITE_TOKEN=your-vercel-blob-read-write-token-here
```

## Endpoints

### GET /api/categories

Returns all available categories with their ID and name.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-here",
      "name": "Category Name"
    }
  ]
}
```

### GET /api/tags

Returns all available tags with their ID and name.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-here",
      "name": "Tag Name"
    }
  ]
}
```

### GET /api/authors

Returns all available authors with their ID and name.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-here",
      "name": "Author Name"
    }
  ]
}
```

### POST /api/resources

Creates a new resource (blog post). The featured image URL will be downloaded and uploaded to Vercel Blob automatically.

**Request Body:**

```json
{
  "slug": "my-blog-post",
  "title": "My Blog Post Title",
  "metaDescription": "SEO meta description",
  "metaTitle": "SEO title (optional)",
  "metaKeywords": "keyword1, keyword2 (optional)",
  "excerpt": "Brief excerpt (optional)",
  "date": "2024-01-15",
  "readingTime": "5 min read (optional)",
  "content": "Full blog post content in markdown",
  "status": "draft", // "draft", "readyToPublish", or "published"
  "authorId": "uuid-of-author",
  "featuredImageUrl": "https://example.com/image.jpg (optional)",
  "categoryIds": ["uuid1", "uuid2"],
  "tagIds": ["uuid1", "uuid2", "uuid3"]
}
```

**Response:**

```json
{
  "success": true,
  "message": "Resource created successfully",
  "data": {
    "id": "resource-uuid",
    "slug": "my-blog-post",
    "title": "My Blog Post Title",
    "featuredImage": "https://blob-url-from-vercel.com/...",
    "status": "draft",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "error": "Error message description"
}
```

Common HTTP status codes:

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing or invalid token)
- `404` - Not Found (author, category, or tag not found)
- `500` - Internal Server Error

## N8N Integration Example

1. **Get Categories/Tags/Authors**: Use HTTP Request nodes with GET method
2. **Create Resource**: Use HTTP Request node with POST method

Sample N8N HTTP Request configuration:

- Method: POST
- URL: `https://your-domain.com/api/resources`
- Headers:
  - `Authorization`: `Bearer {{ $env.API_BEARER_TOKEN }}`
  - `Content-Type`: `application/json`
- Body: JSON with the resource data

## Image Upload Process

When you provide a `featuredImageUrl` in the POST request:

1. The API downloads the image from the provided URL
2. Uploads it to Vercel Blob storage
3. Returns the new Vercel Blob URL in the response
4. Stores the Vercel Blob URL in the database

This ensures all images are hosted on your infrastructure and remain available even if the original URL becomes unavailable.

## Rate Limiting

Currently, there's no rate limiting implemented. Consider adding rate limiting for production use.

## Security Considerations

- Store the `API_BEARER_TOKEN` securely and use a strong, random value
- The token provides full access to create resources, so treat it like a password
- Consider implementing IP whitelisting for additional security
- Regularly rotate the bearer token

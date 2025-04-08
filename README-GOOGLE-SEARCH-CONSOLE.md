# 🕸️ Google Search Console Integration

This project includes automatic sitemap generation and Google Search Console notification for new or updated pages.

## 📋 How It Works

1. When you run `pnpm build`, we automatically:

   - Generate a sitemap with `next-sitemap`
   - Notify Google Search Console about new or updated URLs

2. The system compares the current sitemap with a cached version to identify changes, reducing unnecessary API calls.

## 🔧 Setup Instructions

### 1️⃣ Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Indexing API:
   - Go to "APIs & Services" > "Library"
   - Search for "Indexing API"
   - Click "Enable"

### 2️⃣ Create Service Account

1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name your service account (e.g., "sitemap-notifier")
4. Grant it a role (Project > Viewer is sufficient)
5. Create a JSON key for this service account
6. Download the JSON key

### 3️⃣ Add Service Account to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to "Settings" > "Users and permissions"
4. Add the service account email as an "Owner"

### 4️⃣ Configure Environment Variables

1. Copy `.env.example` to `.env.local` (for local development) or add to your hosting environment
2. Set the following variables:
   - `SITE_URL`: Your website URL
   - `GOOGLE_CLIENT_EMAIL`: Service account email from the JSON key
   - `GOOGLE_PRIVATE_KEY`: Private key from JSON (with newlines as `\n`)

Example for private key formatting:

```
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nABC...XYZ\n-----END PRIVATE KEY-----\n"
```

### 5️⃣ Vercel / Hosting Setup

If deploying to Vercel or another platform:

1. Add the environment variables to your project settings
2. Ensure build command includes the postbuild step

## 📊 Monitoring

- Check the build logs to see which URLs were notified
- The script provides detailed logging of successful and failed notifications
- You can see indexing status in Google Search Console

## 🔍 Troubleshooting

Common issues:

1. **API Quota Exceeded**: The Indexing API has daily quotas. We use batching to avoid this, but you might need to wait if you hit limits.

2. **Authentication Errors**: Check that your service account credentials are correct and the account has proper permissions in Search Console.

3. **Sitemap Not Found**: Ensure the build process completes correctly and generates a sitemap file.

4. **URL Format Issues**: URLs must include the full protocol (https://) and be publicly accessible.

## 🔐 Security Notes

- The private key contains sensitive information
- Never commit `.env.local` or any files with credentials to git
- We've added `scripts/sitemap.cache.json` to `.gitignore` to prevent accidental commits

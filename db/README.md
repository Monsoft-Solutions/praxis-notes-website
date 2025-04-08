# Database Setup

This project uses [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL for database management.

## Local Development Setup

1. Install PostgreSQL locally or use a Docker container

   ```bash
   # Example using Docker
   docker run --name praxis-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=praxis_notes -p 5432:5432 -d postgres
   ```

2. Set up your `.env` file with the database connection string:

   ```
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/praxis_notes
   ```

3. Run the database setup script:

   ```bash
   pnpm db:setup
   ```

   This will:
   - Generate migrations from your schema
   - Apply migrations to your database
   - Seed the database with initial data

## Available Scripts

- `pnpm db:generate` - Generate migration files based on schema changes
- `pnpm db:migrate` - Run migrations to update the database schema
- `pnpm db:seed` - Seed the database with sample data
- `pnpm db:studio` - Open Drizzle Studio to view and manage data
- `pnpm db:setup` - Run generate, migrate, and seed in sequence
- `pnpm db:push` - Push schema changes directly to the database (development only)

## Schema Files

- `db/schema/` - Contains all table definitions
- `db/migrations/` - Contains generated SQL migrations

## Production Setup (Digital Ocean)

For production deployment on Digital Ocean:

1. Create a new PostgreSQL database in Digital Ocean
2. Set the `DATABASE_URL` environment variable in your deployment platform
3. Run migrations as part of your deployment process:

   ```bash
   pnpm db:migrate
   ```

## Connecting from Application

The database connection is managed in `db/config.ts` and automatically handles different environments (development vs production).
# Portfolio Web App

A modern, full-stack personal portfolio web application built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Theme**: next-themes (Dark/Light mode)
- **Animation**: Motion
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm 8+
- PostgreSQL 12+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your PostgreSQL connection string
   ```

4. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```

5. Push database schema:
   ```bash
   npm run db:push
   ```

6. Seed the database:
   ```bash
   npm run prisma:seed
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/       # React components
├── services/         # Business logic
├── repositories/     # Data access layer
├── mappers/          # DTO mapping
├── lib/              # Utilities
└── types/            # TypeScript types

prisma/
├── schema.prisma     # Database schema
├── seed.ts           # Seeding script
└── seed-data/        # Seed data files

public/images/        # Static images
docs/                 # Documentation
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:seed` - Seed the database
- `npm run db:push` - Push schema to database

## Documentation

See [docs/PRD_PORTFOLIO.md](docs/PRD_PORTFOLIO.md) for full project requirements and specifications.

## Deployment

This project is ready to deploy to Vercel:

1. Push your repository to GitHub
2. Import the project to Vercel
3. Add `DATABASE_URL` environment variable
4. Deploy

## License

ISC

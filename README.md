# Portfolio Website

A full-stack portfolio website built with React, Express, and TypeScript. Features a modern UI with sections for projects, skills, experience, and contact form.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npx tsx server/index.ts
```

The server will start on port 3000 (or the port specified in the `PORT` environment variable). In development mode, it serves both the API and the client application.

## Available Scripts

- `npm run dev` - Start development server with tsx
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types and schemas
- `attached_assets/` - Static assets

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS, Radix UI, Framer Motion
- **Backend:** Express.js, Node.js
- **Database:** Drizzle ORM with Neon Database
- **Build Tools:** Vite, esbuild, tsx

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
DATABASE_URL=your_database_url
# Add other required environment variables
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

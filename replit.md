# Value Tracker Tool

## Overview

This is a full-stack web application called "Value Tracker Tool" built with React (client) and Express.js (server). It's a minimalist tool designed to track values with HR/Non-HR mode toggle and list management functionality. The application uses modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React hooks (useState) for local state
- **HTTP Client**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Build Tool**: ESBuild for server bundling

## Key Components

### Client-Side Components
- **App.tsx**: Main application component with routing setup
- **Home Page**: Value tracking interface with HR/Non-HR mode toggle
- **UI Components**: Comprehensive set of shadcn/ui components (buttons, cards, switches, etc.)
- **Hooks**: Custom hooks for mobile detection and toast notifications

### Server-Side Components
- **Express Server**: RESTful API with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: User management schema with Drizzle ORM
- **Development Tools**: Hot module replacement with Vite integration

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Migration System**: Drizzle Kit for database schema migrations

## Data Flow

1. **Client Requests**: React frontend makes HTTP requests to Express API
2. **API Processing**: Express routes handle business logic and data validation
3. **Data Storage**: Storage layer abstracts database operations
4. **Response**: JSON responses sent back to client
5. **State Updates**: TanStack Query manages client-side cache and updates

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React-DOM, React Hook Form)
- UI Libraries (Radix UI, shadcn/ui, Tailwind CSS)
- Data Fetching (TanStack Query)
- Date handling (date-fns)
- Icons (Lucide React)
- Carousel (Embla Carousel)

### Backend Dependencies
- Express.js framework
- Database (Drizzle ORM, Neon Database driver)
- Session management (connect-pg-simple)
- Development tools (tsx, esbuild)

### Development Dependencies
- TypeScript compiler and type definitions
- Build tools (Vite, ESBuild)
- Linting and formatting tools
- PostCSS and Autoprefixer

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Production**: Single Node.js process serves both static files and API

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution and Vite dev server
- **Production**: Compiled JavaScript with optimized static asset serving
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both client and server
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

## Changelog

- July 04, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
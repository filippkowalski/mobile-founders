# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Setup Instructions

1. **Install dependencies**: `npm install`
2. **Environment setup**: Copy `.env.example` to `.env.local` and configure your Slack webhook URL
3. **Development**: `npm run dev` to start the development server

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Environment Variables

Required environment variables (see `.env.example`):
- `NEXT_PUBLIC_SLACK_WEBHOOK_URL` - Slack webhook URL for form submissions

## Project Architecture

This is a Next.js 15 application using the App Router that serves as a landing page and application form for the Mobile Founders Slack community.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling with CSS variables
- **shadcn/ui** components using Radix UI primitives
- **React Hook Form** with Zod validation
- **Lucide React** for icons

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - Reusable UI components (shadcn/ui)
- `src/lib/` - Utility functions and shared logic
- Path alias `@/*` maps to `src/*`

### Static Export Configuration
The project is configured for static export (`output: 'export'`) with:
- Trailing slashes enabled
- Unoptimized images for static hosting
- Build output to `out/` directory

### Component Architecture
- **shadcn/ui Integration**: Uses the "new-york" style with CSS variables
- **Form Handling**: Main application form uses native form submission with Slack webhook integration
- **Styling**: Utilizes Tailwind with custom CSS variables defined in `globals.css`
- **State Management**: Local React state for form submission status

### Key Features
- Community application form that posts to Slack webhook
- Responsive design with mobile-first approach
- Emoji-based approval system (20 👍 reactions required)
- CORS proxy for client-side Slack integration

### Slack Integration
The application form submits to a Slack webhook via CORS proxy (`corsproxy.io`) and posts structured messages to the `#new-members` channel with member voting functionality.
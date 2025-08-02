# Ainebyona for Western Youth MP - Official Campaign Website

## Overview

This is the official political campaign website for Ainebyona Nicholas, representing the People's Front for Freedom (PFF) party as the Western Youth Member of Parliament candidate for 2026-2031. The slogan "Lighting the Youth Nation" embodies the campaign's mission to empower young leaders across Western Uganda. Built with React/TypeScript frontend and Express.js backend, the platform showcases the candidate's background, vision, strategic pillars, transparent budget breakdown, and provides a comprehensive donation system. The design features glassmorphism effects with PFF party colors (dark blue and white) for professional political branding that maintains party allegiance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, Vision, Pillars, Budget, and Donate
- **UI Framework**: Shadcn/UI components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming and glassmorphism effects
- **Component Structure**: Modular component architecture with shared UI components and page-specific components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Setup**: TSX for development server with hot reloading
- **Build Process**: Vite for frontend bundling and esbuild for backend bundling
- **API Structure**: RESTful API with `/api` prefix routing (currently minimal implementation)

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management schema with UUID primary keys and validation via Drizzle-Zod
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple

### Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL storage
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schemas for type-safe form validation and API request/response validation

### UI/UX Design System
- **Design Language**: Modern glassmorphism with PFF party political branding
- **Color Scheme**: PFF party colors - Dark Blue (primary) and White (secondary) maintaining party allegiance
- **Typography**: System font stack with careful hierarchy and party-appropriate styling
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Animation**: CSS transitions, transforms, and floating effects for enhanced user engagement
- **Visual Elements**: Official candidate photos, party logos, and parliament artwork integration

### Campaign Data Management
- **Content Structure**: Comprehensive candidate biography, PFF party affiliation, strategic pillars, budget breakdown, and donation purposes
- **Candidate Information**: Official photos, educational background, current leadership roles, and professional credentials
- **Party Integration**: PFF logo, party colors, and political alignment throughout the platform
- **Financial Transparency**: Detailed budget breakdown with percentage allocations and visual progress indicators
- **Contact Information**: Multiple contact methods and party-branded communication elements

### Donation System
- **Payment Methods**: Mobile money (Airtel/MTN) and bank transfer (Stanbic/Pride) integration
- **Reference Generation**: Automated reference code generation for payment tracking
- **Form Validation**: Multi-step form with payment method-specific validation
- **User Experience**: Modal-based payment instructions with copy-to-clipboard functionality

## External Dependencies

### Database & Hosting
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Replit**: Development and hosting environment with integrated tooling

### UI & Styling
- **Shadcn/UI**: Component library built on Radix UI primitives
- **Radix UI**: Headless component primitives for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Frontend build tool with hot module replacement
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **Drizzle Kit**: Database migration and schema management tool

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **Native Fetch API**: HTTP client for API communications

### Payment Integration
- **Mobile Money**: Uganda-based mobile payment systems (Airtel Money, MTN Mobile Money)
- **Banking**: Local bank transfer integration (Stanbic Bank, Pride Microfinance)

### Analytics & Monitoring
- **Replit Cartographer**: Development environment mapping and debugging
- **Runtime Error Overlay**: Enhanced error handling in development mode
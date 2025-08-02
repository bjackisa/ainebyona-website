# Ainebyona Campaign Website - File Structure

## Project Overview
A full-stack campaign website built with React/TypeScript frontend and Express.js backend, featuring glassmorphism UI design with PFF party branding.

## Root Directory Structure

```
├── attached_assets/                    # User-uploaded assets
│   └── concept note and budget_1754121075262.docx
├── client/                            # Frontend React application
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   │   ├── ui/                  # Shadcn/UI component library
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-otp.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── background.tsx        # Animated background component
│   │   │   ├── footer.tsx           # Site footer with developer credits
│   │   │   └── navigation.tsx       # Main navigation header
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── use-mobile.tsx      # Mobile device detection
│   │   │   └── use-toast.ts        # Toast notification management
│   │   ├── lib/                    # Utility libraries and configurations
│   │   │   ├── campaign-data.ts    # Campaign content and data structure
│   │   │   ├── donation-utils.ts   # Donation form utilities
│   │   │   ├── queryClient.ts      # TanStack Query configuration
│   │   │   └── utils.ts           # General utility functions
│   │   ├── pages/                 # Page components (routes)
│   │   │   ├── about.tsx         # Candidate biography and background
│   │   │   ├── budget.tsx        # Campaign budget breakdown
│   │   │   ├── donate.tsx        # Donation form and payment instructions
│   │   │   ├── home.tsx          # Landing page with hero section
│   │   │   ├── not-found.tsx     # 404 error page
│   │   │   ├── pillars.tsx       # Strategic pillars and initiatives
│   │   │   └── vision.tsx        # Campaign vision and objectives
│   │   ├── App.tsx               # Main application component
│   │   ├── index.css             # Global styles and Tailwind CSS
│   │   └── main.tsx              # React application entry point
│   └── index.html                # HTML template
├── server/                        # Backend Express.js application
│   ├── index.ts                  # Express server setup and middleware
│   ├── routes.ts                 # API route definitions
│   ├── storage.ts                # Data storage abstraction layer
│   └── vite.ts                   # Vite integration for development
├── shared/                       # Shared TypeScript types and schemas
│   └── schema.ts                 # Database schema and validation types
├── dist/                         # Build output directory
│   ├── public/                   # Frontend build output (for deployment)
│   │   ├── assets/              # Bundled CSS and JavaScript files
│   │   └── index.html           # Built HTML file
│   └── index.js                 # Built backend server file
├── components.json               # Shadcn/UI configuration
├── drizzle.config.ts            # Database configuration
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Dependency lock file
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build tool configuration
├── vercel.json                  # Vercel deployment configuration
├── DEPLOYMENT.md                # Deployment instructions and troubleshooting
├── filestructure.md             # This file - project structure documentation
├── replit.md                    # Project overview and architecture documentation
├── .gitignore                   # Git ignore patterns
└── .replit                      # Replit environment configuration
```

## Key Directories Explained

### `/client/src/`
The frontend React application source code:
- **components/**: Reusable UI components including the complete Shadcn/UI library
- **pages/**: Individual page components for each route (Home, About, Vision, etc.)
- **lib/**: Utilities, configurations, and campaign data management
- **hooks/**: Custom React hooks for mobile detection and toast notifications

### `/server/`
Backend Express.js application:
- **index.ts**: Main server setup with middleware and logging
- **routes.ts**: API endpoint definitions
- **storage.ts**: Data storage interface (currently in-memory)
- **vite.ts**: Development server integration

### `/shared/`
Shared code between frontend and backend:
- **schema.ts**: TypeScript types and Drizzle ORM schemas

### `/dist/`
Build output directory:
- **public/**: Frontend static files ready for deployment
- **index.js**: Compiled backend server

## Configuration Files

- **components.json**: Shadcn/UI component library setup
- **tailwind.config.ts**: Tailwind CSS customization with PFF party colors
- **vite.config.ts**: Build tool configuration with path aliases
- **vercel.json**: Deployment configuration for Vercel hosting
- **drizzle.config.ts**: Database ORM configuration
- **tsconfig.json**: TypeScript compiler settings

## Development vs Production

### Development
- Frontend served by Vite dev server with HMR
- Backend runs with TSX for TypeScript execution
- Both run simultaneously via `npm run dev`

### Production Build
- Frontend: Vite builds to `dist/public/` (static files)
- Backend: ESBuild compiles to `dist/index.js`
- Can deploy as static site (frontend only) or full-stack

## Asset Management

### External Assets
- **Cloudinary**: Hosts all campaign images (candidate photos, party logos, posters)
- **CDN URLs**: Used for reliable image delivery and performance

### Internal Assets
- **attached_assets/**: User-uploaded files (concept notes, documents)
- **@assets alias**: Import path for accessing attached assets in code

## Styling Architecture

### CSS Framework
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Variables**: PFF party color scheme (dark blue and white)
- **Glassmorphism Effects**: Modern UI design with transparency and blur

### Component Library
- **Shadcn/UI**: Complete component library built on Radix UI primitives
- **Custom Components**: Campaign-specific components (Navigation, Footer, Background)

## Data Flow

### Campaign Data
- Centralized in `campaign-data.ts`
- Includes candidate info, strategic pillars, budget breakdown, payment methods
- Type-safe with TypeScript interfaces

### State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state and validation
- **Zod**: Runtime type validation for forms and API

## Deployment Structure

### Static Site Deployment (Recommended)
- Build command: `npm run build`
- Output directory: `dist/public/`
- Hosting: Vercel (free tier)

### Full-Stack Deployment (Optional)
- Requires backend hosting and database
- More complex setup with environment variables
- Higher hosting costs

This file structure supports both development efficiency and production deployment while maintaining clean separation of concerns between frontend, backend, and shared code.
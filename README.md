# Next.js POC - Issue Tracker Application

A modern, full-stack issue tracking application built with Next.js 15, React 19, NestJS, GraphQL, and Supabase. This proof-of-concept demonstrates a comprehensive solution with authentication, real-time data management, and a responsive UI.

## 🚀 Features

### Frontend Features
- **Modern Stack**: Built with Next.js 15 and React 19
- **Authentication**: Secure authentication using NextAuth.js
- **Rich UI Components**: Ant Design 5 with custom theming
- **Real-time Data**: Apollo Client for GraphQL data fetching
- **Responsive Design**: Mobile-first responsive layout
- **Rich Text Editor**: React Quill for issue descriptions
- **Styled Components**: CSS-in-JS styling with styled-components
- **Type Safety**: Full TypeScript implementation
- **Code Generation**: Automated GraphQL type generation
- **Performance**: Bundle analysis and optimization

### Backend Features
- **GraphQL API**: NestJS with Apollo Server
- **Database**: Supabase PostgreSQL integration
- **Type Safety**: TypeScript with decorators
- **Modular Architecture**: Clean, maintainable code structure
- **Configuration Management**: Environment-based config
- **MCP Integration**: Model Context Protocol support
- **CORS Support**: Cross-origin resource sharing enabled

### Issue Management
- **Full CRUD Operations**: Create, read, update, delete issues
- **Advanced Filtering**: Filter by status, priority, and search
- **Bulk Operations**: Select and delete multiple issues
- **CSV Export**: Export issues to CSV format
- **Issue Details**: Comprehensive issue information display
- **Rich Descriptions**: HTML-formatted issue descriptions

### Authentication & Security
- **Credential-based Auth**: Secure login system
- **Session Management**: JWT-based sessions
- **Protected Routes**: Middleware-based route protection
- **User Roles**: Role-based access control

## 🛠 Tech Stack

### Frontend (next-client)
- **Framework**: Next.js 15 with App Router
- **React**: React 19 with latest features
- **UI Library**: Ant Design 5.27.0
- **Styling**: Styled Components 6.1.19
- **State Management**: Apollo Client 3.13.9
- **Authentication**: NextAuth.js 4.24.5
- **Rich Text**: React Quill 2.0.0-beta.4
- **TypeScript**: 5.3.3
- **Code Quality**: ESLint, Prettier, Husky

### Backend (next-server)
- **Framework**: NestJS 10.3.3
- **GraphQL**: Apollo Server 4.9.5
- **Database**: Supabase with PostgreSQL
- **Authentication**: Custom implementation
- **Validation**: Class Validator & Class Transformer
- **Configuration**: @nestjs/config
- **MCP**: Model Context Protocol SDK

### Development Tools
- **Package Manager**: Yarn
- **Linting**: ESLint with Airbnb config
- **Formatting**: Prettier
- **Git Hooks**: Husky
- **Type Generation**: GraphQL Code Generator
- **Bundle Analysis**: @next/bundle-analyzer

## 📋 Prerequisites

- Node.js 18.18.0 or higher
- Yarn package manager
- Supabase account and project

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd next-poc
```

### 2. Install root dependencies
```bash
yarn install
```

### 3. Install client dependencies
```bash
cd next-client
yarn install
```

### 4. Install server dependencies
```bash
cd ../next-server
yarn install
```

## ⚙️ Environment Setup

### Client Environment (.env.local)
Create `next-client/.env.local`:
```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3005

# Supabase Configuration (optional for client)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Server Environment (.env)
Create `next-server/.env`:
```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-service-role-key

# Server Configuration
PORT=3005
NODE_ENV=development
```

## 🗄️ Database Setup

### Supabase Schema
Create the following table in your Supabase project:

```sql
-- Create issues table
CREATE TABLE issues (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'Open',
  priority VARCHAR(50) DEFAULT 'Medium',
  assignee VARCHAR(255),
  due_date TIMESTAMP,
  browser VARCHAR(100),
  reproducible BOOLEAN DEFAULT false,
  estimation INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security (optional)
ALTER TABLE issues ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (adjust as needed)
CREATE POLICY "Enable all operations for all users" ON issues
FOR ALL USING (true) WITH CHECK (true);
```

## 🚀 Development

### Start the development servers:

1. **Start the backend server** (Terminal 1):
```bash
cd next-server
yarn start:dev
```
The GraphQL server will be available at http://localhost:3005/graphql

2. **Start the frontend server** (Terminal 2):
```bash
cd next-client
yarn dev
```
The Next.js app will be available at http://localhost:3000

### GraphQL Code Generation
Generate TypeScript types from GraphQL schema:
```bash
cd next-client
yarn codegen
```

## 📝 Available Scripts

### Root Level
```bash
yarn prepare          # Setup Husky git hooks
```

### Frontend (next-client)
```bash
yarn dev              # Start development server with Turbopack
yarn build            # Build for production
yarn start            # Start production server
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint issues
yarn format           # Format code with Prettier
yarn format:check     # Check formatting
yarn codegen          # Generate GraphQL types
yarn codegen:watch    # Watch and generate types
```

### Backend (next-server)
```bash
yarn start:dev        # Start development server with watch
yarn start:debug      # Start with debugging
yarn start:prod       # Start production server
yarn build            # Build TypeScript
yarn lint             # Run ESLint with fix
yarn test             # Run tests
yarn test:watch       # Run tests in watch mode
yarn test:cov         # Run tests with coverage
```

## 🏗️ Project Structure

```
next-poc/
├── next-client/                 # Frontend Next.js application
│   ├── app/                     # Next.js App Router
│   │   ├── api/                 # API routes
│   │   │   └── auth/            # Authentication routes
│   │   ├── components/          # React components
│   │   │   ├── issues/          # Issue-related components
│   │   │   ├── forms/           # Form components
│   │   │   ├── modals/          # Modal components
│   │   │   └── ui/              # UI components
│   │   ├── context/             # React contexts
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API services
│   │   ├── types/               # TypeScript type definitions
│   │   ├── utils/               # Utility functions
│   │   ├── generated/           # Generated GraphQL types
│   │   ├── issues/              # Issue pages
│   │   └── auth/                # Authentication pages
│   ├── public/                  # Static assets
│   ├── styles/                  # Global styles and themes
│   └── config files             # Configuration files
│
├── next-server/                 # Backend NestJS application
│   └── src/
│       ├── issue/               # Issue module
│       │   ├── dto/             # Data Transfer Objects
│       │   ├── entities/        # GraphQL entities
│       │   ├── issue.module.ts  # Module definition
│       │   ├── issue.resolver.ts # GraphQL resolver
│       │   └── issue.service.ts # Business logic
│       ├── mcp/                 # MCP integration
│       ├── app.module.ts        # Root module
│       └── main.ts              # Application entry point
│
├── package.json                 # Root package configuration
└── README.md                    # This file
```

## 🔑 Default Credentials

For development and testing:
- **Email**: admin@gmail.com
- **Password**: Admin@123

## 🎨 UI Components & Features

### Authentication
- Clean login interface
- Session management
- Protected routes
- Logout functionality

### Issue Management
- **Issue List**: Paginated table with sorting and filtering
- **Issue Creation**: Form with rich text editor for descriptions
- **Issue Editing**: In-place editing with drawer interface
- **Issue Details**: Comprehensive view with all issue information
- **Bulk Operations**: Multi-select with bulk delete
- **Export**: CSV export functionality

### Filtering & Search
- Text-based search across issue titles
- Status filtering (Open, In Progress, Resolved)
- Priority filtering (High, Medium, Low)
- Real-time filtering updates

## 🎭 Theming & Styling

### Design System
- Ant Design component library
- Custom theme with consistent colors
- Responsive breakpoints
- Styled Components for custom styling

### Color Palette
- Primary: #1890ff (Ant Design Blue)
- Success: #52c41a (Green)
- Warning: #faad14 (Orange)
- Error: #ff4d4f (Red)

## 📊 Performance Features

- **Bundle Optimization**: Next.js automatic optimization
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack Bundle Analyzer
- **Turbopack**: Fast development builds

## 🧪 Code Quality

### Linting & Formatting
- ESLint with Airbnb TypeScript config
- Prettier for consistent formatting
- Husky git hooks for pre-commit checks
- TypeScript strict mode enabled

### Pre-commit Hooks
- Lint and format staged files
- Run Next.js linting
- Prevent commits with issues

## 🔒 Security Features

- NextAuth.js for secure authentication
- JWT-based sessions
- CORS protection
- Input validation and sanitization
- Protected API routes

## 🚀 Deployment

### Frontend Deployment
The Next.js app can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers

### Backend Deployment
The NestJS API can be deployed to:
- Railway
- Render
- Heroku
- AWS ECS/Fargate
- Docker containers

### Environment Variables
Ensure all required environment variables are set in your deployment environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Workflow
1. Run `yarn install` in the root directory
2. Set up environment variables
3. Start both frontend and backend servers
4. Make changes and test locally
5. Run linting and formatting checks
6. Submit pull request with clear description

## 📚 API Documentation

### GraphQL Endpoints
- **Playground**: http://localhost:3005/graphql
- **Schema**: Auto-generated from NestJS decorators

### Available Queries
```graphql
# Get all issues
query GetIssues {
  issues {
    id
    title
    description
    status
    priority
    assignee
    due_date
    browser
    reproducible
    estimation
    created_at
    updated_at
  }
}

# Get single issue
query GetIssue($id: String!) {
  issue(id: $id) {
    id
    title
    description
    # ... other fields
  }
}
```

### Available Mutations
```graphql
# Create issue
mutation CreateIssue($input: CreateIssueInput!) {
  createIssue(createIssueInput: $input) {
    id
    title
    # ... other fields
  }
}

# Update issue
mutation UpdateIssue($id: String!, $input: UpdateIssueInput!) {
  updateIssue(id: $id, updateIssueInput: $input) {
    id
    title
    # ... other fields
  }
}

# Delete issue
mutation DeleteIssue($id: String!) {
  removeIssue(id: $id)
}
```

## 🐛 Troubleshooting

### Common Issues

1. **GraphQL Connection Error**
   - Check if backend server is running on port 3005
   - Verify NEXT_PUBLIC_API_URL environment variable

2. **Supabase Connection Error**
   - Verify Supabase URL and key are correct
   - Check if issues table exists in Supabase

3. **Authentication Issues**
   - Check NEXTAUTH_SECRET is set
   - Verify NEXTAUTH_URL matches your domain

4. **Build Errors**
   - Run `yarn install` in both directories
   - Check for TypeScript errors with `yarn build`

### Debug Mode
Start the backend in debug mode:
```bash
cd next-server
yarn start:debug
```

## 📄 License

This project is for demonstration purposes. Please check the license file for more details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Ant Design for the comprehensive UI library
- NestJS for the scalable backend framework
- Supabase for the backend-as-a-service platform
- Apollo team for GraphQL tooling

---

For more information or support, please refer to the documentation of the individual technologies used in this project.

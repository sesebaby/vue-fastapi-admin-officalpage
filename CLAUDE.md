# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue FastAPI Admin project that combines a FastAPI backend with a Vue 3 frontend, specifically designed as a corporate management system with an integrated company website. It features two main sections:
- **Admin Backend**: RBAC-based management system at `/admin` path
- **Corporate Website**: Public-facing company website at root `/` path

The project is built for **Suzhou Sipu Electronics** (苏州思普电子), providing both administrative functionality and company presentation.

## Development Commands

### Backend Development

```bash
# Start backend server (development)
python run.py

# Alternative start command
make start

# Install dependencies using uv (recommended)
uv sync

# Install dependencies using pip
pip install -r requirements.txt

# Code formatting and linting (run these before committing)
black ./                    # Format Python code
isort ./ --profile black    # Sort imports
ruff check ./app           # Lint Python code

# Database management
aerich migrate              # Generate migration files
aerich upgrade              # Apply migrations
make clean-db              # Delete migrations and db files

# Run tests
make test

# Clean up cache files
make clean                  # Remove __pycache__, .pytest_cache, etc.
```

### Frontend Development

```bash
# Navigate to frontend directory
cd web

# Install dependencies
pnpm install

# Start development server
pnpm dev                   # Runs on http://localhost:3060

# Build for production
pnpm build

# Code formatting and linting
pnpm lint                  # ESLint check
pnpm lint:fix              # Fix ESLint issues
pnpm prettier              # Format with Prettier
```

## Architecture Overview

### Backend Structure
- **FastAPI**: Async Python web framework
- **Tortoise ORM**: Async ORM with SQLite (supports MySQL/PostgreSQL)
- **JWT Authentication**: Token-based auth with 7-day expiry
- **RBAC System**: Role-based access control with Users, Roles, Menus, APIs
- **Audit Logging**: HTTP request/response logging middleware
- **Database**: SQLite by default, configurable for other databases

### Frontend Structure
- **Vue 3**: Composition API with `<script setup>`
- **Naive UI**: Primary component library
- **UnoCSS**: Atomic CSS framework
- **Pinia**: State management
- **Vue Router**: Dynamic routing based on user permissions
- **Vue I18n**: Internationalization (Chinese/English)
- **Vite**: Build tool with HMR

### Key Directory Structure

```
app/
├── api/v1/              # API routes (users, roles, menus, etc.)
├── controllers/         # Business logic controllers
├── core/               # Core functionality (auth, exceptions, init)
├── models/             # Database models (User, Role, Menu, Api, etc.)
├── schemas/            # Pydantic validation schemas
└── settings/           # Configuration files

web/src/
├── components/         # Reusable Vue components
│   ├── sections/       # Website sections (Hero, About, Business, etc.)
│   └── common/         # Shared components
├── views/              # Page components
│   ├── website/        # Corporate website pages
│   └── system/         # Admin system pages
├── layout/             # Layout components
├── router/             # Route configuration with guards
├── store/              # Pinia stores
└── utils/              # Utility functions
```

## Key Models and Data Flow

### Core Models (app/models/admin.py:)
- **User**: Admin users with role assignments and department links
- **Role**: Roles with menu and API permissions  
- **Menu**: Dynamic menu system with hierarchical structure (supports different MenuTypes)
- **Api**: API endpoint permissions with method types (GET, POST, PUT, DELETE)
- **Dept**: Department/organization structure
- **AuditLog**: System activity logging
- **ContactMessage**: Customer inquiry form submissions (for corporate website)

### Authentication Flow
1. Login via `/api/v1/base/access_token` endpoint
2. JWT token stored in frontend localStorage
3. Dynamic routes loaded based on user permissions
4. API requests include JWT in Authorization header

### Route Structure
- `/`: Corporate website (public access)
- `/admin`: Management system (requires authentication)
- `/login`: Authentication page
- `/system/*`: Admin modules (users, roles, menus, etc.)

## Development Workflow

### Backend Development
1. Models defined in `app/models/` using Tortoise ORM
2. Schemas in `app/schemas/` for request/response validation
3. Controllers in `app/controllers/` for business logic
4. API routes in `app/api/v1/` following RESTful patterns
5. Database migrations managed with Aerich

### Frontend Development
1. Components follow Vue 3 Composition API patterns
2. Use Naive UI components primarily, avoid custom styling
3. State management through Pinia stores
4. Routing guards handle authentication and permissions
5. UnoCSS for utility-first styling

### Website Development
- Only modify files in `web/src/views/website/`, `web/src/layout/website/`, and `web/src/components/sections/`
- Use responsive design with Naive UI grid system  
- Support both Chinese and English languages
- Follow mobile-first responsive design principles
- Website sections are modularized - see `web/src/components/sections/README.md` for component documentation

## Important Configuration Files

### Backend
- `app/settings/config.py`: Main configuration including CORS, JWT, database
- `pyproject.toml`: Python dependencies and tool configuration
- `run.py`: Application entry point

### Frontend
- `web/vite.config.js`: Vite build configuration
- `web/package.json`: Node.js dependencies and scripts
- `web/settings/theme.json`: Theme configuration
- `web/unocss.config.js`: UnoCSS configuration

## Testing and Quality

### Backend Quality Tools
- **Black**: Code formatting (line length: 120)
- **Ruff**: Fast Python linter  
- **Isort**: Import sorting
- **Make commands**: Use `make check` to run formatting checks, `make format` to auto-format

### Frontend Quality Tools
- **ESLint**: JavaScript/Vue linting with `@zclzone` config
- **Prettier**: Code formatting
- **TypeScript**: Type checking support
- **Lint-staged**: Pre-commit hooks for code quality

## API Documentation

When backend is running, access:
- Swagger UI: http://localhost:9999/docs
- ReDoc: http://localhost:9999/redoc
- Health check: http://localhost:9999/api/v1/base/health

## Database Management

### Default Setup
- SQLite database (`db.sqlite3`)
- Auto-initialization with admin user (admin/123456)
- Sample menus and roles created on first run

### Migration Commands
```bash
aerich migrate      # Create migration after model changes
aerich upgrade      # Apply migrations to database
make clean-db       # Reset database (removes all data)
```

## Production Deployment

### Docker Deployment
```bash
# Pull and run pre-built image
docker pull mizhexiaoxiao/vue-fastapi-admin:latest
docker run -d --restart=always --name=vue-fastapi-admin -p 9999:80 mizhexiaoxiao/vue-fastapi-admin

# Or build from source
docker build --no-cache . -t vue-fastapi-admin
```

### Environment Variables
Key settings can be overridden via environment variables:
- `DEBUG`: Set to `False` for production
- `SECRET_KEY`: Change from default for security
- Database connection strings in `config.py`

## Common Issues and Solutions

### Backend Issues
- **Database locked**: Stop all instances, check for `.db-shm` and `.db-wal` files
- **Migration conflicts**: Use `make clean-db` to reset (loses data)
- **Import errors**: Ensure virtual environment is activated

### Frontend Issues
- **Build failures**: Clear `node_modules` and `pnpm-lock.yaml`, reinstall
- **Route conflicts**: Check dynamic route loading in router configuration
- **Component errors**: Verify Naive UI component imports and props

### Development Tips
- Use `pnpm dev` for frontend development with hot reload
- Backend runs on port 9999, frontend dev server on 3060
- JWT tokens expire after 7 days
- API responses are logged for debugging (disable in production)
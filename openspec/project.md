# Project Context

## Purpose
Vue FastAPI Admin serves as the unified backend + frontend platform for苏州思普微电子科技有限公司 (SIPUMTECH). The FastAPI service exposes RBAC-secured APIs for authentication, content, and operations, while the Vue 3 web app powers both the enterprise marketing site and the administrative console. The project’s goals are to present SIPUMTECH’s advanced packaging capabilities, capture B2B leads through responsive multi-language pages, and give internal teams a modern UI for managing menus, permissions, and corporate content.

## Tech Stack
- **Backend**: Python 3.11, FastAPI 0.111, Starlette, Pydantic v2, Tortoise ORM 0.23 with Aerich migrations, PyJWT for auth, Argon2 for password hashing, Loguru-based structured logging, run on Uvicorn/uvloop.
- **Persistence**: SQLite for local development plus interchangeable MySQL/PostgreSQL targets via `DATABASE_URL`; Aerich manages schema migrations; aiosqlite enables async SQLite usage.
- **Frontend**: Vue 3.3 + Vite 4.4 + TypeScript 5.1, Naive UI 2.34, Pinia 2.1, Vue Router 4.2, UnoCSS, Sass, Iconify, Vue I18n for bilingual support, Axios for API calls, unplugin auto-import/component plugins, vite-plugin-svg-icons/compression.
- **Tooling & Ops**: pnpm (preferred) or npm for web, Makefile/UV for backend, ESLint + Prettier + lint-staged, Black + isort + Ruff, Docker/Docker Compose for deployment, Nginx reverse proxy for SPA routing, Rollup visualizer for bundle analysis.

## Project Conventions

### Code Style
- Backend formatting is enforced by Black (120-column) and isort with Ruff linting; type hints and Pydantic v2 models are mandatory for request/response schemas.
- Modules follow FastAPI layering: routers under `app/api`, business logic in `app/controllers`, Pydantic schemas in `app/schemas`, and ORM models in `app/models`.
- Frontend uses ESLint presets (`@zclzone`, `@unocss`) plus Prettier; components adopt `<script setup>` Composition API, PascalCase filenames, UNO utility classes, and Naive UI theming tokens.
- Commit messages must follow Conventional Commits (`feat:`, `fix:`, `docs:` etc.); no placeholder files or TODO-only changes per《开发规范》“绝不简化”原则.

### Architecture Patterns
- FastAPI app configured in `app/core/init_app.py` wires middleware (CORS, logging), JWT auth dependencies, background tasks, and API routers mounted under `/api/v1`.
- Tortoise ORM models map to RBAC entities (users, roles, menus, APIs); controllers encapsulate CRUD and permission checks, while `app/core/dependency.py` injects DB sessions and current user context.
- Configuration comes from `.env`/`pydantic-settings`; Aerich migrations live in `migrations/`, and Make targets wrap migrate/upgrade/test flows.
- Frontend implements a dual-router scheme: one set of routes for the enterprise website sections, another for the admin console. Pinia stores hold auth/session/menu state, and dynamic menus are hydrated from backend RBAC APIs.
- Styling relies on UnoCSS tokens and the SIPUMTECH design system (primary deep blue + accent green/orange) documented in `docs/企业官网开发计划.md`, with responsive breakpoints baked into layout utilities.

### Testing Strategy
- 《开发规范》mandates strict TDD/BDD: write tests before implementation, keep tests immutable, and maintain ≥90% coverage including edge/error paths.
- Backend tests run through `make test` (pytest with HTTPX/FastAPI TestClient); CI must also pass `make check` (`black --check`, `isort --check`, `ruff`).
- Frontend additions are expected to ship with unit tests (Vitest/Jest) and, when UI flows change, Cypress/Playwright E2E scenarios plus visual/manual QA in desktop + mobile breakpoints.
- Contract-first mindset: specs in `openspec/` define APIs; any contract changes require an OpenSpec change proposal and updated tests that assert the new behavior.

### Git Workflow
- Work happens on feature branches named `feature/<summary>` (or `fix/`, `chore/`); never push directly to `main`.
- Follow OpenSpec workflow: read current specs, create a proposal (`openspec/changes/<change-id>/`) for any net-new capability or breaking change, and wait for approval before implementation.
- Every PR must include passing lint + tests, updated docs/specs, and Conventional Commit history; small, single-scope PRs are preferred.
- Release builds are produced via Docker Compose (backend) and `pnpm build` (frontend) and deployed behind Nginx; tagging mirrors Git commit metadata.

## Domain Context
- SIPUMTECH focuses on advanced system-in-package design, wafer-level packaging, PCB design, and testing; the site targets B2B clients, partners, job seekers, and investors.
- Website IA: Home, About, Business Center (advanced packaging + hardware/software solutions), Technical Capabilities, Case Studies, Certifications, Contact, each with bilingual content.
- Design tokens: primary deep blue `#1e3a8a`, secondary blue `#3b82f6`, accent green `#00D4AA`, accent orange `#f59e0b`, trust gold `#fbbf24`, plus defined typography hierarchy and responsive breakpoints.
- Content requires high-trust elements—certifications, case studies, partner logos—and CTA components for consultations; contact form submits lead data while embedded Baidu/AMap pins show office location.

## Important Constraints
- Quality guardrails from《开发规范》apply: no “simplified” implementations, no introduction of new tech stacks without approval, documentation + tests must be updated alongside code.
- Strict RBAC/security expectations: JWT auth, Argon2 password hashing, multi-role support, and fine-grained API/menu permissions cannot regress.
- Internationalization (zh-CN/en) and responsive design are baseline requirements for all new UI; theme switching and dark mode must remain functional.
- Brand assets (logos, colors, typography) and copy tone must match SIPUMTECH guidelines; media replacements follow the curated lists in `docs/图片替换计划与实施报告.md`.
- Performance budgets: leverage Vite code-splitting, Gzip compression, image lazy loading, and avoid increasing bundle size beyond what `stats.html` flags without justification.

## External Dependencies
- Databases: SQLite (dev), MySQL/PostgreSQL (prod) behind SQLAlchemy-compatible URIs consumed by Tortoise ORM; migrations managed with Aerich CLI.
- Infrastructure: Docker/Docker Compose for deployment, Nginx for reverse proxy + SPA routing, optional CDN for static assets served from `web/dist`.
- Frontend libraries sourced from NPM/pnpm registries (Naive UI, Pinia, UnoCSS, Iconify); map embeds leverage Baidu or AMap web widgets per `docs/用户资料与需求.md`.
- Third-party services: Email delivery and consultation requests currently feed existing SIPUMTECH channels via contact form submissions; JWT secrets, database credentials, and logging sinks are injected through `.env`.

# Coaches — API

Backend services for the **Coaches** mentorship platform, built with [NestJS](https://nestjs.com/). The repository also contains the Solana smart contract used by the platform.

## Tech Stack

- **Framework:** NestJS (Express), TypeScript
- **Data:** TypeORM with migrations and a Postgres-compatible data source
- **Realtime & Queues:** Redis-backed session and communication services
- **Observability:** Health checks and metrics endpoints

## Features

- **Auth & user management** — authentication, guards, and user lifecycle (`auth`, `user`)
- **Chat** — community and direct messaging services
- **Sessions** — mentorship session management
- **Seed utilities** — structured data seeding for development environments
- **Metrics & health** — operational insights and readiness probes

## Repository Layout

```
backend/    NestJS API service (src, tests, migrations)
contract/   Solana Anchor smart contract (program source + Anchor config)
```

## Getting Started

```bash
# From the backend directory
cd backend

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env

# Run migrations (as needed)
npm run migration:run

# Start the development server
npm run start:dev
```

## Scripts (backend)

| Script                | Description                        |
| --------------------- | ---------------------------------- |
| `npm run start`       | Start the compiled server          |
| `npm run start:dev`   | Start in watch mode                |
| `npm run build`       | Build for production               |
| `npm run test`        | Run the test suite                 |
| `npm run lint`        | Run ESLint                         |
| `npm run migration:*` | Database migration helpers         |

## Smart Contract (contract)

The `contract/` directory holds the on-chain program written with [Anchor](https://www.anchor-lang.com/). See its `Anchor.toml` for program configuration and deployment details.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes and open a pull request into `main`.
4. Ensure tests pass and the server lints cleanly.

## License

Proprietary — all rights reserved.
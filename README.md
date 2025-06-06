# Express + TypeScript + MongoDB Starter

Minimal boilerplate for building scalable Express.js APIs with TypeScript and MongoDB.

## Features

- ✅ Express.js with TypeScript
- ✅ MongoDB connection via Mongoose
- ✅ Runtime environment config via `dotenv`
- ✅ Modular route structure (`api` + `web`)
- ✅ Path aliases via `@` (with `tsconfig-paths`)
- ✅ Nodemon for hot reload during development
- ✅ ESLint configured

## Scripts

- `npm run dev` — Start dev server with hot reload (ts-node + nodemon)
- `npm run build` — Compile TypeScript to JavaScript (output to `dist`)
- `npm run start` — Run the compiled code from `dist`
- `npm run lint` — Run ESLint checks

## Usage

1. Clone the specific branch:

   ```bash
   git clone --single-branch --branch starter/express-mongodb <repository_url>
2. (Optional) Update the project name and relevant metadata in package.json to personalize new project.
2. Run `npm install`
3. Run `npm run dev` to start development server

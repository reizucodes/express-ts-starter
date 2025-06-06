# Express + TypeScript + MongoDB Starter

A clean and scalable Express.js starter using TypeScript and MongoDB, with support for an extended **Model → View (JSON) → Controller** architecture, with data interaction handled through a **Repository** layer.


## Features

- ✅ Express.js with TypeScript
- ✅ MongoDB connection via Mongoose
- ✅ Runtime environment config via `dotenv`
- ✅ Modular route structure (`api` + `web`)
- ✅ Path aliases via `@` (with `tsconfig-paths`)
- ✅ Nodemon for hot reload during development
- ✅ ESLint configured
- ✅ Extended MVC architecture (Model → View (JSON) → Controller)  
- ✅ Repository pattern implementing interface contracts for clean data abstraction  


## Scripts

- `npm run dev` — Start dev server with hot reload (ts-node + nodemon)
- `npm run build` — Compile TypeScript to JavaScript (output to `dist`)
- `npm run start` — Run the compiled code from `dist`
- `npm run lint` — Run ESLint checks

## Usage

1. Clone the specific branch:

   ```bash
   git clone --single-branch --branch starter/express-mongodb-mvc <repository_url>
2. (Optional) Update the project name and relevant metadata in package.json to personalize new project.
2. Run `npm install`
3. Run `npm run dev` to start development server

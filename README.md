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

1. Clone the specific branch
   ```bash
   git clone --single-branch --branch starter/express-mongodb-mvc https://github.com/reizucodes/express-ts-starter.git <custom-folder-name>
2. Navigate into project folder
    ```bash  
    cd <folder-name>
3. Remove the existing Git history to start fresh for a new project
    ```bash
    rm -rf .git
- This deletes all Git metadata so your new commits won't be linked to the original repo
4. (Optional) Personalize your project by updating the `package.json`
- Change the `name`, `version`, `author`, and any other metadata to fit your new project.
5. Install dependencies
    ```bash
    npm install
6. Generate .env file
    ```bash
    cp .env.example .env
7. Start the development server with hot reload
    ```bash
    npm run dev
## Sample Endpoints
### Web Routes

- **GET** `/`  
  Entry point for web routes. **Response:**  
  ```json
  "expressAPI"
- **GET** `/api`  
  Base API route.
  **Response:**  
  ```json
  "message": "Start building APIs"
- **GET** `/api/sample`  
  Example API route implementing controller architecture.
    **Response:**  
  ```json
  "message": "This is as a sample response"
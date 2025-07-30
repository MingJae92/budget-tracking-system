# Budget Tracking System

A full-stack application to manage and track your personal or business finances. Built with React, Supabase, NestJS, and Material UI.

## Overview

The **Budget Tracking System** allows users to:

- Create and view accounts  
- Add and manage payment entries  
- View payment details associated with each account  


## Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React (Vite)       |
| Routing      | React Router v6    |
| UI Framework | Material UI        |
| Backend      | NestJS (Node.js)   |
| Database     | Supabase (PostgreSQL) |

## Features

- View all accounts and payments  
- Create new accounts and payment records  
- Link payments to specific accounts  
- Clean UI built with Material UI  
- NestJS backend for API and business logic  
- Supabase for data storage and retrieval

## Optimsation

- Implement the following:
- Unit testing, integration test, end to end testing
- Modulise my dialog component
- Deployment ready for production
- User Authentication & Authorization:
- Implement user sign-up/login flows (e.g., with JWT, OAuth, or Supabase Auth).
- Role-based access control (e.g., admin vs regular users).
- Real-Time Updates:
- Use WebSockets or server-sent events to push payment/account updates live to users without needing to refresh.
- Filtering and Searching:
- Add filters for payments by date range, status (pending/approved), account, or amount.
- Add a search bar to quickly find accounts or payments by recipient name or account number.
- Sorting & Advanced Pagination:
- Allow users to sort tables by columns (date, amount, status).
- Infinite scrolling or server-side pagination for better performance with large datasets.
- Mobile Responsiveness & PWA:
- Ensure the UI works well on all screen sizes.
- Convert to Progressive Web App for offline support and installability.



## Backend (NestJS)

The backend API is built using **NestJS**, a progressive Node.js framework, which provides:

- RESTful API endpoints for accounts and payments  
- Business logic 
- Integration with Supabase PostgreSQL database


## Command to open front end and backend

- Clone the repo and npm install and then run, " npm run start"
- Just one command to run after cloning repo and then run npm start, this will open the front end and back end
- If you don't catch the port server for React Vite after running the single command in time, type http://localhost:5173/ and that will take you to the front end. 

## Supabase Integration

Supabase is used as the primary database service (PostgreSQL). The NestJS backend communicates with Supabase to perform CRUD operations.

Example usage in the backend:

```ts
/
async getAccounts() {
  const { data, error } = await this.supabase
    .from('accounts')
    .select('*');
  if (error) throw new Error(error.message);
  return data;
}

```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])




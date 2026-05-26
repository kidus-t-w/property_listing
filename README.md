# Property Listing Server

A REST API backend for a property listing application. Users can sign up, log in, and manage property listings.

---

## What it does

- User sign up and login with secure passwords
- Create, view, update, and delete property listings
- Each property belongs to a user
- Protected routes — you must be logged in to create or manage listings

---

## Tech Stack

- **Node.js + Express** — the server
- **MongoDB + Mongoose** — the database
- **TypeScript** — for type safety
- **JWT** — for login sessions
- **Zod** — for validating request data
- **bcrypt** — for hashing passwords

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your environment

Create a `.env` file in the root of the project:

```env
DATABASE_URL=mongodb://localhost:27017/property_listing
```

### 3. Set up your config

Update `config/default.ts` with your JWT secret and salt factor if not already set.

### 4. Start the dev server

```bash
npm run dev
```

### 5. Seed the database (optional)

Populates the database with 2 sample users and 5 sample properties:

```bash
npm run seed
```

---

## Project Structure

```
src/
├── controllers/   # Handle incoming requests
├── middlewares/   # Auth checks and request validation
├── models/        # Database schemas (User, Property, Session)
├── routes/        # API endpoints
├── schemas/       # Request validation rules
├── services/      # Database queries
└── utils/         # Helpers (db connection, logger, seed, etc.)
```

---

## API Overview

| Method | Endpoint | Description | Auth required |
|--------|----------|-------------|---------------|
| POST | `/api/users` | Create a new user | No |
| POST | `/api/sessions` | Log in | No |
| DELETE | `/api/sessions` | Log out | Yes |
| GET | `/api/properties` | Get all properties | No |
| POST | `/api/properties` | Create a property | Yes |
| PUT | `/api/properties/:id` | Update a property | Yes |
| DELETE | `/api/properties/:id` | Delete a property | Yes |

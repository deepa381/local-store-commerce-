

# Local Store — E-commerce Application

## 📌 Overview

**Local Store** is a full-stack e-commerce application built with a **React + Tailwind CSS** frontend and a **Node.js (Express) + MongoDB** backend. The project demonstrates core e-commerce workflows including product browsing, cart management, authentication, order handling, and admin-restricted product management.

---

## ✨ Key Features

* Product listing, search, filtering, and sorting
* Product details and responsive UI components
* Persistent shopping cart using localStorage
* User authentication and authorization (JWT)
* Protected routes for checkout, profile, and orders
* Admin-only product CRUD operations
* Order creation and order history
* File uploads with static serving
* Database seeding with sample users and products
* Graceful error handling and health check endpoint

---

## 🛠️ Tech Stack

**Frontend**

* React
* Tailwind CSS
* React Router
* CRACO

**Backend**

* Node.js
* Express
* MongoDB (Mongoose)

## 📂 Project Structure (Simplified)

```text
client/   → React frontend
server/   → Express backend
models/   → MongoDB schemas
routes/   → API routes
middleware/ → Auth & security middleware
uploads/  → File uploads
```

---

## ⚙️ Environment Variables

Create a `.env` file in the server directory:

```env
MONGODB_URI=mongodb://localhost:27017/localstore
PORT=5000
NODE_ENV=development
```

---

## 🚀 Run Locally

```sh
# Install dependencies (server & client)
npm install

# Start development server
npm run dev
```

---

## 🌱 Database Seeding

Populate the database with sample users and products:

```sh
node seedDatabase.js
```

**Sample Accounts**

* Admin: `admin@example.com / admin123`
* Demo User: `demo@example.com / demo123`

---

## 🔐 API Overview

* `GET /api/products`
* `POST /api/users/login`
* `POST /api/orders` (protected)
* `POST /api/products` (admin only)
* `POST /api/upload`

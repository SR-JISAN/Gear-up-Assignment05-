# 🚀 GearUp - Sports & Outdoor Gear Rental Platform (Frontend)

GearUp is a modern full-stack sports and outdoor gear rental platform that allows customers to rent equipment online, providers to manage their inventory, and administrators to monitor the entire system.

This repository contains the **Frontend Application** built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

---

## 🌐 Live Demo

**Frontend:** https://gear-up-app-seven.vercel.app

**Backend API:** https://gear-up-backeen-server.vercel.app/

---

# ✨ Features

## 👤 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control

---

## 🏠 Customer Features

- Browse Products
- Search Products
- Filter by Category
- Product Details
- Rent Equipment
- Stripe Checkout
- Payment Success & Cancel Pages
- View Rental History
- Update Profile

---

## 🛍 Provider Features

- Dashboard Overview
- Add Product
- Update Product
- Delete Product
- Manage Rental Orders

---

## 🛠 Admin Features

- Dashboard Overview
- Manage Users
- Manage Categories
- Manage Products
- Manage Orders
- Manage Reviews

---

## 💳 Payment

Integrated with **Stripe Checkout**

Features include:

- Secure Checkout
- Payment Success Page
- Payment Cancel Page
- Backend Stripe Webhook Support

---

# 🖥 Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form
- Zod
- Sonner

### Backend

- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Stripe

---

# 📂 Project Structure

```
app/
components/
hooks/
lib/
public/
actions/
types/

README.md
API_INTEGRATION.md
```

---

# 🔗 API

**Base URL**

```
https://gear-up-backeen-server.vercel.app/api
```

Detailed API mapping is available in:

```
API_INTEGRATION.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/SR-JISAN/Gear-up-Assignment05-
```

Go to project directory

```bash
cd gearup-frontend
```

Install dependencies

```bash
pnpm install
```

Run development server

```bash
npm run dev
```

---

# 🌍 Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_API_URL=https://gear-up-backeen-server.vercel.app

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
```

---

# 🔐 Test Credentials

## Admin

Email: srjisan@gmail.com // ADMIN

```
Md Jisan // ADMIN
```

Password:123456

```
Admin
```

> Replace the credentials above with your actual deployed admin account before submission.

---

# 📄 Documentation

- ✅ API Documentation → `API_INTEGRATION.md`

---

# 🚀 Deployment

Frontend

```
Vercel
```

Backend

```
Vercel
```

Database

```
PostgreSQL
```

---

# 👨‍💻 Developer

**Md. Jisan**

GitHub:
https://github.com/SR-JISAN

Portfolio:
https://portfolio-front-usdb.vercel.app

---

# 📜 License

This project was developed for educational purposes as part of an academic assignment.
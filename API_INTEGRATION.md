# API Integration Documentation

## Project Information

**Project Name:** GearUp – Sports & Outdoor Gear Rental Platform

**Frontend Framework:** Next.js 16 (App Router)

**Backend API:**
https://gear-up-backeen-server.vercel.app/api

---

# Overview

The GearUp frontend communicates with a RESTful backend API to manage authentication, products, categories, rental orders, reviews, payments, and dashboards. All API requests are performed using asynchronous server actions and fetch requests.

---

# API Base URL

```text
https://gear-up-backeen-server.vercel.app/api
```

---

# Authentication

| Frontend Component | HTTP Method | API Endpoint | Description |
|-------------------|------------|--------------|-------------|
| Login Form | POST | `/auth/login` | Authenticate user |
| Register Form | POST | `/auth/register` | Register a new user |
| User Profile | GET | `/my-profile` | Fetch authenticated user |
| Update Profile | PATCH | `/update-profile` | Update user information |

---

# Products

| Frontend Component | HTTP Method | API Endpoint | Description |
|-------------------|------------|--------------|-------------|
| Home Products Section | GET | `/products` | Display featured products |
| Products Page | GET | `/products` | Retrieve all products |
| Product Details | GET | `/single/:id` | Retrieve product details |
| Product Search | GET | `/products?search=` | Search products |
| Product Filter | GET | `/products?category=&availability=` | Filter products |
| Add Product | POST | `/post` | Provider creates product |
| Update Product | PATCH | `/update/:id` | Provider updates product |
| Delete Product | DELETE | `/delete/:id` | Provider removes product |

---

# Categories

| Frontend Component | HTTP Method | API Endpoint | Description |
|-------------------|------------|--------------|-------------|
| Category List | GET | `/categories` | Retrieve all categories |
| Add Category | POST | `/category` | Create category |

---

# Reviews

| Frontend Component | HTTP Method | API Endpoint | Description |
|-------------------|------------|--------------|-------------|
| Reviews Page | GET | `/my-reviews` | Retrieve reviews |
| Review Details | GET | `/reviews/:id` | Retrieve review |
| Create Review | POST | `/create` | Submit review |
| Update Review | PATCH | `/reviews/:id` | Edit review |
| Delete Review | DELETE | `/reviews/:id` | Delete review |

---

# Rental Orders

| Frontend Component | HTTP Method | API Endpoint | Description |
|-------------------|------------|--------------|-------------|
| Checkout | POST | `/orders` | Create rental order |
| Customer Orders | GET | `/orders/my-orders` | View customer orders |
| Provider Orders | GET | `/orders/provider` | View provider orders |
| Update Order Status | PATCH | `/orders/:id/status` | Update rental status |

---

# Payment Integration (Stripe)

| Frontend Component | HTTP Method | API Endpoint | Description |
|-------------------|------------|--------------|-------------|
| Checkout Button | POST | `/payments/create-checkout-session` | Create Stripe Checkout Session |
| Payment Success Page | GET | `/payments/success` | Payment success verification |
| Payment Cancel Page | GET | `/payments/cancel` | Handle cancelled payment |
| Stripe Webhook *(Backend)* | POST | `/payments/webhook` | Stripe webhook processing |

---

# Dashboard Integration

## Customer Dashboard

| Feature | Endpoint |
|---------|----------|
| Dashboard Overview | `/users/profile` |
| My Orders | `/orders/my-orders` |
| Profile Information | `/users/profile` |

---

## Provider Dashboard

| Feature | Endpoint |
|---------|----------|
| Dashboard Overview | `/provider/dashboard` |
| Product Management | `/products` |
| Rental Orders | `/orders/provider` |

---

## Admin Dashboard

| Feature | Endpoint |
|---------|----------|
| Dashboard Statistics | `/admin/dashboard` |
| User Management | `/users` |
| Category Management | `/categories` |
| Product Management | `/products` |
| Order Management | `/orders` |
| Review Management | `/reviews` |

---

# Error Handling

The frontend implements a consistent error-handling strategy across the application.

- User-friendly toast notifications using **Sonner**
- Inline validation messages with **React Hook Form**
- Loading indicators during API requests
- Route-level Error Boundaries
- HTTP status-based error handling
- Graceful fallback UI for unexpected failures

---

# Authentication & Authorization

- JWT Authentication
- Protected Routes
- Role-based Route Access
- Secure Token Handling
- Automatic Redirect for Unauthorized Users

---

# API Response Structure

Successful response

```json
{
  "success": true,
  "message": "Request completed successfully.",
  "data": {}
}
```

Error response

```json
{
  "success": false,
  "message": "Something went wrong."
}
```

---

# Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Sonner
- Stripe Checkout
- REST API

---

# Notes

- All frontend pages consume backend REST APIs through reusable server actions.
- Protected routes require valid JWT authentication.
- Stripe Checkout handles secure payment processing and redirects users to success or cancel pages after payment completion.
# 🏠 Property Listings Dashboard

A modern **React property listings application** built with a real backend powered by **Supabase**.  
This project demonstrates production-ready front-end patterns including server-side data fetching, debounced search, filtering, sorting, pagination, and dynamic routing.

Built to showcase clean React architecture, thoughtful UX, and real-world API integration.

🔗 **Live Demo:** https://property-listing-app-theta.vercel.app/  
📦 **GitHub Repo:** https://github.com/CassiuSRSA/Property-Listing-App

---

## ✨ Features

### 📋 Property Listings

- Reusable, styled property card components
- Responsive grid layout
- Image support with graceful fallbacks
- Realistic, production-style data

### 🔍 Search & Filters (Server-Side)

- Debounced text search (title & location)
- Filter by:
  - Property type (Apartment, House, Penthouse)
  - Bedrooms
- All filtering handled **server-side via Supabase**, not mocked data

### ↕️ Sorting & Pagination

- Server-side sorting by price
- Pagination-ready architecture for large datasets
- Preserves filters and search state across navigation

### 📄 Property Details Page

- Dynamic routing (`/properties/:id`)
- Fetches individual property records from the API
- Polished, responsive layout
- Rich property information display

### 🔙 Smart Back Navigation

- Returns users to the **exact page, filters, and pagination state**
- Implemented using React Router location state
- No unnecessary state resets or refetching

### ⚡ Performance & UX

- Debounced API requests to reduce network load
- Loading and error states for async operations
- Defensive UI patterns (fallback images, empty states)

---

## 🗄️ Backend & API (Supabase)

This project is backed by a **Supabase-hosted PostgreSQL database**, accessed via Supabase’s REST API.

### Backend Highlights

- Custom database schema for properties
- Secure API access using environment variables
- Server-side querying for:
- Search
- Filtering
- Sorting
- Pagination
- Seeded with realistic South African property data

### Properties Table Structure

```
title
price
location (Suburb - City)
bedrooms
bathrooms
type
image
description
created_at
```

## 🛠️ Tech Stack

- **React** (Hooks-based architecture)
- **Vite** (Fast development and builds)
- **React Router** (Client-side routing)
- **Supabase** (PostgreSQL + REST API)
- **JavaScript (ES6+)**
- **CSS (Grid & Flexbox)**
- **Vercel** (Hosting & CI)

---

## 🧠 Architectural Highlights

This project was intentionally structured to reflect real-world React applications:

- Clear separation between **pages**, **components**, and **data**
- Stateless UI components where possible
- Controlled side effects using `useEffect`
- Performance-friendly patterns (debouncing, derived state)
- URL-driven detail views (`/properties/:id`)

---

## 📂 Project Structure

```

src/
├── components/
├── pages/
├── hooks/
├── api/
├── App.jsx
└── main.jsx

```

---

## 🚀 Getting Started Locally

```bash
git clone https://github.com/CassiuSRSA/Property-Listing-App
cd YOUR-REPO
npm install
npm run dev
```

Create a .env file:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Open your browser at:

```
http://localhost:5173
```

---

## 📸 Screenshots

Add screenshots to a `/screenshots` folder and reference them here.

---

## 🎯 Why This Project Exists

This project was built to demonstrate professional React patterns, clean architecture, and thoughtful UI composition suitable for real-world applications.

---

## 🔮 Possible Improvements

- Authentication and saved listings
- Advanced filtering
- Map-based views
- Automated testing

---

## 👤 Author

**Sean Brookstein**  
Front-End Developer (React)

---

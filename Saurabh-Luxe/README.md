# Saurabh Luxe — The Digital Atelier

> Luxury fragrance e-commerce built with **Next.js 14 + Express + MongoDB + MySQL**

---

## Project Structure

```
saurabh-luxe/
├── src/               # Next.js 14 (App Router)
│   ├── app/           # Pages & global CSS
│   ├── components/    # Navbar, Hero, ProductGrid, EditorialSections, Footer
│   └── lib/api.js     # Typed fetch wrapper
│
├── Server/            # Node + Express REST API
│   ├── config/        # MongoDB (Mongoose) + MySQL (Sequelize) connections
│   ├── models/        # Product (Mongo), User & Order (MySQL)
│   ├── controllers/   # Business logic
│   ├── routes/        # Express routers
│   ├── middleware/     # JWT auth, error handler
│   └── scripts/seed.js
│
└── README.md
```

---

## Tech Stack

| Layer       | Technology                        | Purpose                                    |
|-------------|-----------------------------------|--------------------------------------------|
| Frontend    | Next.js 14, React 18, Tailwind    | UI, SSR/SSG, routing                       |
| Backend     | Node.js, Express 4                | REST API                                   |
| Primary DB  | MongoDB + Mongoose                | Products, reviews, catalog (flexible docs) |
| Secondary DB| MySQL + Sequelize                 | Users, orders, payments (relational)       |
| Auth        | JWT (jsonwebtoken) + bcryptjs     | Stateless auth                             |
| Security    | Helmet, CORS, rate-limit          | Headers, XSS, brute-force protection       |

---

## Quick Start

### 1. Server

```bash
cd Server
cp .env.example .env          # fill in MONGO_URI, MYSQL_*, JWT_SECRET
npm install
npm run dev                    # → http://localhost:5000
node scripts/seed.js           # optional: seed sample products
```

### 2. Frontend

```bash
cd src
npm install
# create .env.local:
#   NEXT_PUBLIC_API_URL=http://localhost:5000/api
npm run dev                    # → http://localhost:3000
```

---

## API Endpoints

### Products (MongoDB)

| Method | Path                          | Auth  | Description              |
|--------|-------------------------------|-------|--------------------------|
| GET    | /api/products                 | —     | List (filter/search/page)|
| GET    | /api/products/:slug           | —     | Single product           |
| POST   | /api/products                 | Admin | Create product           |
| PUT    | /api/products/:id             | Admin | Update product           |
| DELETE | /api/products/:id             | Admin | Delete product           |
| POST   | /api/products/:id/reviews     | User  | Add review               |

### Auth (MySQL)

| Method | Path               | Auth  | Description   |
|--------|--------------------|-------|---------------|
| POST   | /api/auth/register | —     | Register      |
| POST   | /api/auth/login    | —     | Login → JWT   |
| GET    | /api/auth/me       | User  | Current user  |

### Orders (MySQL)

| Method | Path                    | Auth  | Description         |
|--------|-------------------------|-------|---------------------|
| POST   | /api/orders             | User  | Place order         |
| GET    | /api/orders/my          | User  | My orders           |
| GET    | /api/orders/:id         | User  | Single order        |
| GET    | /api/orders/admin       | Admin | All orders          |
| PUT    | /api/orders/:id/status  | Admin | Update status       |

### Newsletter

| Method | Path                        | Description      |
|--------|-----------------------------|------------------|
| POST   | /api/newsletter/subscribe   | Subscribe email  |

---

## Hero Video

The hero uses a **YouTube no-cookie iframe** with B&W CSS filter applied.

- Default video: Lumière Brothers (1895, public domain)
- To swap: change `YOUTUBE_VIDEO_ID` in `frontend/components/HeroSection.jsx`
- The iframe is `pointer-events: none`, fullscreen, auto-play, muted, looped

---

## Design System (from DESIGN.md)

- **Fonts:** Epilogue (headlines) · Manrope (body/label)
- **Primary:** `#003b34` (deep forest green)
- **Secondary:** `#b90d1d` (passion red)
- **No-line rule:** section depth via background tonal shifts, never 1px borders
- **Glassmorphism:** `rgba(252,249,248,0.72) + backdrop-blur: 20px`
- **Asymmetric grid:** featured cards span 2 columns; images bleed/offset

# LancerHub

A freelancer project marketplace built with Next.js 15, Prisma, and Neon PostgreSQL. Clients can post projects, freelancers can browse and apply — a full-stack learning project built from scratch.

---

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Database** — Neon (Serverless PostgreSQL)
- **ORM** — Prisma 7
- **Styling** — Tailwind CSS
- **Language** — JavaScript

---

## Features

- Browse all projects listing
- View single project by slug
- Dynamic routing with Next.js App Router
- Nested layouts (public navbar + dashboard sidebar)
- Server Components for SEO-friendly data fetching
- REST API routes (`/api/projects`, `/api/projects/[slug]`)
- Data layer separation (`lib/data/projects.js`)
- Create project via Server Actions
- Loading and error states (`loading.js`, `error.js`)
- Real database with Prisma ORM + Neon Postgres
- Database seeding script
- Environment variable management

---

## Project Structure

```
lancerhub/
├── app/
│   ├── layout.js                        # Global layout with Navbar
│   ├── page.js                          # Home page
│   ├── api/
│   │   └── projects/
│   │       ├── route.js                 # GET /api/projects
│   │       └── [slug]/
│   │           └── route.js             # GET /api/projects/[slug]
│   ├── projects/
│   │   ├── page.js                      # All projects listing
│   │   ├── loading.js                   # Loading state
│   │   ├── error.js                     # Error state
│   │   └── [slug]/
│   │       └── page.js                  # Single project page
│   └── dashboard/
│       ├── layout.js                    # Dashboard layout with Sidebar
│       ├── page.js                      # Dashboard home
│       ├── profile/
│       │   └── page.js
│       └── projects/
│           └── create/
│               └── page.js             # Create project form
├── components/
│   ├── Navbar/
│   │   └── Navbar.js
│   └── LeftSidebar/
│       └── LeftSidebar.js
├── lib/
│   ├── db.js                           # Prisma client
│   └── data/
│       └── projects.js                 # Data layer functions
├── prisma/
│   ├── schema.prisma                   # Database schema
│   └── seed.js                         # Seed script
└── .env                                # Environment variables
```

---

## Database Schema

```
users        → id, first_name, last_name, email, role, designation, country, city
projects     → id, title, slug, description, budget, status, tech_stack[], ownerId
proposals    → id, project_id, user_id, bidding_price, cover_letter, status
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Neon account (free) — [neon.tech](https://neon.tech)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lancerhub.git
cd lancerhub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Neon DATABASE_URL to .env

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed the database
node prisma/seed.js

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="your_neon_connection_string_here"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/[slug]` | Get single project by slug |
| POST | Coming soon | Create new project |

---

## Roadmap

- [x] Routing and layouts
- [x] Server and client components
- [x] API routes
- [x] Neon database + Prisma ORM
- [x] Server Actions (create project)
- [x] Loading and error states
- [ ] Authentication (NextAuth.js)
- [ ] Proposal submission
- [ ] Dashboard analytics
- [ ] Deployment on Vercel

---

## Author

Built while learning Next.js from scratch to advanced level.

- GitHub: [@your-username](https://github.com/SubhadipQA)

---

## License

MIT

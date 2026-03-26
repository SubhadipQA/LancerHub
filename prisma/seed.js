

//Users table seeding script
import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
await prisma.user.createMany({
  data: [
    {
      first_name: "Rahul",
      last_name: "Sharma",
      email: "rahul@test.com",
      role: "client",
      designation: "Product Manager",
      country: "India",
      city: "Delhi"
    },
    {
      first_name: "Amit",
      last_name: "Kumar",
      email: "amit@test.com",
      role: "freelancer",
      designation: "Full Stack Developer",
      country: "India",
      city: "Bangalore"
    },
    {
      first_name: "Priya",
      last_name: "Singh",
      email: "priya@test.com",
      role: "freelancer",
      designation: "UI/UX Designer",
      country: "India",
      city: "Mumbai"
    },
    {
      first_name: "Sneha",
      last_name: "Patel",
      email: "sneha@test.com",
      role: "client",
      designation: "Startup Founder",
      country: "India",
      city: "Ahmedabad"
    },
    {
      first_name: "Arjun",
      last_name: "Verma",
      email: "arjun@test.com",
      role: "freelancer",
      designation: "Backend Developer",
      country: "India",
      city: "Hyderabad"
    },
    {
      first_name: "Neha",
      last_name: "Gupta",
      email: "neha@test.com",
      role: "freelancer",
      designation: "Frontend Developer",
      country: "India",
      city: "Pune"
    },
    {
      first_name: "Karan",
      last_name: "Mehta",
      email: "karan@test.com",
      role: "client",
      designation: "Business Owner",
      country: "India",
      city: "Kolkata"
    }
  ]
})
await prisma.project.createMany({
  data: [
    {
      title: "Build me a portfolio",
      slug: "build-me-a-portfolio",
      short_desc: "Need a developer portfolio",
      description: "Looking for a modern, responsive portfolio website",
      budget: 500,
      tech_stack: ["React", "Next.js"],
      status: "open",
      ownerId: 1
    },
    {
      title: "Fix my WooCommerce store",
      slug: "fix-my-woocommerce-store",
      short_desc: "WooCommerce issues",
      description: "Payment gateway not working properly",
      budget: 200,
      tech_stack: ["WordPress", "PHP"],
      status: "open",
      ownerId: 1
    },
    {
      title: "Landing page for SaaS product",
      slug: "saas-landing-page",
      short_desc: "Modern landing page",
      description: "High-converting landing page with animations",
      budget: 300,
      tech_stack: ["React", "Tailwind CSS"],
      status: "open",
      ownerId: 4
    },
    {
      title: "E-commerce website with Next.js",
      slug: "ecommerce-nextjs",
      short_desc: "Full e-commerce build",
      description: "Need cart, checkout, and admin panel",
      budget: 1500,
      tech_stack: ["Next.js", "Stripe", "PostgreSQL"],
      status: "open",
      ownerId: 4
    },
    {
      title: "Build blog platform",
      slug: "build-blog-platform",
      short_desc: "Custom blog system",
      description: "SEO-friendly blog with CMS features",
      budget: 600,
      tech_stack: ["Next.js", "Prisma"],
      status: "open",
      ownerId: 7
    },
    {
      title: "Fix website performance issues",
      slug: "fix-performance-issues",
      short_desc: "Optimize slow website",
      description: "Improve Core Web Vitals and loading speed",
      budget: 400,
      tech_stack: ["Next.js", "Lighthouse"],
      status: "open",
      ownerId: 7
    },
    {
      title: "Build admin dashboard",
      slug: "admin-dashboard",
      short_desc: "Dashboard with analytics",
      description: "Admin panel with charts and user management",
      budget: 1200,
      tech_stack: ["React", "Chart.js"],
      status: "open",
      ownerId: 1
    }
  ]
})
}

main()
  .then(() => {
    console.log("Users seeded successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error seeding users:", error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
import prisma from "../db";

export async function getAllProjects() {
  const projects = await prisma.project.findMany()
  return projects
}

export async function getProjectBySlug(slug) {
  const project = await prisma.project.findUnique({
    where: { slug },
  });
  return project
}
"use server"

import prisma from "../../../lib/db"
import { redirect } from "next/navigation"

export async function createProject(formData) {
  const title = formData.get("title")
  const short_desc = formData.get("short_desc")
  const description = formData.get("description")
  const budget = Number(formData.get("budget"))
  const deadline = formData.get("deadline")

  //handle array input
  const techInput = formData.get("tech_stack")
  const tech_stack = techInput.split(",").map(t => t.trim())

  await prisma.project.create({
    data: {
      title,
      short_desc,
      description,
      budget,
      deadline: deadline ? new Date(deadline) : null,
      tech_stack,
      slug: title.toLowerCase().replaceAll(" ", "-"),
      ownerId: 1, // temp
    },
  })
  redirect("/projects")
}
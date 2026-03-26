import { getProjectBySlug } from "../../../../lib/data/projects"

export async function GET(request, { params }) {
  const { slug } = await params
  
  // Find one project by slug
  const project = await getProjectBySlug(slug)
  
  // If not found return 404
  if (!project) {
    return Response.json({ error: "Project not found" }, { status: 404 })
  }

  return Response.json(project)
}

// export async function GET(request, { params }) {
//   const { slug } = await params
  
//   // Find one project by slug
//   const project = projects.find((p) => p.slug === slug)
  
//   // If not found return 404
//   if (!project) {
//     return Response.json({ error: "Project not found" }, { status: 404 })
//   }

//   return Response.json(project)
// }
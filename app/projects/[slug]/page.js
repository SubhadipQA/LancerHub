
import { getProjectBySlug } from "@/lib/data/projects"

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  
  return (

    <>
      <h1>{project.title}</h1>
      <p>Budget: {project.budget}</p>
    </>
  )

}
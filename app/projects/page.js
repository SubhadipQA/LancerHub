import Link from "next/link"
import { getAllProjects } from "../../lib/data/projects"

// const projects = [
//   { id: 1, title: "Build me a portfolio", budget: "$500" },
//   { id: 2, title: "Fix my WooCommerce store", budget: "$200" },
//   { id: 3, title: "Create REST API", budget: "$800" },
// ]




// export default function Projects(){
//     return(
//         <>
//             <h1>Projects Lists</h1>
//             <ul>
//                 {projects.map((project) => {
//                     const slug = project.title.toLowerCase().replace(/ /g, "-")
//                     return (
//                         <li key={project.id}>   
//                             <Link href={`/projects/${slug}`}>
//                                 {project.title} - {project.budget}
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )   
// }

export default async function Projects() {
  const projects = await getAllProjects()

  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`}>
              {project.title} - {project.budget}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
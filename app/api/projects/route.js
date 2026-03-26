import { getAllProjects } from "../../../lib/data/projects";




export async function GET() {
  const projects = await getAllProjects()
  return Response.json(projects)
}



// export async function GET() {
//   // return new Response(JSON.stringify(projects), {
//   //   headers: { 'Content-Type': 'application/json' },
//   // })

//   await new Promise((resolve) => setTimeout(resolve, 2000))
//   return Response.json(projects)
// }
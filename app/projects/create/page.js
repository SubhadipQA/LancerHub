import { createProject } from "./actions";

export default function CreateProject() {
  return (
    <div>
        <h1>Create a New Project</h1>
        <form action={createProject} className="flex flex-col gap-4">
            <input name="title" placeholder="Title" />

            <input name="short_desc" placeholder="Short Description" />

            <textarea name="description" placeholder="Description" />

            <input name="budget" type="number" placeholder="Budget" />
            <input
                name="tech_stack"
                placeholder="React, Next.js, Node"
            />

            <input name="deadline" type="date" />

            <button type="submit">Post Project</button>
        </form>
    </div>
  )
}

import ProjectCard from './ProjectCard'
import { projects } from './data'

export default function Projects() {

  return (
    <section className="projects">
      <h1>Web Development Projects</h1>
      <div className="projects-flex">
        {projects.map(project => (
          <ProjectCard
            key={project.name}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}
export default function ProjectCard({ name, description, gitHub, deployedUrl, gitHubClient, gitHubServer }) {
  return (
    <a href={deployedUrl} className="project-card" target="blank">
      <h3>{name}</h3>
      <p>{description}</p>
      {gitHub ?
        <a className="github" href={gitHub} target="blank">GitHub</a>
        :
        <div>
          <label>GitHub: </label>
          <a className="github" href={gitHubClient} target="blank">Client</a>
          <a className="github" href={gitHubServer} target="blank">Server</a>
        </div>
      }
    </a>
  )
}
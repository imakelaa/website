import type { ProjectsSection as ProjectsSectionType } from "../section_types";
import { ProjectCard } from "../../components/ProjectCard";
import "../../styles/components/ProjectCard.scss";
import "../Home/Home.scss"


export function ProjectsSection(props: ProjectsSectionType) {
  const { title, projects } = props;

  return (
    <section className="projects__section">
      <h2 className="projects-title">{title}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
          >
            {project.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
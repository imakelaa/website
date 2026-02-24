import type { ProjectsSection as ProjectsSectionType } from "../section_types";
import { ProjectCard } from "../../components/ProjectCard";
import "../../styles/components/ProjectCard.scss";
import "../Home/Home.scss";

export function ProjectsSection(props: ProjectsSectionType) {
  const { title, projects } = props;

  return (
    <section className="projects__section">
      {title && <h2 className="projects-title">{title}</h2>}

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
          >
            <ul className="project-card__description">
              {project.description.map((item, i) => (
                <li key={i}>
                  {item.text}{" "}
                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
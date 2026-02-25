import type { ProjectsSection as ProjectsSectionType, ProjectDescriptionItem } from "../section_types";
import { ProjectCard } from "../../components/ProjectCard";
import "../../styles/components/ProjectCard.scss";
import "../Home/Home.scss";

export function ProjectsSection(props: ProjectsSectionType) {
  const { title, projects } = props;

  // rendering a single description
  const renderItem = (item: ProjectDescriptionItem) => {
    if (item.link) {
      return (
        <>
          {item.text}{" "}
          <a href={item.link.url} target="_blank" rel="noopener noreferrer">
            {item.link.label}
          </a>
        </>
      );
    }
    return item.text;
  };

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
              {project.description.map((desc, i) => {
                // if desc is an array, inline bullet
                if (Array.isArray(desc)) {
                  return (
                    <li key={i}>
                      {desc.map((part, j) => (
                        <span key={j} style={{ whiteSpace: "nowrap" }}>
                          {renderItem(part)}{" "}
                        </span>
                      ))}
                    </li>
                  );
                }
                // bullet points
                return <li key={i}>{renderItem(desc)}</li>;
              })}
            </ul>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
import "../styles/components/ProjectCard.scss"

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
    </div>
  );
}
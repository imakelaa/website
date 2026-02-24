import "../styles/components/ProjectCard.scss";

type ProjectCardProps = {
  title: string;
  image: string;
  children: any;
};

export function ProjectCard({ title, image, children }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>

        <div className="project-card__description">
          {children}
        </div>
      </div>
    </div>
  );
}

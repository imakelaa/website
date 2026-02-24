import type { SkillsSection as SkillsSectionType } from "../section_types";

export function SkillsSection(props: SkillsSectionType) {
  const { title, groups } = props;

  return (
    <section className="resume__block">
      {title && <h2 className="resume__section-title">{title}</h2>}

      {groups.map((group) => (
        <div key={group.label} className="resume__skills-group">
          <h3>{group.label}</h3>
          <div className="resume__skills-row">
            {group.items.map((item) => (
              <span key={item} className="resume__skill-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
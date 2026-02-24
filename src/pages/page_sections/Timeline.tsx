import type { TimelineSection as TimelineSectionType } from "../section_types";

export function TimelineSection(props: TimelineSectionType) {
  const { title, items } = props;

  return (
    <section className="resume__block">
      <h2 className="resume__section-title">{title}</h2>

      <div className="resume__card-container">
        {items.map((item) => (
          <div key={item.id} className="resume__card">
            <div className="resume__card-header">
              <strong>{item.title}</strong>
              <span className="resume__card-date">{item.date}</span>
            </div>

            {item.subtitle && (
              <div className="resume__card-subtitle">{item.subtitle}</div>
            )}

            {item.bullets && (
              <ul className="resume__card-list">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
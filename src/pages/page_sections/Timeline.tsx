import type {
  TimelineSection as TimelineSectionType,
  TimelineBulletItem,
  TextWithLink,
} from "../section_types";

export function TimelineSection(props: TimelineSectionType) {
  const { title, items } = props;

  // reusable renderer for text + optional link
  const renderTextWithLink = (item: TextWithLink) => {
    if (item.link) {
      return (
        <>
          {item.text}{" "}
          <a
            href={item.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link.label}
          </a>
        </>
      );
    }

    return item.text;
  };

  // bullet renderer (unchanged behavior, now uses shared function)
  const renderBulletItem = (item: TimelineBulletItem) => {
    return renderTextWithLink(item);
  };

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
              <div className="resume__card-subtitle">
                {Array.isArray(item.subtitle)
                  ? item.subtitle.map((part, i) => (
                      <span key={i}>
                        {renderTextWithLink(part)}{" "}
                      </span>
                    ))
                  : renderTextWithLink(item.subtitle)}
              </div>
            )}

            {item.bullets && (
              <ul className="resume__card-list">
                {item.bullets.map((bullet, i) => {
                  if (Array.isArray(bullet)) {
                    return (
                      <li key={i}>
                        {bullet.map((part, j) => (
                          <span key={j}>
                            {renderBulletItem(part)}{" "}
                          </span>
                        ))}
                      </li>
                    );
                  }

                  return (
                    <li key={i}>
                      {renderBulletItem(bullet)}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
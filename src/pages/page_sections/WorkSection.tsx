import { Link } from "react-router-dom";
import type { WorkSection } from "../section_types";
import "./WorkSection.scss";

export function WorkSection({ headline, highlightedWord, cards }: WorkSection) {
  const parts = headline.split(highlightedWord);

  return (
    <section className="work-section">
      <div className="work-section__inner">
        <h2 className="work-section__headline">
          {parts[0]}
          <span className="highlight">{highlightedWord}</span>
          {parts[1]}
        </h2>
        <div className="work-section__cards">
          {cards.map(card => (
            <div key={card.id} className="work-card">
              <div className="work-card__title">{card.title}</div>
              <ul>
                {card.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="work-card__links">
                {card.blogUrl && <a href={card.blogUrl} target="_blank" rel="noreferrer" className="work-card__link">{card.blogLabel ?? "link to blog"}</a>}
                {card.featureUrl && <a href={card.featureUrl} target="_blank" rel="noreferrer" className="work-card__link">{card.featureLabel ?? "link to feature"}</a>}
                {card.postUrl && <Link to={card.postUrl} className="work-card__link">{card.postLabel ?? "link to feature"}</Link>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

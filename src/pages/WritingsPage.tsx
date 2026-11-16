import { Link } from "react-router-dom";
import "./WritingsPage.scss";
import { writings, mdPreview } from "./Data/writings.data";


export default function WritingsPage() {
  return (
    <div className="writings-page">
      <div className="writings-page__grid">
        {writings.map((w, i) => {
          const md = w.slug ? mdPreview(w.slug) : null;
          const title = w.title ?? md?.title ?? "";
          const excerpt = w.excerpt ?? md?.excerpt ?? "";

          const preview = w.image ? (
            <div className="writings-card__preview writings-card__preview--rich">
              <img src={w.image} alt={title} className="writings-card__preview-img" />
              <div className="writings-card__preview-text">
                {w.author && <span className="writings-card__author">{w.author}</span>}
                {excerpt && <p className="writings-card__excerpt">{excerpt}</p>}
              </div>
            </div>
          ) : (
            <div className="writings-card__preview writings-card__preview--text">
              {title && <p className="writings-card__preview-title">{title}</p>}
              {excerpt && <p className="writings-card__excerpt writings-card__excerpt--on-bg">{excerpt}</p>}
            </div>
          );

          const footer = (
            <div className="writings-card__footer">
              <span className="writings-card__title">
                {title} <span className="writings-card__category">• {w.category}</span>
              </span>
              <span className="writings-card__year">{w.year}</span>
            </div>
          );

          if (w.url) {
            return (
              <a key={i} href={w.url} target="_blank" rel="noopener noreferrer" className="writings-card writings-card--link">
                {preview}{footer}
              </a>
            );
          }
          if (w.slug) {
            return (
              <Link key={i} to={`/writings/${w.slug}`} className="writings-card writings-card--link">
                {preview}{footer}
              </Link>
            );
          }
          return (
            <div key={i} className="writings-card">
              {preview}{footer}
            </div>
          );
        })}
      </div>
    </div>
  );
}

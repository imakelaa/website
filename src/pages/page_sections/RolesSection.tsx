import type { RolesSection } from "../section_types";
import "./RolesSection.scss";

export function RolesSection({ roles, loadingLabel, backgroundPhoto }: RolesSection) {
  return (
    <section className="roles-section" style={backgroundPhoto ? { '--bg-url': `url(${backgroundPhoto})` } as React.CSSProperties : undefined}>
      <h2 className="roles-section__headline">
        I am...<span className="roles-section__cursor" aria-hidden="true">|</span>
      </h2>

      <div className="roles-section__inner">
        <div className="roles-section__grid">
          {roles.map((role, i) => (
            <div key={role.id} className="sticky-note roles-section__card">
              <div className="sticky-note__header">[0{i + 1}] {role.label}</div>
              <ul>
                {role.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {loadingLabel && (
        <div className="roles-section__loading-banner">
          {loadingLabel}
        </div>
      )}
    </section>
  );
}

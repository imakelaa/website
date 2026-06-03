import type { HomeSection } from "../section_types";
import "./HomeSection.scss";

export function HomeSection({ greeting, name, photos }: HomeSection) {
  return (
    <section className="home-section">
      <div className="home-section__inner">
        <div className="home-section__text">
          <p className="home-section__greeting">{greeting}</p>
          <h1 className="home-section__name">{name}</h1>
        </div>
        <div className="home-section__collage">
          {photos.map((src, i) => (
            <div key={i} className={`polaroid polaroid--${i}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import type { AboutSection as AboutSectionType } from "../section_types";
import "../../styles/components/AboutCard.scss";

export function AboutSection(props: AboutSectionType) {
  const { content } = props;

  return (
    <section className="home">
      <div className="home__content">
        <div className="about-card">
          <div className="about-card__container">
            <h2 className="about-card__title">Hi,<br />I’m Pakhi.</h2>
            <div className="about-card__box">
              {content.map((line, index) => {
                // handle the line that needs links manually
                if (index === 3) {
                  return (
                    <p key={index} className="about-card__text">
                      Spiritually, I'm a connoisseur of asking the question "why". Check out my{" "}
                      <Link to="/resume">Resume, </Link>
                      or <Link to="/sidequests">some of the things I do!</Link>
                    </p>
                  );
                }
                return (
                  <p key={index} className="about-card__text">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
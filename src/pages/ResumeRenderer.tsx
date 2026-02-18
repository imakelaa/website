import { resumeData } from "../pages/Data/resume.data";
import "../styles/Resume.scss";

interface Props {
  data: typeof resumeData;
}

export default function ResumeRenderer({ data }: Props) {
  return (
    <main className="resume">
      {/* CONTACT HEADER */}
      <header className="resume__contact">
        <h1 className="resume__name">{data.name}</h1>
        <p className="resume__title">{data.title}</p>

        <div className="resume__links">
          {data.contact.linkedin && (
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {data.contact.github && (
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {data.contact.location && <span>{data.contact.location}</span>}
        </div>
      </header>

      <section className="resume__block">
        <h2 className="resume__section-title">Skills</h2>

        <div className="resume__skills-group">
          <h3>Programming Languages</h3>
          <div className="resume__skills-row">
            {data.skills.languages.map((skill) => (
              <span key={skill} className="resume__skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="resume__skills-group">
          <h3>Frameworks & Libraries</h3>
          <div className="resume__skills-row">
            {data.skills.frameworks.map((skill) => (
              <span key={skill} className="resume__skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="resume__skills-group">
          <h3>Tools & Platforms</h3>
          <div className="resume__skills-row">
            {data.skills.tools.map((skill) => (
              <span key={skill} className="resume__skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="resume__block">
        <h2 className="resume__section-title">Education</h2>

        <div className="resume__card-container">
          {data.education.map((edu, i) => (
            <div key={i} className="resume__card">
              <div className="resume__card-header">
                <strong>{edu.degree}</strong>
                <span className="resume__card-date">{edu.dates}</span>
              </div>
              <div className="resume__card-subtitle">{edu.institution}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume__block">
        <h2 className="resume__section-title">Experience</h2>

        <div className="resume__card-container">
          {data.experience.map((job, i) => (
            <div key={i} className="resume__card">
              <div className="resume__card-header">
                <strong>{job.role}</strong>
                <span className="resume__card-date">{job.dates}</span>
              </div>

              <div className="resume__card-subtitle">{job.company}</div>

              {job.bullets && (
                <ul className="resume__card-list">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

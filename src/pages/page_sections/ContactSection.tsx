import type { ContactSection as ContactSectionType } from "../section_types";

export function ContactSection(props: ContactSectionType) {
  const { name, title, location, links } = props;

  return (
    <header className="resume__contact">
      <h1 className="resume__name">{name}</h1>
      <p className="resume__title">{title}</p>

      <div className="resume__links">
        {links.map((link) => (
          <a key={link.url} href={link.url} target="_blank">
            {link.label}
          </a>
        ))}
        {location && <span>{location}</span>}
      </div>
    </header>
  );
}
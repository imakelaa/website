import { Link } from "react-router-dom";
import type { StyleSection } from "../section_types";
import { HoverNote } from "../../components/HoverNote";
import "./StyleSection.scss";

export function StyleSection({ headline, highlightedWord, body, photo, photoNote, fakeFiles, stickyNoteTitle, checklist, backgroundPhoto }: StyleSection) {
  // Highlight only if a word is given and actually appears in the headline.
  // Splitting at the first match (not .split) keeps an empty word from
  // chopping the headline into single letters.
  const at = highlightedWord ? headline.indexOf(highlightedWord) : -1;
  const before = at >= 0 ? headline.slice(0, at) : headline;
  const after = at >= 0 ? headline.slice(at + highlightedWord!.length) : "";

  return (
    <section className="style-section" style={backgroundPhoto ? { '--bg-url': `url(${backgroundPhoto})` } as React.CSSProperties : undefined}>
      <div className="style-section__inner">

        {/* Left — text */}
        <div className="style-section__left">
          <h2 className="style-section__headline">
            {before}
            {at >= 0 && <span className="highlight style-section__serve">{highlightedWord}</span>}
            {/* <span className="style-section__serve">{highlightedWord}</span> */}
            {after}
          </h2>
          {body.map((p, i) => <p key={i} className="style-section__body">{p}</p>)}
        </div>

        {/* Center — macOS file-preview photo card */}
        {/* The wrapper holds the note: the card itself clips with overflow: hidden,
            which would cut off a note placed inside it. */}
        <div className="style-section__photo-wrap">
          <div className="style-section__photo-card">
            <div className="style-section__photo-bar">life3.png</div>
            {photo
              ? <img src={photo} alt="" className="style-section__photo" />
              : <div className="style-section__photo-placeholder" />}
          </div>
          <HoverNote text={photoNote} />
        </div>

        {/* Right — folders + iOS Notes card */}
        <div className="style-section__sidebar">
          <div className="style-section__files">
            {fakeFiles.map((f, i) => {
              const route = f === "writings" ? "/writings" : f === "photography" ? "/photography" : null;
              return route ? (
                <Link key={i} to={route} className="fake-file fake-file--link">
                  <span className="fake-file__icon">📁</span>
                  <span className="fake-file__label">{f}</span>
                </Link>
              ) : (
                <div key={i} className="fake-file">
                  <span className="fake-file__icon">📁</span>
                  <span className="fake-file__label">{f}</span>
                </div>
              );
            })}
          </div>

          <div className="style-section__note">
            <div className="style-section__note-header">
              <span className="style-section__note-back">&#8249; Notes</span>
              <div className="style-section__note-actions">
                <span>↑</span>
                <span>···</span>
              </div>
            </div>
            <div className="style-section__note-body">
              <div className="style-section__note-title">{stickyNoteTitle}</div>
              <ul className="style-section__checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className={`style-section__check${item.checked ? " style-section__check--done" : ""}`}>
                      {item.checked ? "✓" : "○"}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

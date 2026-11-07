import { useRef, useState } from "react";
import type { HomeSection } from "../section_types";
import { useDraggable } from "../../components/useDraggable";
import { HoverNote } from "../../components/HoverNote";
import "./HomeSection.scss";

interface PolaroidProps {
  src: string;
  index: number;
  note?: string;
  zIndex: number;
  boundsRef: React.RefObject<HTMLElement | null>;
  onGrab: () => void;
}

function Polaroid({ src, index, note, zIndex, boundsRef, onGrab }: PolaroidProps) {
  const { offset, dragging, handlers } = useDraggable(boundsRef, onGrab);

  return (
    <div
      className={`polaroid polaroid--${index}${dragging ? " polaroid--dragging" : ""}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, zIndex }}
      {...handlers}
    >
      <div className="polaroid__frame">
        <img src={src} alt="" draggable={false} />
      </div>
      <HoverNote text={note} />
    </div>
  );
}

export function HomeSection({ greeting, name, photos, stickyNotes }: HomeSection) {
  const sectionRef = useRef<HTMLElement>(null);
  // Photo indices from bottom to top; the last one grabbed goes on top
  const [stack, setStack] = useState(() => photos.map((_, i) => i));
  const bringToFront = (i: number) => setStack((s) => [...s.filter((j) => j !== i), i]);

  return (
    <section className="home-section" ref={sectionRef}>
      <div className="home-section__inner">
        <div className="home-section__text">
          <p className="home-section__greeting">{greeting}</p>
          <h1 className="home-section__name">{name}</h1>
          <HoverNote text={stickyNotes?.intro} />
        </div>
        <div className="home-section__collage">
          {photos.map((src, i) => (
            <Polaroid
              key={i}
              src={src}
              index={i}
              note={stickyNotes?.[`life${i + 1}`]}
              zIndex={stack.indexOf(i) + 1}
              boundsRef={sectionRef}
              onGrab={() => bringToFront(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

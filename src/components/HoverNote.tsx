import "./HoverNote.scss";

// A little sticky note that pops up while its parent element is hovered (or focused).
// Drop it inside any element that has `position: relative/absolute` and no `overflow: hidden`.
export function HoverNote({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <span className="hover-note" role="tooltip">
      {text}
    </span>
  );
}

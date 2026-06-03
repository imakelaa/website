import { Link } from "react-router-dom";
import "./WritingsPage.scss";

// Load all markdown files eagerly so we can extract previews at render time
const markdownFiles = import.meta.glob("../content/writings/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function extractTitle(raw: string): string {
  const line = raw.split("\n").find((l) => l.startsWith("# "));
  return line ? line.replace(/^# /, "").trim() : "";
}

function extractExcerpt(raw: string): string {
  const paragraphs = raw
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter((b) => b && !b.startsWith("#"));
  return paragraphs[0] ?? "";
}

function mdPreview(slug: string) {
  const key = `../content/writings/${slug}.md`;
  const raw = markdownFiles[key];
  if (!raw) return null;
  return { title: extractTitle(raw), excerpt: extractExcerpt(raw) };
}

interface Writing {
  category: string;
  year: string;
  slug?: string;
  url?: string;
  bg?: string;
  image?: string;
  author?: string;
  excerpt?: string;
  title?: string;
}

const writings: Writing[] = [
  {
    category: "Engineering",
    year: "2025",
    url: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/",
    image: "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/3Umt4dEGlo8qRckqLiYpE/f7e9916ea2b3db1fdba936024a9de7f6/BLOG-2990-hero.png",
    author: "Pakhi Sinha",
    title: "Extract audio from your videos with Cloudflare Stream",
    excerpt: "Cloudflare Stream is expanding its capabilities beyond video processing. The platform now enables developers to seamlessly extract audio from videos through a unified system designed to simplify media workflows — because processing entire video files just to access audio is slow, costly, and complex.",
  },
  { category: "Research", year: "2024", slug: "far-memory",      bg: "#e8d5c4" },
  { category: "Essay",    year: "2024", slug: "working-in-tech", bg: "#d4e8d4" },
  { category: "Essay",    year: "2025", slug: "aesthetic",       bg: "#e8c9d4" },
  { category: "Project",  year: "2025", slug: "book-tessera",    bg: "#cdd8e8" },
];

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
            <div className="writings-card__preview writings-card__preview--text" style={{ background: w.bg }}>
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

// Single source of truth for the writing index. Used by /writings and by the
// homepage "Writing" block, so adding a post here updates both.

// Load all markdown files eagerly so we can extract previews at render time
const markdownFiles = import.meta.glob("../../content/writings/*.md", {
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

export function mdPreview(slug: string) {
  const raw = markdownFiles[`../../content/writings/${slug}.md`];
  if (!raw) return null;
  return { title: extractTitle(raw), excerpt: extractExcerpt(raw) };
}

export interface Writing {
  category: string;
  year: string;
  slug?: string;
  url?: string;
  image?: string;
  author?: string;
  excerpt?: string;
  title?: string;
  /** Shorter title for compact lists (e.g. the homepage Writing block) */
  shortTitle?: string;
}

export const writings: Writing[] = [
  {
    category: "Engineering",
    year: "2025",
    url: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/",
    image: "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/3Umt4dEGlo8qRckqLiYpE/f7e9916ea2b3db1fdba936024a9de7f6/BLOG-2990-hero.png",
    author: "Pakhi Sinha",
    title: "Extract audio from your videos with Cloudflare Stream",
    shortTitle: "Extract audio from your videos",
    excerpt: "Cloudflare Stream is expanding its capabilities beyond video processing. The platform now enables developers to seamlessly extract audio from videos through a unified system designed to simplify media workflows — because processing entire video files just to access audio is slow, costly, and complex.",
  },
  { category: "Engineering Dive Blog", year: "2026", slug: "telephoto" },
  // { category: "Essay",    year: "2024", slug: "working-in-tech" },
  // { category: "Essay",    year: "2025", slug: "aesthetic" },
  { category: "Project",  year: "2024", slug: "book-tessera" },
];

/** Resolved title/excerpt/href for a writing, falling back to its markdown file. */
export function resolveWriting(w: Writing) {
  const md = w.slug ? mdPreview(w.slug) : null;
  const title = w.title ?? md?.title ?? "";
  return {
    title,
    shortTitle: w.shortTitle ?? title,
    excerpt: w.excerpt ?? md?.excerpt ?? "",
    href: w.url ?? (w.slug ? `/writings/${w.slug}` : undefined),
  };
}

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./WritingPostPage.scss";

const markdownFiles = import.meta.glob("../content/writings/*.md", {
  query: "?raw",
  import: "default",
});

function extractSections(raw: string): string[] {
  return raw
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", "").trim());
}

function extractTitle(raw: string): string {
  const line = raw.split("\n").find((l) => l.startsWith("# "));
  return line ? line.replace("# ", "").trim() : "";
}

export default function WritingPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const key = `../content/writings/${slug}.md`;
    const loader = markdownFiles[key];
    if (!loader) {
      navigate("/writings", { replace: true });
      return;
    }
    loader().then((raw) => setContent(raw as string));
  }, [slug, navigate]);

  if (!content) return null;

  const title = extractTitle(content);
  const sections = extractSections(content);
  // Strip the H1 from the rendered markdown
  const body = content.replace(/^# .+\n?/, "");

  return (
    <div className="writing-post">
      <h1 className="writing-post__title">{title}</h1>
      <div className="writing-post__layout">
        <aside className="writing-post__sidebar">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className="writing-post__section-label">
              {s}
            </a>
          ))}
        </aside>
        <article className="writing-post__body">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 id={String(children).toLowerCase()} className="writing-post__h2">
                  {children}
                </h2>
              ),
            }}
          >
            {body}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

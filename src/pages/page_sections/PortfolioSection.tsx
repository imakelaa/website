import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import type {
  PortfolioSection as PortfolioSectionProps,
  PortfolioBlock,
  PortfolioLink,
  PortfolioVisual as Visual,
} from "../section_types";
import { writings, resolveWriting } from "../Data/writings.data";
import "./PortfolioSection.scss";

const pad = (n: number) => String(n).padStart(2, "0");

// ── Links: in-site page routes use <Link>; external URLs and files
// (e.g. /slides/x.pdf from public/) are plain <a> tags opening a new tab ──
const isRoute = (href: string) => href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

function SmartLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return isRoute(href)
    ? <Link to={href} className={className}>{children}</Link>
    : <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

// Button order rule: [feature] [blog]; links without a kind sit in between.
const LINK_ORDER = { feature: 0, undefined: 1, blog: 2 } as const;
const sortLinks = (links: PortfolioLink[]) =>
  [...links].sort((a, b) => LINK_ORDER[a.kind ?? "undefined"] - LINK_ORDER[b.kind ?? "undefined"]);

function BlockLink({ link, index }: { link: PortfolioLink; index: number }) {
  const style = link.style ?? (index === 0 ? "primary" : "dark");
  return (
    <SmartLink href={link.href} className={`portfolio-btn portfolio-btn--${style}`}>
      {link.label} <span aria-hidden="true">↗</span>
    </SmartLink>
  );
}

// ── Illustrations ───────────────────────────────────────────────
function PortfolioVisual({ visual }: { visual: Visual }) {
  switch (visual.kind) {
    case "image":
      return <img className="pv-image" src={visual.src} alt={visual.alt} loading="lazy" />;

    case "logo":
      return <div className="pv-panel pv-logo"><img src={visual.src} alt={visual.alt} loading="lazy" /></div>;

    case "placeholder":
      return <div className="pv-placeholder"><span>[ {visual.label} ]</span></div>;

    case "badge":
      return (
        <div className="pv-badge">
          {visual.src && <img className="pv-badge__img" src={visual.src} alt={`${visual.title} preview`} loading="lazy" />}
          {["tl", "tr", "bl", "br"].map(c => <span key={c} className={`pv-badge__corner pv-badge__corner--${c}`} />)}
          {!visual.src && <div className="pv-badge__ring">
            <span className="pv-badge__title">{visual.title}</span>
            {visual.caption && <span className="pv-badge__caption">{visual.caption}</span>}
          </div>}
        </div>
      );

    case "bars": {
      const max = Math.max(...visual.series.flatMap(s => s.values));
      return (
        <div className="pv-panel pv-bars">
          {visual.series.map(s => (
            <div key={s.label} className="pv-bars__row">
              <span className="pv-label">{s.label}</span>
              <div className="pv-bars__plot">
                {s.values.map((v, i) => (
                  <span key={i} className={`pv-bars__bar pv-fill--${s.color ?? "dark"}`} style={{ height: `${(v / max) * 100}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "meter": {
      const { max = 1, unit = "" } = visual;
      return (
        <div className="pv-panel pv-meter">
          {visual.caption && <span className="pv-label pv-meter__caption">{visual.caption}</span>}
          {visual.rows.map(r => (
            <div key={r.label} className="pv-meter__row">
              <span className="pv-label">{r.label}</span>
              <div className="pv-meter__track">
                <span className={`pv-meter__fill pv-fill--${r.color ?? "dark"}`} style={{ width: `${Math.min(1, r.value / max) * 100}%` }} />
              </div>
              {visual.showValues && <span className="pv-label pv-meter__value">{r.value}{unit}</span>}
            </div>
          ))}
        </div>
      );
    }

    case "clusters":
      return (
        <div className="pv-panel pv-clusters">
          {visual.groups.map(g => (
            <div key={g.label} className="pv-clusters__group">
              <div className="pv-clusters__dots">
                {Array.from({ length: g.count }, (_, i) => <span key={i} className={`pv-fill--${g.color ?? "dark"}`} />)}
              </div>
              <span className="pv-label">{g.label}</span>
            </div>
          ))}
        </div>
      );

    case "gallery":
      return (
        <div className="pv-gallery">
          {visual.items.map((item, i) => (
            <div key={i} className="pv-gallery__tile">
              {item.src && <img src={item.src} alt={item.label} loading="lazy" />}
            </div>
          ))}
        </div>
      );

    case "writings":
      return (
        <ul className="pv-writings">
          {writings.slice(0, visual.limit).map((w, i) => {
            const { shortTitle, href } = resolveWriting(w);
            const title = !href ? shortTitle
              : isRoute(href) ? <Link to={href}>{shortTitle}</Link>
              : <a href={href} target="_blank" rel="noreferrer">{shortTitle}</a>;
            return (
              <li key={i}>
                <span className="pv-writings__title">{title}</span>
                <span className="pv-meta">{w.category.toLowerCase()} · {w.year}</span>
              </li>
            );
          })}
        </ul>
      );
  }
}

// ── One block ───────────────────────────────────────────────────
function Block({ block, dimmed }: { block: PortfolioBlock; dimmed: boolean }) {
  return (
    <article className={`portfolio-block portfolio-block--${block.size ?? "sm"}${block.href ? " is-linked" : ""}${block.compact ? " is-compact" : ""}${dimmed ? " is-dimmed" : ""}`}>
      {(block.title || block.date) && (
        <header className="portfolio-block__header">
          {/* With an href, the title link's ::after stretches over the whole card
              (see .portfolio-block__cover), making the block clickable without
              nesting the buttons inside another <a>. */}
          {block.title && (block.href
            ? <SmartLink href={block.href} className="portfolio-block__title portfolio-block__cover">{block.title}</SmartLink>
            : <span className="portfolio-block__title">{block.title}</span>)}
          {block.date && <span className="pv-meta">{block.date}</span>}
        </header>
      )}
      <div className="portfolio-block__body">
        {block.visual && (
          <div className="portfolio-block__visual">
            {[block.visual].flat().map((v, i) => <PortfolioVisual key={i} visual={v} />)}
          </div>
        )}
        {typeof block.description === "string" && <p className="portfolio-block__desc">{block.description}</p>}
        {Array.isArray(block.description) && (
          <div className="portfolio-block__desc">
            {block.description.map(d => <p key={d.label}><strong>{d.label}:</strong> {d.text}</p>)}
          </div>
        )}
        {block.links?.length ? (
          <div className="portfolio-block__links">
            {sortLinks(block.links).map((l, i) => <BlockLink key={l.href} link={l} index={i} />)}
          </div>
        ) : null}
      </div>
    </article>
  );
}

// ── Section ─────────────────────────────────────────────────────
export function PortfolioSection({ headline = "Work", roles, blocks, prompt }: PortfolioSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="portfolio-section">
      <div className="portfolio-section__inner">
        <h2 className="portfolio-section__headline">
          {headline}
        </h2>

        <div className="portfolio-section__chips" role="group" aria-label="Filter work by role">
          {roles.map((r, i) => (
            <button
              key={r.id}
              type="button"
              className={`portfolio-chip${activeId === r.id ? " is-active" : ""}`}
              aria-pressed={activeId === r.id}
              onClick={() => setActiveId(cur => (cur === r.id ? null : r.id))}
            >
              <span className="portfolio-chip__num">{pad(i + 1)}</span>
              {r.label}
            </button>
          ))}
        </div>

        {prompt && <p className="portfolio-section__prompt">{prompt}</p>}

        <div className="portfolio-section__grid">
          {blocks.map(b => (
            <Block
              key={b.id}
              block={b}
              dimmed={!!activeId && !b.roles.includes(activeId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

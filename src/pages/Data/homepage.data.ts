import type { PageConfig } from "../page_types";
// import sampleImage from "../../assets/sample-image.webp";
import introImage from "../../assets/intro-img.webp";
import introImage2 from "../../assets/intro-img2.webp";
// import bgRoles from "../../assets/BG.jpg";
import kayak from "../../assets/kayak.webp";
import telephotoPreview from "../../assets/telephoto-preview.jpg";

export const homePage: PageConfig = {
  title: "Home",
  layout: {
    showBackLink: false,
    showPageTitle: false,
  },
  sections: [
    {
      type: "home",
      greeting: "Meet",
      name: "Pakhi",
      photos: [introImage2, introImage],
      stickyNotes: {
        intro: "Hi :)!",
        life1: "Draggable polaroids.",
        life2: "Wanted to make this website scrapbook-ish.",
      },
    },
    {
      type: "style",
      headline: "Building things that matter",
      highlightedWord: "matter",
      body: [
        "Creativity and authenticity are super important to me.",
        "I spend a lot of time learning and trying new things. Whether it's conceptualizing apps, or just expressing myself.",
        "I learn by building, testing, and occasionally breaking things in interesting ways. This site is also a snapshot of that process.",
      ],
      photo: kayak,
      fakeFiles: ["photography", "writings"],
      stickyNoteTitle: "This year, it was...",
      checklist: [
        // { text: "confidence", checked: true },
        { text: "reaching out", checked: true },
        { text: "trying new things", checked: true },
        { text: "build a cyberdeck", checked: false },
      ],
    },
    {
      type: "portfolio",
      prompt: "A few windows into what I'm building, researching, making and writing.",
      // Order sets the numbers: engineer = 01, researcher = 02, …
      roles: [
        { id: "engineer",   label: "software engineer" },
        { id: "researcher", label: "researcher" },
        { id: "artist",     label: "artist" },
        { id: "writer",     label: "writer" },
      ],
      // Add new work here — each entry renders as one block, in this order.
      blocks: [
        {
          id: "cloudflare",
          title: "Cloudflare Stream — Audio Mode",
          roles: ["engineer", "writer"],
          date: "2025",
          size: "lg",
          href: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/",
          visual: {
            kind: "image",
            src: "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/3Umt4dEGlo8qRckqLiYpE/f7e9916ea2b3db1fdba936024a9de7f6/BLOG-2990-hero.png",
            alt: "Cloudflare Stream audio extraction blog header",
          },
          description: "Shipped audio-only mode for Cloudflare Stream: Go/TypeScript API endpoints, a React UI, monitoring with Kibana, Grafana and Prometheus.",
          links: [
            { label: "read the blog", kind: "blog", href: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/" },
            { label: "see the feature", kind: "feature", href: "https://www.cloudflare.com/products/cloudflare-stream/" },
          ],
        },
        {
          id: "telephoto",
          title: "Telephoto",
          roles: ["engineer", "writer"],
          date: "2026",
          size: "md",
          href: "https://telephoto.pasinha.workers.dev/",
          visual: { kind: "badge", title: "Telephoto", caption: "working on it", src: telephotoPreview },
          description: "A Photobooth-inspired web app. Engineering dive blog in progress.",
          links: [
            { label: "try the app", kind: "feature", href: "https://telephoto.pasinha.workers.dev/" },
            { label: "engineering dive blog", kind: "blog", href: "/writings/telephoto" },
          ],
        },
        {
          id: "vpn-thesis",
          title: "Is Your VPN Getting You Blocked?",
          roles: ["researcher"],
          date: "2026",
          visual: {
            kind: "bars",
            series: [
              { label: "direct",  values: [3, 9, 5, 10, 4, 8, 2, 9, 6, 10, 3, 7, 9, 4, 8, 10, 5, 9, 3, 8, 6, 10, 4, 9], color: "dark" },
              { label: "via VPN", values: [7, 7, 8, 7, 7, 8, 7, 7, 7, 8, 8, 7, 7, 8, 7, 7, 8, 7, 7, 7, 8, 7, 7, 8], color: "purple" },
            ],
          },
          description: "MS thesis at UC Santa Cruz: website fingerprinting attacks, evaluated through VPNs.",
          links: [{ label: "slides", kind: "feature", href: "/slides/vpn-thesis.pdf" }],
        },
        {
          id: "far-memory",
          title: "Study on Far Memory",
          roles: ["researcher"],
          date: "2025",
          visual: {
            kind: "meter",
            rows: [
              { label: "local access", value: 0.3,  color: "dark" },
              { label: "remote fetch", value: 1,    color: "purple" },
            ],
          },
          description: "Benchmarked AIFM on CloudLab xl170 nodes: remote fetch vs. local access.",
          links: [
            { label: "blog post", kind: "blog", href: "/writings/far-memory" },
            { label: "paper", kind: "feature", href: "https://www.usenix.org/system/files/osdi20-ruan.pdf" },
          ],
        },
        {
          id: "booktessera",
          title: "BookTessera",
          roles: ["engineer"],
          date: "2024",
          visual: {
            kind: "clusters",
            groups: [
              { label: "cluster 1", count: 3, color: "dark" },
              { label: "cluster 2", count: 2, color: "purple" },
              { label: "cluster 3", count: 3, color: "yellow" },
            ],
          },
          description: "Concert ticketing in React + Flask, with a K-Means priority queue.",
          links: [{ label: "read the post", kind: "blog", href: "/writings/book-tessera" }],
        },
        {
          id: "contact-sheet",
          title: "Contact sheet",
          roles: ["artist"],
          size: "lg",
          visual: {
            kind: "gallery",
            // add `src: someImport` to any item to replace the striped placeholder
            items: [{ label: "photo" }, { label: "collage" }, { label: "gouache" }, { label: "chalk" }],
          },
          description: "Collage, photography, painting in gouache, acrylics and chalk.",
          links: [{ label: "photography", href: "/photography", style: "dark" }],
        },
        {
          id: "writing",
          title: "Writing",
          roles: ["writer"],
          size: "md",
          visual: { kind: "writings" }, // pulls from Data/writings.data.ts
          links: [{ label: "all writing", href: "/writings", style: "dark" }],
        },
      ],
    },
    {
      type: "footer",
      linkedinUrl: "https://www.linkedin.com/in/pakhi-sinha-/",
      sections: ["home", "resume", "sidequests"],
      tagline: "Driven by curiosity :)",
      name: "pakhi sinha",
    },
  ],
};

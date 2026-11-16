import type { PageConfig } from "../page_types";
// import sampleImage from "../../assets/sample-image.webp";
import introImage from "../../assets/landing-page/intro-img.webp";
import introImage2 from "../../assets/landing-page/intro-img2.webp";
import kayak from "../../assets/landing-page/kayak.webp";
import telephotoPreview from "../../assets/landing-page/work-section/telephoto-preview.jpg";
import bookTesseraLogo from "../../assets/landing-page/work-section/booktessera-logo.png";
import torDiagram from "../../assets/landing-page/work-section/tor-diagram.png";
import photo6 from "../../assets/photography/photography-uploads/img6.webp";
import photo9 from "../../assets/photography/photography-uploads/imh9.webp";
import photo4 from "../../assets/photography/photography-uploads/img4.webp";
import photo2 from "../../assets/photography/photography-uploads/img2.webp";

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
            { label: "engineering dive [blog]", kind: "blog", href: "/writings/telephoto" },
          ],
        },
        {
          id: "vpn-thesis",
          title: "Is Your VPN Getting You Blocked?",
          roles: ["researcher"],
          size: "sm",
          date: "2026",
          visual: [
            // Single-pipeline result (thesis slide 13): share of the Tranco top 10K
            // blocked only when going through each VPN.
            {
              kind: "meter",
              caption: "top 10K sites that blocked the VPN",
              max: 1.59, unit: "%", showValues: true,
              rows: [
                { label: "nordvpn",   value: 1.59, color: "dark" },
                { label: "surfshark", value: 0.42, color: "purple" },
              ],
            },
            // Overlap of 200→403 blocked domains (thesis slide 9): few sites blocked both,
            // so blocking tracks the specific exit rather than "being a VPN".
            {
              kind: "meter",
              caption: "sites that blocked…",
              max: 95, showValues: true,
              rows: [
                { label: "nord only", value: 95, color: "dark" },
                { label: "surf only", value: 17, color: "purple" },
                { label: "both",      value: 16, color: "yellow" },
              ],
            },
          ],
          description: [
            { label: "Problem",  text: "Websites may block VPN users. An investigation into VPN providers and the networks they use." },
            { label: "Findings", text: "Based on the scope of my investigation, the exit server you land on might matter. Additionally, found overlapping infrastructure between the (2) VPN providers." },
          ],
          links: [{ label: "slides", kind: "feature", href: "/slides/vpn-thesis.pdf" }],
        },
        {
          id: "wf-defense",
          title: "Defending Website Fingerprinting Attacks using Adversarial ML",
          roles: ["researcher"],
          date: "2025",
          visual: [
            { kind: "logo", src: torDiagram, alt: "Tor circuit: user → entry guard → middle relay → exit node, with an attacker watching the first hop" },
            // DF top-1 accuracy from the report's key findings (6.8):
            // ≈98% undefended → 0.45 with Mockingbird (0.45–0.60 depending on caps) → back to 0.80 after retraining.
            {
              kind: "meter",
              caption: "DF attacker accuracy",
              max: 100, unit: "%", showValues: true,
              rows: [
                { label: "undefended",  value: 98, color: "dark" },
                { label: "mockingbird", value: 45, color: "purple" },
                { label: "retrained",   value: 80, color: "yellow" },
              ],
            },
          ],
          description: [
            { label: "Problem",  text: "Tor protects your identity, but AI models can still guess which sites you visit from traffic patterns." },
            { label: "Findings", text: "Attacks guessed right 98% of the time. Defense models cut that to 45%. Retraining improved accuracy back to 80%." },
            { label: "Note", text: "We did not build these models from scratch. Simply, studied, evaluated, and adopted models developed by researchers."}
          ],
          links: [{ label: "find out more", kind: "blog", href: "/writings/wf-defense" }],
        },
        {
          id: "booktessera",
          title: "BookTessera",
          roles: ["engineer"],
          size: "sm",
          compact: true,
          date: "2024",
          visual: { kind: "logo", src: bookTesseraLogo, alt: "BookTessera logo" },
          description: [
            { label: "Problem",    text: "Buying tickets for popular concerts is chaotic and feels unfair." },
            { label: "Proposed Soln",   text: "Solving first-come, first-served with a time-based queue that allocates tickets within desired zone." },
            { label: "Tech stack", text: "React, Python, Flask, K-Means clustering." },
            { label: "Collaborators", text: "Shreya Sundar, Naimisha Daripineni, Alex Furlong, Sophie Hernandez." },
          ],
          links: [
            { label: "slides", kind: "feature", href: "/slides/BT.pdf" },
          ],
        },
        {
          id: "contact-sheet",
          roles: ["artist"],
          size: "lg",
          visual: {
            kind: "gallery",
            // tiles render in this order; `label` is alt text only
            items: [
              { label: "Photo 6", src: photo6 },
              { label: "Photo 9", src: photo9 },
              { label: "Photo 4", src: photo4 },
              { label: "Photo 2", src: photo2 },
            ],
          },
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
      sections: [
        { label: "home", href: "/" },
        { label: "resume", href: "https://drive.google.com/file/d/1ml3ep4_F_veIqSVG771ucRiHMBmTcKoY/view?usp=sharing" },
      ],
      tagline: "Driven by curiosity :)",
      name: "pakhi sinha",
    },
  ],
};

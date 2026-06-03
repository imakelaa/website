import type { PageConfig } from "../page_types";
// import sampleImage from "../../assets/sample-image.webp";
import introImage from "../../assets/intro-img.webp";
import introImage2 from "../../assets/intro-img2.webp";
import bgRoles from "../../assets/bg.webp";
import bgStyle from "../../assets/bg3.webp";
import kayak from "../../assets/kayak.webp";

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
    },
    {
      type: "roles",
      backgroundPhoto: bgRoles,
      roles: [
        {
          id: "engineer",
          label: "Software Engineer",
          bullets: [
            "building what makes life easier",
            "Go, TypeScript, Python, and more",
            "loves a good config. trying to be tmux and vim proficient :)",
          ],
        },
        {
          id: "researcher",
          label: "Researcher",
          bullets: [
            "MS in Computer Science, UC Santa Cruz",
            "Thesis: Website Fingerprinting Attacks evaluated through VPNs",
            "interested in ml, networks, systems, security, and privacy",
            "lots of media work previously, VR, video, audio, FFmpeg, you name it",
          ],
        },
        {
          id: "artist",
          label: "Artist",
          bullets: [
            "collage and photography",
            "painting (gouache, acrylics, chalk) ",
            "visual thinker",
          ],
        },
        {
          id: "writer",
          label: "Writer",
          bullets: [
            "published on the Cloudflare Blog!",
            "technical writing, philosophy, and media",
            { text: "check out my writings ", href: "/writings", linkText: "here" },
          ],
        },
      ],
    },
    {
      type: "work",
      headline: "Read about some work I've done",
      highlightedWord: "some work",
      cards: [
        {
          id: "cloudflare",
          title: "Cloudflare Stream — Audio Mode",
          bullets: [
            "Introduced audio-only mode to Cloudflare Stream",
            "API endpoints in Go/Typescript, React UI",
            "Monitoring with Kibana, Grafana, Prometheus",
          ],
          blogUrl: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/",
          featureUrl: "https://www.cloudflare.com/products/cloudflare-stream/",
        },
        {
          id: "booktessera",
          title: "BookTessera",
          bullets: [
            "Ticketing platform for concerts and events",
            "React + Flask full-stack app",
            "Time-based priority queue with K-Means clustering",
            "Tradeoffs between strict ordering and user experience",
          ],
          postUrl: "/writings/book-tessera",
          postLabel: "read my annoyingly detailed blog post!",
        },
        {
          id: "far-memory",
          title: "Study on Far Memory",
          bullets: [
            "Analyzed AIFM (Application-Integrated Far Memory)",
            "Deployed + benchmarked xl170 instances on CloudLab",
            "Quantified latency/throughput of remote memory fetch vs local access",
          ],
          featureUrl: "https://www.usenix.org/system/files/osdi20-ruan.pdf",
          featureLabel: "link to paper (not mine, but I promise it's good!)",
          postUrl: "/writings/far-memory",
          postLabel: "blog post :)!",
        },
      ],
    },
    {
      type: "style",
      backgroundPhoto: bgStyle,
      headline: "Building things that matter",
      highlightedWord: "matter",
      body: [
        "Creativity and authenticity is super important to me.",
        "I spend a lot of time learning and trying new things. Whether it's conceptualizing apps, or just expressing myself.",
        "I learn by building, testing, and occasionally breaking things in interesting ways. This site is a snapshot of that process.",
      ],
      photo: kayak,
      fakeFiles: ["photography", "writings"],
      stickyNoteTitle: "This year, it was...",
      checklist: [
        // { text: "confidence", checked: true },
        { text: "reaching out", checked: true },
        // { text: "plans turning into memories", checked: true },
        // { text: "showing up for myself", checked: true },
        { text: "trying new things", checked: true },
        { text: "build a cyberdeck", checked: false },
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

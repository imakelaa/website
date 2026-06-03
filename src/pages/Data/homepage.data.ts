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
            "backend systems in Go + TypeScript",
            "built infra at Cloudflare",
            "loves a good config",
          ],
        },
        {
          id: "researcher",
          label: "Researcher",
          bullets: [
            "MS in Computer Science, UC Santa Cruz",
            "studied far-memory systems",
            "curious about how things work",
          ],
        },
        {
          id: "artist",
          label: "Artist",
          bullets: [
            "collage and photography",
            "moodboards > planners",
            "the aesthetic matters",
          ],
        },
        {
          id: "writer",
          label: "Writer",
          bullets: [
            "published on the Cloudflare Blog",
            "working on more",
            "words should feel like something",
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
            "Built in Go + TypeScript",
            "Monitored with Kibana, Grafana, Prometheus",
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
          ],
          postUrl: "/writings/book-tessera",
          postLabel: "read my annoyingly detailed blog post!",
        },
        {
          id: "far-memory",
          title: "Study on Far Memory",
          bullets: [
            "Analyzed AIFM (Application-Integrated Far Memory)",
            "Ran xl170 instances on CloudLab",
            "Tested fetch cost from far-memory",
          ],
          featureUrl: "https://www.usenix.org/system/files/osdi20-ruan.pdf",
          featureLabel: "link to paper",
          postUrl: "/writings/far-memory",
          postLabel: "blog post :)!",
        },
      ],
    },
    {
      type: "style",
      backgroundPhoto: bgStyle,
      headline: "practice the serve",
      highlightedWord: "serve",
      body: [
        "stand like you belong in the room. walk like you're late to something important. post the photo. wear the outfit. speak first.",
        "fake it until it feels familiar.",
      ],
      photo: kayak,
      fakeFiles: ["photography", "writings"],
      stickyNoteTitle: "This year, it was...",
      checklist: [
        { text: "confidence", checked: true },
        { text: "speaking out", checked: true },
        { text: "plans turning into memories", checked: true },
        { text: "showing up for myself", checked: true },
        { text: "wearing what feels like me", checked: true },
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

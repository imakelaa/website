import type { PageConfig } from "../page_types";
import CfLogo from "../../assets/CFLogo.webp";
import BtLogo from "../../assets/BTlogo.png";
import sampleImage from "../../assets/sample-image.webp";

export const homePage: PageConfig = {
  title: "Home",
  layout: {
    showBackLink: false,
    showPageTitle: false,
  },
  sections: [
    {
      type: "about",
      content: [
        "I'm a Software Engineer looking for my next role. I'm currently pursuing my Masters in Computer Science at UC Santa Cruz, where I also completed my Bachelors.",
        "My primary focus lies in backend. I have experience building complex end-to-end systems in C, TypeScript, and Go. In my free time, you'll often find me tinkering with my setup (just started tmux + nvim, so really into configs at the moment) or trying to break my own programs :).",
        "Check out some of my Projects below.",
      ],
    },
    {
      type: "projects",
      title: "Projects",
      projects: [
        {
          id: "cloudflare",
          title: "Cloudflare",
          image: CfLogo,
          description: [
            {
              text: "Worked on Cloudflare Stream and introduced Audio-only mode."
            },
            {
              text: "Wrote for the Cloudflare Blog — read it here:",
              link: {
                label: "Extract audio from your videos with Cloudflare Stream",
                url: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/"
              }
            },
            {
              text: "Learn more about Cloudflare Stream:",
              link: {
                label: "Cloudflare Stream Product Page",
                url: "https://www.cloudflare.com/products/cloudflare-stream/"
              }
            }
          ],
        },
        {
          id: "booktessera",
          title: "BookTessera",
          image: BtLogo,
          description: [
            {
              text: "Ticketing platform for concerts, events, and more."
            },
            {
              text: "Full-stack app using React + Material UI (frontend) and Flask (REST backend)."
            },
            {
              text: "Designed a time-based priority queue in Python utilizing K-Means clustering for seat allocation."
            }
          ],
        },
        {
          id: "http-server",
          title: "Multithreaded HTTP Server",
          image: sampleImage,
          description: [
            {
              text: "Implemented a multithreaded HTTP/1.1 server in C supporting GET and PUT requests."
            },
            {
              text: "Designed a producer-consumer request pipeline using a synchronized queue."
            },
            {
              text: "Built a custom hashmap-based caching subsystem with Reader-Writer locks."
            }
          ],
        },
      ],
    },
  ],
};
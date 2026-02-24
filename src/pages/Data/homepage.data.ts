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
        "Professionally, I'm a Software Engineer. I'm currently pursuing my Masters in Computer Science at UC Santa Cruz, where I also completed my Bachelors.",
        "My primary focus lies in backend. I have experience building complex end-to-end systems in C, TypeScript, and Go. In my free time, you'll often find me tinkering with my setup (just started tmux + nvim, so really into configs at the moment) or trying to break my own programs :).",
        "Spiritually, I'm a connoisseur of asking the question 'why'. Check out my Resume or some of the things I do!",
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
            "I worked on Cloudflare Stream and introduced Audio-only mode.",
            "Read more about Cloudflare Stream at https://www.cloudflare.com/products/cloudflare-stream/",
          ],
        },
        {
          id: "booktessera",
          title: "BookTessera",
          image: BtLogo,
          description: [
            "BookTessera is a platform focused on organizing and discovering books in a more visual and modular way.",
            "Built with a full-stack architecture, emphasizing clean API design and maintainable backend systems.",
          ],
        },
        {
          id: "http-server",
          title: "Multithreaded HTTP Server",
          image: sampleImage,
          description: [
            "A high-performance HTTP server built from scratch with multithreading support.",
            "Designed to handle concurrent client requests efficiently using thread pools and low-level networking primitives.",
          ],
        },
      ],
    },
  ],
};
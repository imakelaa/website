import type { PageConfig } from "../page_types";
import CfLogo from "../../assets/CFLogo.webp";
import BtLogo from "../../assets/BTlogo.png";
import sampleImage from "../../assets/sample-image.webp";
import aifm from "../../assets/aifm.png"

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
              text: "Learned lot of new stuff! Worked in Go, Typescript. Used tools like Kibana, Grafana, Prometheus."
            },
            {
              text: "Wrote for the Cloudflare Blog — read it here:",
              link: {
                label: "Extract audio from your videos with Cloudflare Stream.",
                url: "https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/"
              }
            },
            {
              text: "Learn more about Cloudflare Stream:",
              link: {
                label: "Cloudflare Stream Product Page.",
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
        {
          id: "Far-Memory",
          title: "Study on Far Memory",
          image: aifm,
          description: [
            {
              text: "Far memory is a method of using another system's memory."
            },
            [
              {
                text: "Analyzed",
                link: {
                  label: "Application-Integrated Far Memory (AIFM).",
                  url: "https://www.usenix.org/system/files/osdi20-ruan.pdf"
                }
              },
            ],
            [
              {
                text: "Utilized",
                link: {
                  label: "CloudLab.",
                  url: "https://www.cloudlab.us/"
                }
              },
              {
                text: "Set up xl170 instances across a memory and compute node."
              },
            ],
            {
              text: "Testing the efficiency of AIFM involved creating load intensive C++ programs. The goal was to test AIFM's ability to almost cache memory appropriately, and test the cost of fetching from far-memory."
            }
          ],
        },
        // {
        //   id: "Branch-Predictor-Gem5",
        //   title: "Perceptron-based Branch Predictor in Gem5",
        //   image: aifm,
        //   description: []
        // },
        // add more here
      ],
    },
  ],
};
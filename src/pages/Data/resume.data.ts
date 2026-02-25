import { type PageConfig } from "../page_types";

export const resumeData: PageConfig = {
  title: "Resume",
  layout: {
    showBackLink: false,
    showPageTitle: false,
  },
  sections: [
    {
      type: "contact",
      name: "Pakhi Sinha",
      title: "Software Developer",
      location: "CA",
      links: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/pakhi-sinha-535629238/",
        },
        {
          label: "GitHub",
          url: "https://github.com/imakelaa",
        },
      ],
    },
    {
      type: "skills",
      title: "Skills",
      groups: [
        {
          label: "Programming Languages",
          items: ["Python", "C/C++", "Go", "TypeScript", "JavaScript"],
        },
        {
          label: "Frameworks & Libraries",
          items: ["React", "Node.js", "Express", "PyTorch", "Keras", "Tensorflow", "NumPy", "Pandas"],
        },
        {
          label: "Tools & Platforms",
          items: ["Git", "Docker", "PostgreSQL", "Linux", "Docker", "Kubernetes", "CUDA", "Figma"],
        },
      ],
    },
    {
      type: "timeline",
      title: "Education",
      variant: "education",
      items: [
        {
          id: "ms-ucsc",
          title: "M.S. Computer Science",
          subtitle: {text: "University of California, Santa Cruz"},
          date: "2024 – 2026",
        },
        {
          id: "bs-ucsc",
          title: "B.Sc. Computer Science",
          subtitle: {text: "University of California, Santa Cruz"},
          date: "2021 – 2024",
        },
      ],
    },
    {
      type: "timeline",
      title: "Experience",
      variant: "experience",
      items: [
        {
          id: "role-1",
          title: "Software Engineering Intern",
          subtitle: {
            text: "",
            link: {
              label: "Cloudflare",
              url: "https://www.cloudflare.com/",
            },
          },
          date: "June 2025 - September 2025",
          bullets: [
            { text: "Launched Audio-Only Mode for Cloudflare Stream (VoD), driving 14K+ audio transformations in 3 weeks and 37K+ downloads in 2 weeks post-release." },
            { text: "Architected dedicated audio encoding pipeline (Go + FFmpeg) and TypeScript distributed job queue with resource isolation, reducing latency and preventing queue bottlenecks." },
            { text: "Built idempotent SQL-backed REST APIs and implemented SLI-driven observability (Grafana/Kibana), improving system reliability and reducing MTTR." },
          ],
        },
        {
          id: "role-2",
          title: "Graduate Teaching Assistant",
          subtitle: {
            text: "",
            link: {
              label: "Baskin Engineering",
              url: "https://engineering.ucsc.edu/",
            },
          },
          date: "September 2024 - Present",
          bullets: [
            { text: "Mentor 300+ students on systems debugging and performance optimization using GDB and Valgrind." },
            { text: "Guide diagnosis of deadlocks, race conditions, and memory leaks, reinforcing real-world reliability and security principles." },
            { text: "Translate complex low-level systems concepts into clear, production-oriented mental models." },
          ],
        },
        {
          id: "role-3",
          title: "Research Assistant",
          subtitle: [
            {
              text: "",
              link: {
                label: "Computational & Experimental Cognition Lab",
                url: "https://ceclab.sites.ucsc.edu/",
              },
            },
            {
              text: " · UC Santa Cruz",
            },
          ],
          date: "August 2023 - August 2024",
          bullets: [
            { text: "Developed multimodal PyTorch model to classify speaker intent (audio + visual), improving experimental classification accuracy." },
            { text: "Performed K-Fold cross-validation and hyperparameter tuning; applied SHAP to interpret model feature contributions." },
            { text: "Engineered scalable preprocessing pipeline with Pandas, improving training data quality and iteration speed." },
          ],
        },
        {
          id: "role-4",
          title: "Research Assistant",
          subtitle: [
            {
              text: "",
              link: {
                label: "Social & Emotional Technology Lab",
                url: "https://setlab.soe.ucsc.edu/",
              },
            },
            {
              text: " · UC Santa Cruz",
            },
          ],
          date: "November 2022 - June 2023",
          bullets: [
            { text: "Developed browser-based WebXR applications using Three.js, delivering seamless immersive experiences without native installs." },
            { text: "Collaborated cross-functionally to integrate real-world pass-through features in VR using Meta Quest Developer Hub, enhancing interaction fidelity." },
            { text: "Optimized performance and deployment workflows to ensure reliable cross-device XR experiences." },
          ],
        },
        {
          id: "role-5",
          title: "Software Developer (PET Data Visualization)",
          subtitle: [
            {
              text: "",
              link: {
                label: "Radiological Instrumentation Lab",
                url: "https://ril.soe.ucsc.edu/",
              },
            },
            {
              text: " · UC Santa Cruz",
            },
          ],
          date: "October 2022 - January 2023",
          bullets: [
            { text: "Co-developed cross-platform Python GUI to visualize PET system data and update DAC configurations, supporting biomedical imaging research." },
            { text: "Evaluated and integrated UI frameworks to implement advanced features (dynamic pop-ups, config management), improving usability." },
            { text: "Authored end-to-end installation and setup documentation, enabling reliable adoption across operating systems." },
          ],
        },
      ],
    }
  ],
};
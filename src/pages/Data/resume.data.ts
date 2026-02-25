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
          subtitle: "University of California, Santa Cruz",
          date: "2024 – 2026",
        },
        {
          id: "bs-ucsc",
          title: "B.Sc. Computer Science",
          subtitle: "University of California, Santa Cruz",
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
          title: "<ROLE>",
          subtitle: "<COMPANY>",
          date: "<TIMELINE>",
          bullets: ["<POINT>", "<POINT>", "<POINT>"],
        },
      ],
    },
  ],
};
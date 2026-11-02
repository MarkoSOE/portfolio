// Edit this file to change the content of the home page.

export const profile = {
  name: "marko al-hamadani",
  githubUsername: "MarkoSOE",
};

export const navLinks = [
  { label: "home", href: "/" },
  { label: "projects", href: "#projects" },
];

export type IntroItem = {
  text: string;
  entity?: { label: string; href: string; logo?: string };
  after?: string;
  keywords?: string[];
};

export const intro: IntroItem[] = [
  {
    text: "studying cs at",
    entity: {
      label: "oregon state university",
      href: "https://oregonstate.edu/",
    },
  },
  {
    text: "building",
    entity: { label: "interviewAI", href: "#projects" },
    after: "with next.js & tailwind",
  },
  {
    text: "shipped",
    entity: { label: "urlsnip.ca", href: "#projects" },
    after: "a FastAPI + React URL Shortener used by",
    keywords: ["1k+ unique users"],
  },
];

export const socials = [
  { label: "github", href: `https://github.com/${profile.githubUsername}` },
  { label: "linkedin", href: "https://www.linkedin.com/marko-alhamadani" },
  { label: "email", href: "mailto:alhamama@oregonstate.edu" },
];

export type Work = {
  org: string;
  href: string;
  // Square logo in public/work/, e.g. "/work/acme.png". Falls back to the first letter.
  logo?: string;
  current?: boolean;
  positions: { title: string; place: string; dates: string }[];
};

export const resumeHref = "/resume.pdf";

export const work: Work[] = [
  {
    org: "Centre for Addiction and Mental Health",
    href: "https://camh.ca",
    current: true,
    positions: [
      { title: "Data Analyst", place: "Toronto", dates: "Jun 2024 – Present" },
    ],
    logo: "/logos/camh.jpg",
  },
  {
    org: "University Health Network",
    href: "https://UHN.ca",
    current: true,
    positions: [
      {
        title: "Research Analyst",
        place: "Toronto",
        dates: "Oct 2021 – Apr 2024",
      },
    ],
    logo: "/logos/UHN.jpg",
  },
];

export type Project = {
  name: string;
  year: string;
  description: string;
  stat?: string;
  image?: string;
  links: { label: string; href: string }[];
};

// 16:9 screenshots in public/projects/ reference them as "/projects/name.png".
export const projects: Project[] = [
  {
    name: "URL Shortener",
    year: "2026",
    description: "FastAPI + React full stack url shortener",
    stat: "1k URLs shortened",
    image: "/projects/urlsnip.png",
    links: [
      { label: "live site ↗", href: "https://URLsnip.ca" },
      {
        label: "github ↗",
        href: `https://github.com/${profile.githubUsername}`,
      },
    ],
  },
  // {
  //   name: "project two",
  //   year: "2026",
  //   description: "another project, another one-liner",
  //   stat: "winner @ some hackathon",
  //   links: [
  //     {
  //       label: "github ↗",
  //       href: `https://github.com/${profile.githubUsername}`,
  //     },
  //   ],
  // },
  // {
  //   name: "project three",
  //   year: "2025",
  //   description: "the odd one out gets centered on desktop",
  //   links: [
  //     {
  //       label: "github ↗",
  //       href: `https://github.com/${profile.githubUsername}`,
  //     },
  //   ],
  // },
];

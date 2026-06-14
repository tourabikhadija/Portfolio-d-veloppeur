export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Glasses",
    description: "Site de vente de lunettes avec panier et catalogue.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/yourname/project1",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "Plateforme de blog avec gestion d'articles.",
    stack: ["React", "Node.js"],
    github: "https://github.com/yourname/project2",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Portfolio personnel moderne et responsive.",
    stack: ["Next.js", "CSS"],
    github: "https://github.com/yourname/project3",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "Application de gestion des tâches.",
    stack: ["React", "LocalStorage"],
    github: "https://github.com/yourname/project4",
    demo: "https://demo.com",
  },
];
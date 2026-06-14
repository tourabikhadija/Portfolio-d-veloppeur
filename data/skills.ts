export type Skill = {
  name: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  category: "Frontend" | "Backend" | "Tools";
  icon: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: "Avancé", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", level: "Avancé", category: "Frontend", icon: "▲" },
  { name: "TypeScript", level: "Intermédiaire", category: "Frontend", icon: "📘" },

  // Backend
  { name: "Node.js", level: "Intermédiaire", category: "Backend", icon: "🟢" },
  { name: "Express", level: "Intermédiaire", category: "Backend", icon: "🚂" },

  // Tools
  { name: "Git", level: "Avancé", category: "Tools", icon: "🔧" },
  { name: "GitHub", level: "Avancé", category: "Tools", icon: "🐙" },
];
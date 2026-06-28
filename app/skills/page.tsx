import { skills } from "@/data/skills";

export default function SkillsPage() {
  const frontend = skills.filter((s) => s.category === "Frontend");
  const backend = skills.filter((s) => s.category === "Backend");
  const tools = skills.filter((s) => s.category === "Tools");

  return (
    <main className="p-8">
      <div className="skills_page ">
      <h1 className="text-3xl font-bold mb-6">Mes Compétences</h1>

      {/* Frontend */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Frontend</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {frontend.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* Backend */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Backend</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {backend.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* Tools */}
      <section>
        <h2 className="text-xl font-semibold">Tools</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {tools.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}

/* Skill Component */
type SkillProps = {
  skill: {
    name: string;
    level: string;
    icon: string;
  };
};

function SkillCard({ skill }: SkillProps) {
  return (
    <div className="border p-3 rounded-lg shadow-sm flex items-center gap-2">
      <span className="text-xl">{skill.icon}</span>
      <div>
        <p className="font-semibold">{skill.name}</p>
        <p className="text-sm text-gray-500">{skill.level}</p>
      </div>
    </div>
  );
}
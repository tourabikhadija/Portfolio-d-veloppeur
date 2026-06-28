import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <div className="Portfolio">
      <h1 className="text-3xl font-bold mb-6">
        Mes Projets
      </h1>

      <p className="text-gray-600 mb-8">
        Voici quelques projets que j’ai réalisés avec différentes technologies.
      </p>

      {/* Grid */}
      <div className="cart">

      <div >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      </div>
    </div>
    </main>
  );
}
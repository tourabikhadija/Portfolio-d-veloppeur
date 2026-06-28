import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div>
    <div className="hero">
      <h1>Khadija Tourabi</h1>
      <h2>Développeuse Fullstack</h2>
      <p>
        Passionnée par le développement web, je crée des applications modernes
        et performantes avec React, Next.js et TypeScript.
      </p>
      
      <Link href="/portfolio">
        <button className="btnvoir">Voir mes projets</button>
      </Link>
       </div>

      

     <section className="projet">
      <h2>Mes projets</h2>
      <section className="cart_projet ">
       

        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
        </section>
      </section>
    </div>
    
  );
}
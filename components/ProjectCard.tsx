type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
    <div className="border p-4 rounded-lg shadow-sm">
      
      <h3 className="text-xl font-bold">{project.title}</h3>

      <p className="text-gray-600 mt-2">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex gap-2 flex-wrap mt-3">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        <a href={project.github} target="_blank">
          GitHub
        </a>

        <a href={project.demo} target="_blank">
          Demo
        </a>
      </div>

    </div>
    </div>
  );
}
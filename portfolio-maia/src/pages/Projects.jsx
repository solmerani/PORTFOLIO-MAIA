import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { id: 1, title: "Zwap", collaborators: "Maia Michanie", desc: "Plataforma de intercambio de casas entre viajeros." },
    { id: 2, title: "EcoMatch", collaborators: "Maia Michanie", desc: "Red social para conectar proyectos ambientales." },
    { id: 3, title: "Maaian Dice Todo", collaborators: "Maia Michanie", desc: "Programa interactivo sobre creatividad e IA." },
    { id: 4, title: "Diseño UI/UX", collaborators: "Maia Michanie", desc: "Proyectos visuales y prototipos en Figma." },
    { id: 5, title: "Próximamente", collaborators: "—", desc: "Nuevo proyecto en desarrollo." },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Mis proyectos</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`project-card ${activeProject === p.id ? "active" : ""}`}
            onClick={() => setActiveProject(activeProject === p.id ? null : p.id)}
          >
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.collaborators}</p>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal" onClick={() => setActiveProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{projects.find((p) => p.id === activeProject).title}</h3>
            <p>{projects.find((p) => p.id === activeProject).desc}</p>
            <button onClick={() => setActiveProject(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}

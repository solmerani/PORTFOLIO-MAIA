import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const filters = ["Medicina", "Viajes", "Niñez", "Real estate", "Ambiental"];

  const projects = [
    {
      id: 1,
      title: "Zwap",
      subtitle: "Intercambio de casas temporalmente",
      collaborator: "Maia Michanie",
    },
    {
      id: 2,
      title: "Scanma",
      subtitle: "Detección de cancer temprana",
      collaborator: "Maia Michanie",
    },
    {
      id: 3,
      title: "TeachHouse",
      subtitle: "Juego para fomentar el aprendizaje en niños",
      collaborator: "Maia Michanie",
    },
    {
      id: 4,
      title: "Ecotips",
      subtitle: "Tips para el cuidado del ecosistema",
      collaborator: "Maia Michanie",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Proyectos recientes</h2>

      <div className="projects-filters">
        {filters.map((f) => (
          <button key={f} className="filter-btn">
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => setActiveProject(p)}
          >
            <div className="project-img"></div>

            <div className="project-info">
              <div>
                <h3>{p.title}</h3>
                <p>{p.collaborator}</p>
              </div>

              <button className="plus-btn">+</button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
  <div className="project-modal" onClick={() => setActiveProject(null)}>
    <div
      className="project-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-left">
        <h3>{activeProject.title}</h3>
        <p>{activeProject.subtitle}</p>
        <p className="modal-collab">
          Colaborador(es): {activeProject.collaborator}
        </p>
      </div>

      <div className="modal-right"></div>

      <button
        className="close-modal-btn"
        onClick={() => setActiveProject(null)}
      >
        Cerrar
      </button>
    </div>
  </div>
)}
    </section>
  );
}

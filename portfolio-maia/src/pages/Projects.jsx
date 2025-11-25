import { useState } from "react";
import "./Projects.css";

/* MINIATURAS (tarjetas) */
import zwapThumb from "../assets/zwap.png";
import scanmaThumb from "../assets/scanmal.png";
import teachThumb from "../assets/easytech.png";
import ecoThumb from "../assets/ecotips.png";

/* IMÁGENES MODAL (grandes) */
import zwapFull from "../assets/swap.png";
import scanmaFull from "../assets/scanma2.png";
import teachFull from "../assets/easytech2.png";
import ecoFull from "../assets/ecotips2.png";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const filters = ["Medicina", "Viajes", "Niñez", "Real estate", "Ambiental"];

  const projects = [
    {
      id: 1,
      title: "Zwap",
      subtitle: "Intercambio de casas temporalmente",
      collaborator: "Maia Michanie",
      thumb: zwapThumb,
      modal: zwapFull,
    },
    {
      id: 2,
      title: "Scanma",
      subtitle: "Detección de cáncer temprana",
      collaborator: "Maia Michanie",
      thumb: scanmaThumb,
      modal: scanmaFull,
    },
    {
      id: 3,
      title: "TeachHouse",
      subtitle: "Juego educativo para niños",
      collaborator: "Maia Michanie",
      thumb: teachThumb,
      modal: teachFull,
    },
    {
      id: 4,
      title: "Ecotips",
      subtitle: "Tips para el cuidado del ecosistema",
      collaborator: "Maia Michanie",
      thumb: ecoThumb,
      modal: ecoFull,
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

      {/* GRID */}
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => setActiveProject(p)}
          >
            <div className="project-img">
              <img src={p.thumb} alt={p.title} />
            </div>

            <div className="project-info">
              <div>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>

              <button className="plus-btn">+</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
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

            <div className="modal-right">
              <img src={activeProject.modal} alt={activeProject.title} />
            </div>

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

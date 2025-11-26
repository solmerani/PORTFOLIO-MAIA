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
      shortDescription: "Una plataforma para viajar sin pagar alojamiento.",
      longDescription:
        "Zwap es una plataforma web que permite intercambiar casas temporalmente para viajar sin pagar alojamiento. Busca crear una comunidad de confianza que facilite un turismo colaborativo, económico y sustentable. Además, ofrece filtros personalizados para adaptarse a las necesidades de cada usuario y promueve experiencias culturales auténticas al hospedarse en hogares locales.",
      collaborator: "Maia Michanie",
      thumb: zwapThumb,
      modal: zwapFull,
    },
    {
      id: 2,
      title: "Scanma",
      subtitle: "Detección de cáncer temprana",
      shortDescription: "Herramienta médica para análisis rápido.",
      longDescription:
        "Scanma es una plataforma de salud que combina información accesible para el público con herramientas profesionales para detectar cáncer de mama en etapas tempranas. Ofrece recursos claros sobre autoexámenes, prevención y qué hacer ante dudas, mientras que su área exclusiva para médicos permite gestionar pacientes, subir mamografías y usar un sistema inteligente que analiza las imágenes para identificar posibles signos tempranos de la enfermedad. Busca brindar acompañamiento, precisión y prevención al alcance de todas.",
      collaborator: "Maia Michanie",
      thumb: scanmaThumb,
      modal: scanmaFull,
    },
    {
      id: 3,
      title: "TeachHouse",
      subtitle: "Juego educativo para niños",
      shortDescription: "Aprender jugando, para todas las edades.",
      longDescription:
        "TeachHouse es una plataforma creada para el Hospital de Niños Gutiérrez que permite que los chicos internados puedan aprender mientras juegan, haciendo su estadía más entretenida y acompañada. Incluye juegos de memoria, preguntas y habilidades, con diseños simples y accesibles, y puede usarse junto a un joystick físico que facilita la experiencia para los pacientes. Su objetivo es brindar un espacio seguro, divertido y educativo que ayude a los niños a distraerse, estimularse y seguir aprendiendo durante la internación.",
      collaborator: "Maia Michanie",
      thumb: teachThumb,
      modal: teachFull,
    },
    {
      id: 4,
      title: "Ecotips",
      subtitle: "Tips para el cuidado del ecosistema",
      shortDescription: "Consejos simples para un planeta mejor.",
      longDescription:
        "TeachHouse es una plataforma creada para el Hospital de Niños Gutiérrez que permite que los chicos internados puedan aprender mientras juegan, haciendo su estadía más entretenida y acompañada. Incluye juegos de memoria, preguntas y habilidades, con diseños simples y accesibles, y puede usarse junto a un joystick físico que facilita la experiencia para los pacientes.",
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
                <p>{p.shortDescription}</p>
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

              <p className="modal-description">{activeProject.longDescription}</p>

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

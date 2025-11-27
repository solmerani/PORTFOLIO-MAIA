import "./About.css";
import maia from "../assets/maia.jpg";

import egreso from "../assets/egreso.png";
import pluma from "../assets/pluma.png";
import personas from "../assets/personas.png";
import luz from "../assets/luz.png";
import evento from "../assets/evento.png";

export default function About() {

  /* 💡 VOLVIÓ skills (lo habías borrado y eso rompía todo) */
  const skills = ["Autodidacta", "Nivel de inglés", "Trabajo en equipo"];

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Imagen */}
        <div className="about-left">
          <img src={maia} alt="Maia Michanie" />
        </div>

        {/* Texto */}
        <div className="about-right">
          <h2>Sobre mí</h2>

          <p className="about-strong">Maia Michanie — Diseñadora UI/UX</p>

          {/* ITEM 1 */}
          <div className="about-item">
            <img src={egreso} alt="Egreso" />
            <p>Estudié en ORT Argentina, en la orientación de Tecnología.</p>
          </div>

          {/* ITEM 2 */}
          <div className="about-item">
            <img src={pluma} alt="Diseño UX" />
            <p>Diseño experiencias claras, útiles y centradas en el usuario.</p>
          </div>

          {/* ITEM 3 */}
          <div className="about-item">
            <img src={personas} alt="Trabajo en equipo" />
            <p>Trabajo junto a desarrolladores y “clientes” de distintas áreas.</p>
          </div>

          {/* ITEM 4 */}
          <div className="about-item">
            <img src={luz} alt="Creatividad" />
            <p>Me gustan los desafíos en los que combino creatividad y tecnología.</p>
          </div>

          {/* ITEM 5 */}
          <div className="about-item">
            <img src={evento} alt="Eventos" />
            <p>
              Participé en eventos institucionales donde expuse mis trabajos frente a referentes del sector.
            </p>
          </div>

          {/* Tags */}
          <div className="about-skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

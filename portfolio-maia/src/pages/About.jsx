import "./About.css";
import profile from "../assets/profile.png"; // reemplazá con la imagen real

export default function About() {
  const skills = ["Autodidacta", "Nivel de inglés", "Trabajo en equipos"];

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Imagen izquierda */}
        <div className="about-left">
          <img src={profile} alt="Maia Michanie" />
        </div>

        {/* Texto derecha */}
        <div className="about-right">
          <h2>Sobre mí</h2>

          <p className="about-strong">Maia Michanie — Diseñadora UI/UX</p>

          <p>
            Estudié en ORT Argentina, en la orientación de Tecnología.
          </p>

          <p>
            Diseño experiencias claras, útiles y centradas en el usuario.
          </p>

          <p>
            Trabajo junto a desarrolladores y “clientes” de distintas áreas.
          </p>

          <p>
            Me gustan los desafíos en los que combino creatividad y tecnología.
          </p>

          <p>
            Participé en eventos institucionales donde expuse mis trabajos frente a referentes del sector.
          </p>

          {/* Skills */}
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

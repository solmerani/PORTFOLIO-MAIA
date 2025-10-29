import "./About.css";
import profile from "../assets/profile.png"; // reemplazá con la imagen real

export default function About() {
  const skills = ["UI design", "UX research", "Prototipado", "Creatividad"];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <img src={profile} alt="Maia Michanie" />
        </div>

        <div className="about-right">
          <h2>Sobre mí</h2>
          <p>
            Hola, soy <strong>Maia Michanie</strong> — Diseñadora UI/UX. <br />
            Estudié en <strong>ORT Argentina</strong>, en la orientación de tecnología, 
            participé en 3 proyectos donde fui diseñadora gráfica de páginas web y branding, 
            así aprendí lo básico de trabajar en un equipo con developers y clientes de todo tipo, 
            desde la industria de la medicina hasta real estate. 
            Siempre me enfoqué en juntar la creatividad y utilidad con la tecnología.
          </p>
          <p>
            Tuve la oportunidad de participar en eventos del colegio enfocados a la industria, 
            donde tuve la experiencia de exponer mi trabajo frente a referentes de la tecnología 
            en Argentina, con speeches cortos que llamen la atención y presenten mis talentos. 
            Fuera del diseño profesional, me gusta la fotografía, música y tecnología.
          </p>

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

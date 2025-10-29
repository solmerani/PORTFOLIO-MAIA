import "./Home.css";

export default function Home() {
  return (
   <section className="home" id ="home">
  <div className="home-left">
    <h4 className="home-hi">¡Hola!</h4>
    <h1 className="home-name">
      Soy <span>Maia Michanie</span>
    </h1>
    <h2 className="home-role">Ui/Ux designer</h2>
    <p className="home-description">
      Transformo ideas en experiencias digitales simples, estéticas y funcionales.
      Combino diseño visual, estructura y empatía para crear interfaces que conectan con las personas.
    </p>
    <button className="home-contact">
      Contáctame <span className="arrow">→</span>
    </button>
  </div>

  <div className="home-center"></div>

  <div className="home-right">
    <ul>
      <li>
        <strong>+3</strong>
        <p>Experiencia</p>
      </li>
      <li>
        <strong>3</strong>
        <p>Proyectos</p>
      </li>
      <li>
        <strong>Ort</strong>
        <p>Escuela</p>
      </li>
      <li>
        <strong>UB</strong>
        <p>Universidad</p>
      </li>
    </ul>
  </div>


</section>

  );
}

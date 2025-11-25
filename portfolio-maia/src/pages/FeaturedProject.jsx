import "./FeaturedProject.css";
import zwapImg from "../assets/swap.png"; // poné tu imagen acá

export default function FeaturedProject() {
  return (
    <section className="featured" id="featured">
      <h2 className="featured-title">Proyecto destacado</h2>

      <div className="featured-container">

        <div className="featured-left">
          <h3 className="featured-name">Zwap</h3>
          <p className="featured-desc">
            Zwap es una plataforma web que permite intercambiar casas
            temporalmente para viajar sin pagar alojamiento. Busca crear una
            comunidad de confianza que facilite un turismo colaborativo,
            económico y sustentable. Además, ofrece filtros personalizados para
            adaptarse a las necesidades de cada usuario y promueve experiencias
            culturales auténticas al hospedarse en hogares locales.
          </p>

          <p className="featured-collab">
            Colaboradores:{" "}
            <span>Matias Vernet(Front-End), Josefina Kukiolka(Back-End)</span>
          </p>
        </div>

        <div className="featured-right">
          <img src={zwapImg} alt="Zwap mockup" className="featured-img" />
        </div>

      </div>
    </section>
  );
}

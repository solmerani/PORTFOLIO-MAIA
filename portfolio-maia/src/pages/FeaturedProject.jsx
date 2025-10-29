import "./FeaturedProject.css";

export default function FeaturedProject() {
  return (
    <section className="featured" id ="featured">
      <h2 className="featured-title">Proyecto destacado</h2>

      <div className="featured-container">
        {/* Izquierda - Descripción */}
        <div className="featured-left">
          <h3 className="featured-name">Nombre de proyecto</h3>
          <p className="featured-desc">
            Explicación e información del proyecto. Explicación e información del proyecto. 
            Explicación e información del proyecto. Explicación e información del proyecto. 
            Explicación e información del proyecto. Explicación e información del proyecto. 
            Explicación e información del proyecto.
          </p>
          <p className="featured-collab">Colaboradores: <span>Nombre(s)</span></p>
        </div>

        {/* Derecha - Imagen / Mockup */}
        <div className="featured-right"></div>
      </div>
    </section>
  );
}

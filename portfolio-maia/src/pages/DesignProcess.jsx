import "./DesignProcess.css";

export default function DesignProcess() {
  return (
    <section className="process-section" id="process">
      <h2 className="process-title">Mi proceso de diseño</h2>

      <div className="process-numbers">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
      </div>

      <div className="process-line">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="process-details">
        <div className="step">
          <h4>Ux Research</h4>
          <p>
            Analizo al usuario, el contexto y los objetivos del
            producto antes de diseñar.
          </p>
        </div>

        <div className="step">
          <h4>Wireframes</h4>
          <p>
            Creo estructuras simples que definen la lógica y la jerarquía
            de mi futuro diseño.
          </p>
        </div>

        <div className="step">
          <h4>Diseño Visual</h4>
          <p>
            Trabajo color, tipografía, contraste y composición.
            Busco que todo tenga coherencia.
          </p>
        </div>

        <div className="step">
          <h4>Prototipado</h4>
          <p>
            Diseño la experiencia interactiva: cómo se navega, cómo se siente.
          </p>
        </div>

        <div className="step">
          <h4>Feedback</h4>
          <p>
            Testeo con usuarios o con el equipo y ajusto detalles para
            mejorar la experiencia.
          </p>
        </div>
      </div>
    </section>
  );
}

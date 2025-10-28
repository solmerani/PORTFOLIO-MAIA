import "./DesignProcess.css";

export default function DesignProcess() {
  const steps = [
    {
      num: "01",
      title: "Ux Research",
      desc: "Analizo al usuario, el contexto y los objetivos del producto antes de diseñar."
    },
    {
      num: "02",
      title: "Wireframes",
      desc: "Creo estructuras simples que definan la lógica y la jerarquía de mi futuro diseño."
    },
    {
      num: "03",
      title: "Diseño Visual",
      desc: "Trabajo color, tipografía, contraste y composición. Busco que todo tenga coherencia."
    },
    {
      num: "04",
      title: "Prototipado",
      desc: "Diseño la experiencia interactiva: cómo se navega, cómo se siente."
    },
    {
      num: "05",
      title: "Feedback",
      desc: "Testeo con usuarios o con el equipo y ajusto detalles para mejorar la experiencia."
    },
  ];

  return (
    <section className="design-process">
      <h2 className="process-title">Mi proceso de diseño</h2>
      <div className="process-line"></div>

      <div className="process-steps">
        {steps.map((step) => (
          <div className="process-step" key={step.num}>
            <h3 className="process-number">{step.num}</h3>
            <div className="process-dot"></div>
            <div className="process-info">
              <p className="process-title-small"><strong>{step.title}</strong></p>
              <p className="process-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

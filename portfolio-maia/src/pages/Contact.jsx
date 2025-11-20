import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-box">

        {/* IZQUIERDA */}
        <div className="contact-left">
          <h3 className="contact-name">Maia Michanie</h3>
          <h1 className="contact-title">UX/UI Designer</h1>
          <p className="contact-desc">
            “Combino color, claridad y empatía para diseñar experiencias reales.”
          </p>
        </div>

        {/* DERECHA */}
        <div className="contact-right">

          <div className="contact-item">
            <p className="label">Correo electrónico</p>
            <p className="value">Maiarmicha@gmail.com</p>
          </div>

          <div className="contact-item">
            <p className="label">LinkedIn</p>
            <p className="value">@MaiaMichanie</p>
          </div>

          <div className="contact-item">
            <p className="label">Instagram</p>
            <p className="value">@Maiamichaa</p>
          </div>

          <div className="contact-item">
            <p className="label">Teléfono</p>
            <p className="value">+54 911 58053003</p>
          </div>

          <div className="contact-item">
            <p className="label">Vocación</p>
            <p className="value">Diseño de páginas web</p>
          </div>

          <div className="contact-item">
            <p className="label">Último proyecto</p>
            <p className="value">Zwap</p>
          </div>

          <div className="contact-big">
            <p className="label">¿Necesitás ayuda?</p>
            <p className="value">
              ¿Tu sitio web no refleja la calidad de tu marca? Permitirme ayudarte a
              resolver esos desafíos con un diseño estratégico y profesional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

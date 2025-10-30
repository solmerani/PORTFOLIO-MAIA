import "./Contact.css";


export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <div className="contact-left">
          <h3>Maia Michanie</h3>
          <h1>UX/UI Designer</h1>
          <p>“Combino color, claridad y empatía para diseñar experiencias reales.”</p>
        </div>

        <div className="contact-right">
          <div className="info-box">
            <p>Correo electrónico</p>
            <a href="mailto:Maiarmicha@gmail.com">Maiarmicha@gmail.com</a>
          </div>
          <div className="info-box">
            <p>LinkedIn</p>
            <a href="https://linkedin.com/in/MaiaMichanie">@MaiaMichanie</a>
          </div>
          <div className="info-box">
            <p>Instagram</p>
            <a href="https://instagram.com/Maiamichaa">@Maiamichaa</a>
          </div>
          <div className="info-box">
            <p>Teléfono</p>
            <span>+54 911 58053003</span>
          </div>
          <div className="info-box">
            <p>Vocación</p>
            <span>Diseño de páginas web</span>
          </div>
          <div className="info-box">
            <p>Último proyecto</p>
            <span>Zwap</span>
          </div>
        </div>
      </div>
    </section>
  );
}

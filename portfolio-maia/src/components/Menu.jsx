import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <div className="menu-container">
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        Menú
      </button>

      {open && (
        <div className="menu-dropdown">
          <ul>
            <li onClick={() => handleScroll("home")}>Inicio</li>
            <li onClick={() => handleScroll("projects")}>Mis proyectos</li>
            <li onClick={() => handleScroll("featured")}>Proyecto destacado</li>
            <li onClick={() => handleScroll("process")}>Proceso de diseño</li>
            <li onClick={() => handleScroll("tools")}>Herramientas</li>
            <li onClick={() => handleScroll("about")}>Sobre mí</li>
          </ul>
        </div>
      )}
    </div>
  );
}

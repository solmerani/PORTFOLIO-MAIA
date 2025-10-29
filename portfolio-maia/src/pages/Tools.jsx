import "./Tools.css";
import figma from "../assets/figma.png";
import iconify from "../assets/iconify.png";
import pinterest from "../assets/pinterest.png";
import chatgpt from "../assets/chatgpt.png";
import coolors from "../assets/coolors.png";

export default function Tools() {
  const tools = [
    { id: 1, name: "Figma", img: figma },
    { id: 2, name: "Iconify", img: iconify },
    { id: 3, name: "Pinterest", img: pinterest },
    { id: 4, name: "ChatGPT", img: chatgpt },
    { id: 5, name: "Coolors", img: coolors },
  ];

  return (
    <section className="tools" id="tools">
      <h2 className="tools-title">Herramientas</h2>

      <div className="tools-grid">
        {tools.map((tool) => (
          <div className="tool-item" key={tool.id}>
            <img src={tool.img} alt={tool.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

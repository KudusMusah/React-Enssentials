import reactImage from "../..//assets/react-core-concepts.png";
import "./Header.css";

function genRandom() {
  return Math.floor(Math.random() * 3);
}

export default function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
    </header>
  );
}

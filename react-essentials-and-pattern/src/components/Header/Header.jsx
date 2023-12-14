import "./Header.css"
import logo from "../../assets/react-core-concepts.png";
const reactDesc = ["Fundamental", "Crucial", "Core"];
const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export default function Header() {
    const description = reactDesc[genRandomInt(2)];
    return (
      <header>
        <img src={logo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
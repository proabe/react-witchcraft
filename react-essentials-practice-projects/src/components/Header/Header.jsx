import "./Header.css";
import headerImg from "../../assets/investment-calculator-logo.png";

export default function Header({ children }) {
  return (
    <header id="header">
      <img src={headerImg} alt="logo" />
      <h1>{children}</h1>
    </header>
  );
}

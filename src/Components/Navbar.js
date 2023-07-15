import logo from "../images/react-logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img width={"65px"} src={logo} alt="ReactLogo" />
      <h1>ReactFacts</h1>
      <h3>React Course-Project 1</h3>
    </nav>
  );
}

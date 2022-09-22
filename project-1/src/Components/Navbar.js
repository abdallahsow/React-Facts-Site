import logo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-logo">
        <img className="react-logo" src={logo} alt="" />
        <h3 className="logo-title">React Facts</h3>
      </div>
      <h4 className="extra-title">React Course - Project 1</h4>
    </nav>
  );
}

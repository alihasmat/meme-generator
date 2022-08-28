import Logo from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content flex">
          <div className="header-logo flex">
            <img src={Logo} alt="logo" className="header-logo--img" />
            <h1 className="primary-heading fw-bold">Meme Generator</h1>
          </div>
          <div className="header-title">
            <span className="secondary-heading">React Project</span>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import firstPage from "../assets/first_page.png";
import logo from "../assets/logo.svg";
import logoName from "../assets/Vibesnap.svg";
export function Welcome() {
  return (
    <main className="welcome-main">
      <div className="image-container">
        <img src={firstPage} alt="First Page" />
      </div>
      <div className="content-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <img src={logoName} alt="Logo Name" />
        </div>
        <span className="tagline">Moments That Matter, Shared Forever.</span>
        <button type="button" className="google-button">
          <Link to="/feed">
          Continue With Google
          </Link>
        </button>
      </div>
    </main>
  );
}

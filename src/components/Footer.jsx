import "../styles/layout/_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/">
              A jugar
            </Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link active" to="/instructions">
              ¿Cómo se juega?
            </Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/options">
              Más opciones
            </Link>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
};

export default Footer;

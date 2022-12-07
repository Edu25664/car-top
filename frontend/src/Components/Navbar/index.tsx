import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-warning main-nav">
        <div className="container-fluid">
          <Link to="/" className="nav-logo-text">
          <h4>Carros top</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cartop-navbar"
            aria-controls="dscatalog-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="cartop-navbar">
            <ul className="navbar-nav offset-md-9 main-menu">
              <li><NavLink to="/" className="active">HOME</NavLink> </li>
              <li><NavLink to="/catalog" className="active">CATÁLOGO</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

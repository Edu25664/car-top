import './styles.css';
import 'bootstrap/js/src/collapse.js';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-warning main-nav">
        <div className="container-fluid">
          <h4>Carros top</h4>
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
              <li>HOME</li>
              <li>CATALOGO</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

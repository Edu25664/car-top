import "./style.css";
import ButtonIcon from "../../Components/ButtonHome";
import "bootstrap/js/src/collapse.js";
import HomeCardCar from "../../Components/HomeCardCar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home-container">
        <HomeCardCar/>
        <div className="base-card home-card-button">
          <p>Comece agora a navegar</p>
          <Link to="/catalog" className="nav-logo-text"> <ButtonIcon /> </Link>
        </div>
      </div>
    </>
  );
}
export default Home;

import "./style.css";
import { ReactComponent as MainImage } from "../../assets/image/product.svg";
import ButtonIcon from "../../Components/ButtonHome";
import "bootstrap/js/src/collapse.js";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div className="home-image-container">
              <MainImage/>
            </div>
            <div className="home-text">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
        </div>
        <div className="base-card home-card-button">
          <p>Comece agora a navegar</p>
          <ButtonIcon />
        </div>
      </div>
    </>
  );
}
export default Home;

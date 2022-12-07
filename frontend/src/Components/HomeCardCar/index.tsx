import MainImage from '../../assets/image/product.svg';
import './style.css'
function HomeCardCar() {
  return (
    <div className="main-home-card">
      <div className='row flex-row-reverse'>
        <div className='col-xl-6 pt-5'>
          <img src={MainImage} alt="nome do produto"></img> 
        </div>
        <div className='col-xl-6 text-white home-text'>
          <h4>O carro perfeito para você</h4>
          <p>
            Conheça nossos carros e de mais um passo na <br/>
            realização do seu sonho
          </p>
        </div>
      </div>
    </div>
    
  );
}
export default HomeCardCar;

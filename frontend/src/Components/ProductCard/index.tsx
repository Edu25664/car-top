import './style.css';
import ProductImg from '../../assets/image/car-card.png';
import ButtomCard from '../ButtomCard';
const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="nome do produto"></img>
      </div>
      <div className="card-bottom-container">
        <h1>Audi Supra TT</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </h6>
        <div className="buttom-card">
          <ButtomCard />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import ProductCard from ".././ProductCard.jsx";
import { logo } from "../.././assets";

const Vegetables = () => {
  return (
    <div className="p-4">
      <ProductCard
        productName="Potato"
        productPrice="80/kg"
        productImageURL={logo}
        productQuantity={10}
      />
    </div>
  );
};

export default Vegetables;

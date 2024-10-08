import ProductCard from ".././ProductCard.jsx";
import { logo } from "../.././assets";
import AddProduct from "../AddProduct.jsx";

const Vegetables = () => {
  return (
    <div className="p-4 grid grid-cols-2 justify-items-center gap-4">
      <ProductCard
        productName="Potato"
        productPrice="80/kg"
        productImageURL={logo}
        productQuantity={10}
      />
      {}
      <AddProduct productQuantity={10} />
    </div>
  );
};

export default Vegetables;

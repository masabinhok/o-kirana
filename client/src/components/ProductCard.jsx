import { useState } from "react";
import { changeQuantity, addToBag } from "../utils/product";


const ProductCard = ({
  productName,
  productPrice,
  productImageURL,
  productQuantity,
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="max-w-[400px] w-full rounded-xl overflow-hidden shadow-lg bg-zinc-900 cursor-pointer">
      {/* Product Image */}
      <img
        className="w-full max-h-[275px] h-full object-cover"
        src={productImageURL}
        alt={productName}
      />

      {/* Product Details */}
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl leading-[20px]  text-slate-200">
          {productName}
        </h4>
        <div className="flex justify-between">
          {" "}
          <p className="text-slate-300 text-base mt-2">Rs.{productPrice}</p>
          <p className="text-slate-300 text-base mt-2">
            {productQuantity == 0 ? (
              <span className="text-red-500">Out of Stock</span>
            ) : (
              <span className="text-green-500">Available</span>
            )}
          </p>
        </div>
        <div className="flex bg-zinc-800 rounded-xl my-3">
          <button
            className="text-white shadow-inner shadow-zinc-700 rounded-xl p-3  border-b-1 w-full border-zinc-700 border bg-zinc-900"
            type="submit"
            onClick={() =>
              changeQuantity("-", quantity, setQuantity, productQuantity)
            }
          >
            -
          </button>
          <input
            className="bg-zinc-800 w-[100px] outline-none text-center text-slate-200 font-bold  "
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            readOnly
          />
          <button
            className="text-white shadow-inner shadow-zinc-700 rounded-xl p-3  border-b-1 w-full border-zinc-700 border bg-zinc-900"
            type="submit"
            onClick={() =>
              changeQuantity("+", quantity, setQuantity, productQuantity)
            }
          >
            +
          </button>
        </div>
        <div className="w-full">
          {" "}
          <button
            className="text-white shadow-inner shadow-zinc-700 rounded-xl p-3  border-b-1 w-full border-zinc-700 border bg-zinc-900"
            type="submit"
            onClick={() => addToBag(productQuantity, quantity, setQuantity)}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

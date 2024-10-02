import Button from "./Button";

const ProductCard = ({ productName, productPrice, productImageURL }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-900">
      {/* Product Image */}
      <img
        className="w-full h-64 object-cover"
        src={productImageURL}
        alt={productName}
      />

      {/* Product Details */}
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2 text-gray-900">{productName}</h4>
        <p className="text-gray-700 text-base mb-4">${productPrice}</p>
        <Button buttonName="Add to Cart" />
      </div>
    </div>
  );
};

export default ProductCard;

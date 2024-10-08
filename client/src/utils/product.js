const changeQuantity = (symbol, quantity, setQuantity, productQuantity) => {
  if (symbol === "-") {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  }
  if (symbol === "+") {
    if (quantity < productQuantity) {
      setQuantity(quantity + 1);
    }
  }
};
const addToBag = (productQuantity, quantity, setQuantity) => {
  console.log("clicked");
  productQuantity -= quantity;
  setQuantity(0);
};

export { changeQuantity, addToBag };

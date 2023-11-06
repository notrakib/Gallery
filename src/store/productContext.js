import React from "react";

const ProductContext = React.createContext({
  product: [],
  selectedProduct: [],
  add_Product: () => {},
  remove_Product: () => {},
  arrange_product: () => {},
});

export default ProductContext;

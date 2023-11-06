import ProductContext from "./productContext";
import { useState } from "react";
import imageArray from "../data";

const ProductProvider = (props) => {
  const [product, setProduct] = useState(imageArray);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const AddProductHandaler = (id) => {
    const itemExist = selectedProduct.includes(id);

    if (itemExist) {
      setSelectedProduct(selectedProduct.filter((each) => each != id));
    } else {
      setSelectedProduct((previous) => [...previous, id]);
    }
    console.log(selectedProduct);
  };

  const RemoveProductHandaler = () => {
    if (selectedProduct.length > 0) {
      let remainingItem = product;
      selectedProduct.forEach((each) => {
        remainingItem = remainingItem.filter((one) => one.id != each);
      });

      setProduct(remainingItem);
      setSelectedProduct([]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        selectedProduct,
        add_Product: AddProductHandaler,
        remove_Product: RemoveProductHandaler,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

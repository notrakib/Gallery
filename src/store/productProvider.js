import ProductContext from "./productContext";
import { useEffect, useState } from "react";
import imageArray from "../data";

const ProductProvider = (props) => {
  const [product, setProduct] = useState(imageArray);
  const [selectedProduct, setSelectedProduct] = useState([]);

  // useEffect(() => {
  //   SortProducts();
  // }, []);

  const AddProductHandaler = (id) => {
    const itemExist = selectedProduct.includes(id);

    if (itemExist) {
      setSelectedProduct(selectedProduct.filter((each) => each != id));
    } else {
      setSelectedProduct((previous) => [...previous, id]);
    }
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

  const SortProducts = () => {
    const sortedProducts = [...product].sort((a, b) => a.rank - b.rank);
    setProduct(sortedProducts);
  };

  const RearrangeProducts = (dragRank, dropRank) => {
    const draggedItem = product.find((each) => each.rank === dragRank);
    const droppedItem = product.find((each) => each.rank === dropRank);

    draggedItem.rank = dropRank;
    droppedItem.rank = dragRank;
    SortProducts();
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        selectedProduct,
        add_Product: AddProductHandaler,
        remove_Product: RemoveProductHandaler,
        arrange_product: RearrangeProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

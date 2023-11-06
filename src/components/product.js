import { useContext, useState } from "react";
import ProductContext from "../store/productContext";

const Product = (props) => {
  const product = useContext(ProductContext);
  const [mouseEnter, setmouseEnter] = useState(false);

  const SelectHandaler = () => {
    product.add_Product(props.item.id);
  };

  return (
    <div
      class={`h-full w-full top-0 left-0 relative border-2 border-slate-300 rounded-xl ${
        product.selectedProduct.includes(props.item.id) ? "opacity-50" : ""
      } hover:opacity-50 transition-all	duration-200	`}
      onMouseEnter={() => setmouseEnter(true)}
      onMouseLeave={() => setmouseEnter(false)}
      onDragOver={(event) => props.allowDrop(event)}
      onDragStart={(event) => props.drag(props.item.rank)}
      onDrop={(event) => props.drop(event, props.item.rank)}
    >
      <input
        onClick={SelectHandaler}
        class={`absolute top-4 left-4 ${
          mouseEnter || product.selectedProduct.includes(props.item.id)
            ? "block"
            : "hidden"
        }`}
        type="checkbox"
        onChange={() => {}}
      ></input>
      <img class="rounded-xl" src={props.item.image} alt="None" />
    </div>
  );
};

export default Product;

import { useContext } from "react";
import ProductContext from "../store/productContext";

const Header = () => {
  const product = useContext(ProductContext);

  return (
    <>
      {product.selectedProduct.length === 0 && (
        <div class="text-2xl h-10 font-bold mt-3 ml-2 w-full border-b-2 border-slate-300">
          Gallery
        </div>
      )}
      {product.selectedProduct.length > 0 && (
        <div class="flex flex-row justify-between w-full h-14 border-b-2 border-slate-300">
          <div class="flex flex-row">
            <input
              class="w-5 mt-1 bg-blue-600"
              type="checkbox"
              checked={true}
            ></input>
            <p class="text-2xl font-bold mt-3 ml-2">
              {product.selectedProduct.length}{" "}
              {product.selectedProduct.length > 1 ? "Files" : "File"} Selected
            </p>
          </div>

          <div>
            <p
              class="text-lg text-red-500 mt-5"
              onClick={product.remove_Product}
            >
              Delete {product.selectedProduct.length > 1 ? "files" : "file"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import "./App.css";
import Product from "./components/product";
import Header from "./components/header";
import { useContext, useState } from "react";
import ProductContext from "./store/productContext";

function App() {
  const product = useContext(ProductContext);
  const [selectedItem, setSelectedItem] = useState([]);

  const updateItems = (id) => {
    console.log(selectedItem);
    const exist = selectedItem.filter((each) => each.id === id);
    if (exist) {
      setSelectedItem(selectedItem.filter((each) => each.id != id));
    } else {
      setSelectedItem((previous) => [...previous, id]);
    }
  };

  return (
    <div class="p-8 bg-slate-300">
      <div class="p-8 rounded-md bg-white">
        <Header />
        <div class="grid grid-cols-5 gap-1 pt-4">
          <img
            class="h-full w-full col-start-1 col-end-3 row-start-1 row-end-3"
            src={product.product[0].image}
            alt="None"
          />
          {product.product.slice(1).map((each) => {
            return (
              <Product
                key={each.id}
                ItemHandaler={updateItems}
                item={each}
              ></Product>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

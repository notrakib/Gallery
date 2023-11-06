import "./App.css";
import Product from "./components/product";
import Header from "./components/header";
import { useContext, useRef, useState } from "react";
import ProductContext from "./store/productContext";
import icon8 from "./images/icons8.png";
let dragRank;

const App = () => {
  const product = useContext(ProductContext);
  const [selectedItem, setSelectedItem] = useState([]);
  const ref = useRef();

  const updateItems = (id) => {
    const exist = selectedItem.filter((each) => each.id === id);
    if (exist) {
      setSelectedItem(selectedItem.filter((each) => each.id != id));
    } else {
      setSelectedItem((previous) => [...previous, id]);
    }
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (rank) => {
    dragRank = rank;
  };

  const drop = (ev, rank) => {
    ev.preventDefault();
    product.arrange_product(dragRank, rank);
  };

  // const AddProduct = () => {
  //   if (ref.current.files[0]) {
  //     console.log(URL.createObjectURL(ref.current.files[0]));
  //   }
  // };

  return (
    <div class="p-8 bg-slate-300">
      <div class="p-8 rounded-md bg-white">
        <Header />
        <div class="grid grid-cols-5 gap-4 pt-4">
          <img
            class="h-full w-full col-start-1 col-end-3 row-start-1 row-end-3 relative border-2 border-slate-300 rounded-xl"
            src={product.product[0].image}
            alt="None"
            onDragOver={(event) => allowDrop(event)}
            onDrop={(event) => drop(event, product.product[0].rank)}
          />
          {product.product.slice(1).map((each) => {
            return (
              <Product
                key={each.id}
                ItemHandaler={updateItems}
                item={each}
                allowDrop={allowDrop}
                drag={drag}
                drop={drop}
              ></Product>
            );
          })}
          <div
            onClick={() => {
              ref.current.click();
            }}
            class="h-full w-full flex flex-col justify-center border-2 border-slate-300 rounded-xl"
          >
            <input class="hidden justify-self-center" ref={ref} type="file" />
            <img class="h-5 w-5 self-center mb-2" src={icon8} alt="None"></img>
            <p class="self-center mt-2">Add Images</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

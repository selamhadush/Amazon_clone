import { useState } from "react";
import favicon from "./assets/favicon.ico";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/CarouselEffect";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import Routing from "./Routing";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routing />
      {/* <div> */}
      {/* <a href="https://vitejs.dev" target="_blank"> */}
      {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
      {/* </a> */}
      {/* </div>
      <Header />
      <Carousel />
      <Category />
      <Product /> */}
    </>
  );
}

export default App;

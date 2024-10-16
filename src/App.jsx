import { useState } from "react";
import favicon from "./assets/favicon.ico";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank"> */}
        {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        {/* </a> */}
      </div>
      <Header />
    </>
  );
}

export default App;

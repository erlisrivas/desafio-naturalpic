import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Context from "./Context"
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [fotos, setFotos] = useState([]);

  const endpoint = "/fotos.json";
  const fotosGaleria = async () => {
    const res = await fetch (endpoint);
    let data = await res.json();
    let dataFiltrada = data.photos.map((e) =>({
      id: e.id,
      src: e.src.tiny,
      desc: e.alt,
      favorito: false
    }));
    setFotos(dataFiltrada);
  };

  useEffect(()=>{
    fotosGaleria(); 
  }, []);


  return (
    <div className="App">
      <Context.Provider value={{fotos, setFotos}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

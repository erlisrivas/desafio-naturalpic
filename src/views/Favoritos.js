import "../assets/css/galeria.css";
import {useContext} from "react"
import Context from "../Context";

export default function Home() {
  const{fotos, setFotos} = useContext (Context);

  const deleteFavoritos = (id)=> {
    const fotoIndex = fotos.findIndex((elem) => elem.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };
  
  return (
    <div className="Home">
      <h1>Natural Pic</h1>
      <div className="galeria grid-columns-4 p-3">
        {fotos.filter((elem)=>elem.favorito).map((elem, i) =>(
          <div
          className="descripcion"
          style = {{backgroundImage: `url(${elem.src})`}}
          key={i}
          onClick = {() => deleteFavoritos (elem.id)}
          >
          <p>{elem.desc}</p>
          </div>
          
        ))}
      </div>
      
    </div>
  );
}

  
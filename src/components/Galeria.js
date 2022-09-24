import "../assets/css/galeria.css";
import Heart from "./Heart";
import {useContext} from "react"
import Context from "../Context";


export default function Galeria() {

  const{fotos, setFotos} = useContext (Context);

  const setFavorito = (id)=>{
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-4 p-3">
      {fotos.map((elem, i)=> (
        <div onClick = {() => setFavorito (elem.id)}
        className ="foto"
        style = {{backgroundImage: `url(${elem.src})`}}
        key = {i}
        >
        <Heart filled={elem.favorito}/>
        <p>{elem.desc}</p>
        </div>
      ))}
    </div>
  );
}

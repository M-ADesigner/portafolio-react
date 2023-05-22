import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./style.css";
import jsonNotFound from "../../UI/Templates/404.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function NotFound() {

  useEffect(() => {
    return () => {
      AOS.init();

    }
  }, [])
  

  return (
    <div className="containerNotFound" data-aos="fade-right">
      <div className="titleContainer">
        <h3>Ooops..</h3>
    <h1>404</h1>
    <h3>La pagina web no existe</h3>
    <p>No encontramos lo que estás buscando.</p>
    <p>_________________________________________________________________</p>
    <button >Volver</button>
      </div>
      <Player
        autoplay
        loop
        src= {jsonNotFound}
        style={{ height: "500px", width: "500px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}

export default NotFound;

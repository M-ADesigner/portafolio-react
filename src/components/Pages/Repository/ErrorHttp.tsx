import { Player, Controls } from "@lottiefiles/react-lottie-player";
import json41 from "../../UI/Templates/401.json";
import Button from 'react-bootstrap/Button';
import "./repository.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ErrorHttp() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="containerError" data-aos="zoom-in">  
      <div className="titleError">
        <h3>Ooops..</h3>
        <h1>401</h1>
        <h3>No tiene permisos</h3>
        <p>"Lamentablemente no tiene permisos".</p>
        <p>_________________________________________________________________</p>
        <Button className="primary">Volver</Button>
      </div>
      <Player
        autoplay
        loop
        src={json41}
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

export default ErrorHttp;

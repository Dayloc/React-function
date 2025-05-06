import React from "react";
import Prueba1 from "./Prueba1";
import Prueba2 from "./Prueba2";
import Prueba3 from "./Prueba3";
import { Prueba4 } from "./Prueba4";
import { PruebaClase } from "./ComponenteClase";
import Tarea1 from "./Tarea1";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <Tarea1 />
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>

      <Prueba1 />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

function Prueba1() {
  //useState
  const [numero1, setNumero1] = useState(0);
  const [color, setColor] = useState("red");

  console.log({ numero1 });
  useEffect(() => {
    console.log("El componente se ha montado");
    // Cambiar el color a azul después de 2 segundos
    const timer = setTimeout(() => {
      setColor("blue");
    }, 5000);
  }, []);

  function handleClick() {
    setNumero1(numero1 + 1);
  }
  function handleClick2() {
    setNumero1(numero1 - 1);
  }

  function handleClick3() {
    setNumero1(0);
  }
  console.log({ color });
  return (
    <div>
      <h1>Prueba1</h1>
      <p>{numero1}</p>
      <button className="btn btn-primary m-4 " onClick={() => handleClick()}>
        +1
      </button>
      <button className="btn btn-primary m-4" onClick={() => handleClick2()}>
        -1
      </button>
      <button className="btn btn-primary m-4" onClick={() => handleClick3()}>
        Resset
      </button>
    </div>
  );
}

export default Prueba1;

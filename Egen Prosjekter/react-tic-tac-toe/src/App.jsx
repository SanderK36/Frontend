// neste steg er å legge til alternative X og O ved klikk, og lage vinnende logikk

import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
    className="square"
    onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return(
    <>
      <div className="bord-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="bord-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="bord-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
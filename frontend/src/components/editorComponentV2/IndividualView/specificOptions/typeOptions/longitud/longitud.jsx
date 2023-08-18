import { useState } from "react";

export const LongitudInput = ({ specFunctions, data }) => {
  //Desestrructuramos las props
  const { handleTypeProps, handleCancelSpec } = specFunctions;
  const [comandoIndividual] = data;

  const [longitud, setLongitud] = useState(0);

  return (
    <div className="longitud" >
      <p>Cambiar longitud</p>
      <p>Longitud actual {comandoIndividual.propType.longitud}</p>
      <input onChange={(e) => setLongitud(e.target.value)} type="number" />
      <button onClick={() => handleTypeProps("longitud", longitud)}>
        Guardar cambios
      </button>
      <button onClick={() => handleCancelSpec("longitud")}>
        Cancelar cambios
      </button>
    </div>
  );
};

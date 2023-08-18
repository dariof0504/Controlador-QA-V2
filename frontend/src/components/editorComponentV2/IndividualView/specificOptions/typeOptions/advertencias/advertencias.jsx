import { useEffect, useState } from "react";
import uuid from "react-uuid";

export const AdvertenciasModule = ({ specFunctions, data }) => {
  //Desestrructuramos las props
  const { handleCancelSpec, handleTypeProps } = specFunctions;
  const [comandoIndividual] = data;
  const { advertencias } = comandoIndividual.propType;

  //Estados necesarios para el form
  const [listaAdvertencias, setListaAdvertencias] = useState(advertencias);
  const [advertenciaField, setAdvertenciaField] = useState("");

  //Actualiza el estado de las advertencias en pantalla
  useEffect(() => {
    setListaAdvertencias(advertencias);
  }, [advertencias]);

  //Funcion para añadir advertencias
  const addAdvertencia = () => {
    const result = {
      id: uuid(),
      value: advertenciaField,
    };
    const nuevaLista =
      listaAdvertencias.length > 0 ? [...listaAdvertencias, result] : [result];
    setListaAdvertencias(nuevaLista);
  };

  //Funcion para eliminar advertencias, necesita el ID de la advertencia a eliminarr
  const deleteAdvertencia = (id) => {
    const filterList = listaAdvertencias.filter((adv) => adv.id !== id);

    setListaAdvertencias(filterList);
  };

  //Funcion para cancelar los cambios
  const editCancel = (llave) => {
    handleCancelSpec(llave);
    setListaAdvertencias(advertencias);
  };

  return (
    <>
      <div className="divAdvertencias">
        <input
          type="text"
          onChange={(e) => setAdvertenciaField(e.target.value)}
        ></input>
        <button onClick={() => addAdvertencia()}>Añadir advertencia</button>
        <button
          className="advertencias"
          onClick={() => handleTypeProps("advertencias", listaAdvertencias)}
        >
          Establece advertencias
        </button>
        <button onClick={() => editCancel("advertencias")}>
          Cancelar cambios
        </button>
      </div>
      <div className="listAdvertencias">
        {listaAdvertencias.map((advertencia) => (
          <div>
            <p>{advertencia.value}</p>
            <button onClick={() => deleteAdvertencia(advertencia.id)}>
              Eliminar advertencia
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

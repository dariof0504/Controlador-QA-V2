import { useEffect, useState } from "react";

export const GeneralOptions = ({ data, generalFunctions }) => {
  //Desestructuramos las propiedades
  const [comandoIndividual] = data;
  const [handleComandoIndividualGeneral, handleCancel] =
    generalFunctions;

  //Valor de las opciones para los inputs
  const optionsValues = {
    typeLocation: ["xpath", "css"],
    command: ["click", "type"],
  };

  //Valores default para los apartados
  const fieldValues = {
    value: "",
    location: "",
  };

  //Establecemos un estado para los apartados
  const [field, setField] = useState(fieldValues);
  //Desestructuramos el objeto de los apartados para convertirlo en un array
  const optionKeys = Object.keys(optionsValues);
  const fieldKeys = Object.keys(fieldValues);

  //Esta funcion es para los apartados tipo texto
  //Los apartados de seleccion realizaran el cambio
  //Esto realiza el cambio solo al estado de los apartados actuales, para confirmar los cambios al comando en edicion, se utiliza otra funcion
  const handleSetfield = (e) => {
    //Establece los datos segun el evento
    const instance = e.target.className;
    const value = e.target.value;
    //Crea un nuevo objeto
    const result = { ...field, [instance]: value };
    //Cambia los datos
    setField(result);
  };

  //Cada vez que se modifique un apartado del comanddo individual,
  useEffect(() => {
    setField(fieldValues);
  }, [comandoIndividual]);

  return (
    <div>
      {optionKeys.map((optional) => (
        <>
          <p>Instancia tipo {optional}</p>
          {/* Llama al valor actual del comando en edicion */}
          <p>Valor {comandoIndividual[optional]}</p>
          {/* Segun las opciones cambien, hará el cambio directo al comando */}
          <select
            className={optional}
            value={comandoIndividual[optional]}
            onChange={(e) => handleComandoIndividualGeneral(e)}
          >
            {optionsValues[optional].map((o) => (
              <option value={o}>{o}</option>
            ))}
          </select>
          {/* En caso querramos volver al valor anterior, usamos este boton */}
          <button onClick={() => handleCancel(optional)}>
            Cancelar cambios
          </button>
        </>
      ))}
      {fieldKeys.map((text) => (
        <>
          <p>Instancia tipo {text}</p>
          {/* Llamamos al valor actual en edicion */}
          <p>Valor {comandoIndividual[text]}</p>
          <input
            value={field[text]}
            className={text}
            onChange={(e) => handleSetfield(e)}
            type="text"
          ></input>
          {/* Confirmamos los cambios y los enviamos al comando en edicion */}
          <button
            value={field[text]}
            className={text}
            onClick={(e) => handleComandoIndividualGeneral(e)}
          >
            Guardar
          </button>
          {/* Si queremos cancelar los cambios seleccionamos este boton */}
          <button onClick={() => handleCancel(text)}>Cancelar cambios</button>
        </>
      ))}
    </div>
  );
};

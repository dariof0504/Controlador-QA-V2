import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addComandos } from "../../../data/slices/editorSlice";

export const FormAction = ({ data }) => {
  const comandos = data;

  const lastIndex = comandos ? comandos.length : 0
  
  const dispatch = useDispatch()

  const comandoInicial = {
    command: "click",
    location: "",
    typeLocation: "xpath",
    value: ""
  };

  const [nuevoComando, setNuevoComando] = useState(comandoInicial);

  const handleValue = (e) => {
    const instance = e.target.className;
    const value = e.target.value;

    let comando = { ...nuevoComando, [instance]: value };

    if (instance === "value") {
      const validarTipoDeDato = parseFloat(value) ? true : false;

      const tipoDeDato = validarTipoDeDato ? "number" : "string";

      comando = { ...comando, tipoDeDato };
    }

    setNuevoComando(comando);
  };

  const handleAddAction = (e) => {
    e.preventDefault();

    const comando = { ...nuevoComando, index: lastIndex };

    console.log(comando)
    dispatch(addComandos(comando))

  };

  return (
    <form onSubmit={(e) => handleAddAction(e)}>
      <p>Titulo de la accion</p>
      <input
        required
        type="text"
        className="titulo"
        onChange={(e) => handleValue(e)}
      />
      <p>Que valor tiene la accion</p>
      <input
        required
        type="text"
        className="value"
        onChange={(e) => handleValue(e)}
      />
      <p>Seleccionar el tipo de comando</p>
      <select className="command" onChange={(e) => handleValue(e)}>
        <option value="click">Click</option>
        <option value="type">Type</option>
      </select>
      <p>Cual es la ubicacion del elemento</p>
      <input
        required
        type="text"
        className="location"
        onChange={(e) => handleValue(e)}
      />
      <p>Cual es el tipo de ubicacion del elemento</p>
      <select className="typeLocation" onChange={(e) => handleValue(e)}>
        <option value="xpath">XPATH</option>
        <option value="css">CSS Selector</option>
        <option value="id">ID Accesibility</option>
        <option value="classname">ClassName</option>
      </select>      
      <button type="submit">Añadir accion</button>
    </form>
  );
};

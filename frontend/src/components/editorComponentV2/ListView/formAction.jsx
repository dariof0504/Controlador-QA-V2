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
      <select className="command" onChange={(e) => handleValue(e)}>
        <option value="click">Click</option>
        <option value="string">String</option>
      </select>
      <input
        required
        type="text"
        className="location"
        onChange={(e) => handleValue(e)}
      />
      <select className="typeLocation" onChange={(e) => handleValue(e)}>
        <option value="xpath">XPATH</option>
        <option value="css">CSS Selector</option>
      </select>
      <input
        required
        type="text"
        className="value"
        onChange={(e) => handleValue(e)}
      />
      <button type="submit">Añadir accion</button>
    </form>
  );
};

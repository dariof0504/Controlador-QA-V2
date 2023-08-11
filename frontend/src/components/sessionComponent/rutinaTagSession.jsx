import { useDispatch } from "react-redux";
import { addRutinaSession } from "../../data/slices/sessionSlice";
import { useState } from "react";

export const RutinaTagSession = ({ rutina }) => {
  const dispatch = useDispatch();

  const [rutinaEdit, setRutinaEdit] = useState({
    ...rutina,
    tipoTest: "normal",
  });

  const handleRutinaEdit = (e) => {
    const instance = e.target.className;
    const value = e.target.value;

    const result = { ...rutinaEdit, [instance]: value };

    setRutinaEdit(result);
  };

  const handleAddRutina = () => {
    dispatch(addRutinaSession(rutinaEdit));
  };

  const tipoTestOptions = ["estres", "validacion", "normal"];

  return (
    <div>
      <p>{rutina.titulo}</p>
      <select value={rutinaEdit.tipoTest} className="tipoTest" onChange={(e) => handleRutinaEdit(e)}>
        {tipoTestOptions.map(test => <option value={test} >{test}</option>)}
      </select>
      <button onClick={handleAddRutina}>Añadir</button>
    </div>
  );
};

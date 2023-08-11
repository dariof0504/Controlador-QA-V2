import { useDispatch } from "react-redux";
import { addRutinaSession } from "../../data/slices/sessionSlice";
import { useState } from "react";
import uuid from "react-uuid";

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

    const rutinaResult = {...rutinaEdit, id: uuid()}

    dispatch(addRutinaSession(rutinaResult));
  };

  const tipoTestOptions = ["estres", "validacion", "normal"];

  return (
    <div>
      <p>{rutina.titulo}</p>
      <select
        value={rutinaEdit.tipoTest}
        className="tipoTest"
        onChange={(e) => handleRutinaEdit(e)}
      >
        {tipoTestOptions.map((test) => (
          <option value={test}>{test}</option>
        ))}
      </select>
      {rutinaEdit.tipoTest === "estres" && (
        <div>
          <p>Numero de repeticiones</p>
          <input
            type="number"
            className="repeticiones"
            onChange={(e) => handleRutinaEdit(e)}
          />
        </div>
      )}
      <button onClick={handleAddRutina}>Añadir</button>
    </div>
  );
};

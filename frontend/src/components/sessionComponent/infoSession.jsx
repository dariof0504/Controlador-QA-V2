import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInstanceSession } from "../../data/slices/sessionSlice";

export const InfoSession = ({ sessionInfo }) => {
  const dispatch = useDispatch();

  const [editSessionInfo, setEditSessionInfo] = useState(sessionInfo);

  const generalFields = ["titulo", "targetURL"];

  const handleInfoEdit = (e) => {
    const instance = e.target.className;
    const value = e.target.value;

    const result = { ...editSessionInfo, [instance]: value };

    setEditSessionInfo(result);
  };

  const handleSave = (e) => {
    const instance = e.target.className;
    const value = e.target.value;

    dispatch(setInstanceSession({ instance, value }));
  };

  return (
    <div>
      {generalFields.map((field) => (
        <div>
          <p>{field.toUpperCase()}</p>
          <p>
            {sessionInfo[field].length > 0
              ? sessionInfo[field]
              : "Aun no hay apartado"}
          </p>
          <input className={field} onChange={(e) => handleInfoEdit(e)} />
          <button
            value={editSessionInfo[field]}
            className={field}
            onClick={(e) => handleSave(e)}
          >
            Guardar cambios
          </button>
        </div>
      ))}
      <p>Selecciona el servicio donde se ejecuta</p>
      <select defaultValue='selenium' className="servicio" onChange={(e) => handleSave(e)}>
        <option value="selenium">Selenium</option>
        <option value="appium">Appium</option>
      </select>
    </div>
  );
};

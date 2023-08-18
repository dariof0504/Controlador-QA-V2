import { CommandTag } from "./commandTag";
import { useEffect, useState } from "react";
import { FormAction } from "./formAction";
import { useDispatch } from "react-redux";
import { setInstanceRutina } from "../../../data/slices/editorSlice";
import { SaveButton } from "./saveButton";
import "./style.css";

export const ListCommands = ({ data }) => {
  const [validador, setValidador] = useState(false);

  const { comandos } = data;

  const dispatch = useDispatch();

  const [fieldValues, setFieldValues] = useState({
    titulo: "",
    servicio: "",
    targetURL: "",
  });

  const typeFieldKeys = ["titulo", "targetURL"];

  useEffect(() => {
    const val = comandos.length > 0 ? true : false;
    setValidador(val);
  }, [comandos]);

  const handleEdit = (e) => {
    const instance = e.target.className;
    const value = e.target.value;

    dispatch(setInstanceRutina({ instance, value }));
  };

  return (
    <div className="listCommands" style={{ width: "800px" }}>
      <div className="generalFields" >
        <p>Tipo de servicio</p>
        <select
          value={data.servicio}
          className="servicio"
          onChange={(e) => handleEdit(e)}
        >
          <option value="SELENIUM">SELENIUM</option>
          <option value="APPIUM">APPIUM</option>
        </select>

        {typeFieldKeys.map((field) => (
          <>
            <p>{field}</p>
            <p>{data[field]}</p>
            <input
              type="text"
              className={field}
              onChange={(e) =>
                setFieldValues({ ...fieldValues, [field]: e.target.value })
              }
            />
            <button
              value={fieldValues[field]}
              className={field}
              onClick={(e) => handleEdit(e)}
            >
              Guardar cambios
            </button>
          </>
        ))}
      </div>
      <hr></hr>
      <FormAction data={comandos} />
      <hr></hr>
      <div>
        {validador ? (
          comandos.map((comando) => <CommandTag comando={comando} />)
        ) : (
          <p>Aun no hay comandos</p>
        )}
      </div>
      <hr></hr>
      <SaveButton data={data} />
    </div>
  );
};

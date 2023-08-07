import { CommandTag } from "./commandTag";
import { useEffect, useState } from "react";

import { FormAction } from "./formAction";
import { useDispatch, useSelector } from "react-redux";
import { setInstanceRutina } from "../../../data/slices/editorSlice";
import { useSaveRutinaMutation } from "../../../api/apiSideEndpoints";
import { useNavigate } from "react-router-dom";

export const ListCommands = ({ data }) => {
  const [validador, setValidador] = useState(false);

  const { comandos } = data;

  const [request, {status}] = useSaveRutinaMutation()

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const rutinaEdit = useSelector(state => state.editorComponentReducer)

  const [fieldValues, setFieldValues] = useState({
    titulo: "",
    servicio: "",
    targetURL: "",
  })

  const [rutina, setRutina] = useState({})
  const typeFieldKeys = ["titulo", "targetURL"];


  useEffect(() => {
    const val = comandos.length > 0 ? true : false;
    setValidador(val);
  }, [comandos]);



  const handleEdit = (e) => {
    const instance = e.target.className;
    const value = e.target.value

    dispatch(setInstanceRutina({instance,value}))
  };

  const handleSaveEdit = async () => {
    const data = await request(rutinaEdit)
    console.log(data)
    navigate('/rutinas')
  }

  return (
    <div>

      <p>Tipo de servicio</p>
      <select value={data.servicio} className="servicio" onChange={e => handleEdit(e)} >
        <option value='SELENIUM' >SELENIUM</option>
        <option value='APPIUM' >APPIUM</option>
      </select>

      

      {typeFieldKeys.map((field) => (
        <>
          <p>{field}</p>
          <p>{data[field]}</p>
          <input
            type="text"
            className={field}
            onChange={(e) => setFieldValues({...fieldValues, [field] : e.target.value})}
          />
          <button value={fieldValues[field]} className={field} onClick={(e) => handleEdit(e)}>
            Guardar cambios
          </button>
        </>
      ))}
      <hr></hr>
      <p>Añadir acciones</p>
      <FormAction data={comandos} />
      <hr></hr>
      {validador ? (
        comandos.map((comando) => <CommandTag comando={comando} />)
      ) : (
        <p>Aun no hay comandos</p>
      )}
      <button onClick={() => handleSaveEdit()} >Enviar Rutina</button>
    </div>
  );
};

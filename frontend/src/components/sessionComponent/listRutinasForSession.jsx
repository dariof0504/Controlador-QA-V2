import { useDispatch } from "react-redux";
import { deleteRutinaSession } from "../../data/slices/sessionSlice";

export const ListRutinasForSession = ({ sessionInfo }) => {
  const { rutinasPorEjecutar } = sessionInfo;

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteRutinaSession(id))
  }

  return (
    <div>
      <p>Rutinas actuales</p>
      {rutinasPorEjecutar.map((rutina) => (
        <div>
          <p>{rutina.titulo}</p>
          <p>Tipo de rutina: {rutina.tipoTest}</p>
          {rutina.tipoTest === "estres" && <p>Numero de repeticiones: {rutina.repeticiones}</p>}
          <button onClick={() => handleDelete(rutina.id)} >Eliminar</button>
        </div>
      ))}
      <hr></hr>
    </div>
  );
};

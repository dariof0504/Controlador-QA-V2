import { useListIndividualSessionQuery } from "../../api/apiSideEndpoints";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsEditSession, setSession } from "../../data/slices/sessionSlice";
import { setExecuterSession } from "../../data/slices/executeSlice";

export const ButtonTagSession = ({ pk_id_session }) => {

  const { data } = useListIndividualSessionQuery(pk_id_session)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = async () => {
    const result = await data
    dispatch(setSession(result))
    dispatch(setIsEditSession(true))
    navigate('/editSession')
  }

  const handleExecute = async () => {
    const result = await data
    dispatch(setExecuterSession(result))
    navigate('/execute')
  }
  

  return (
    <div>
      <button onClick={handleEdit} >Editar</button>
      <button onClick={handleExecute} >Ejecutar</button>
      <button>Eliminar</button>
    </div>
  );
};

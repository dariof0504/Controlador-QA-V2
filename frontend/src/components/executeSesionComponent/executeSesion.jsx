import { useNavigate } from "react-router-dom";
import { useExecuteSessionMutation } from "../../api/apiSideEndpoints";
import { useDispatch } from "react-redux";
import { deleteExecuterSession } from "../../data/slices/executeSlice";

export const ExecuteSesion = ({data}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [reqExecute, {status}] = useExecuteSessionMutation()

  const { session } = data

  const { titulo, pk_id_session } = session

  const handleExecute = async () => {
    const result = await reqExecute(pk_id_session)
    console.log(result.data)
  }

  const handleBackHome = () => {
    dispatch(deleteExecuterSession())
    navigate('/')
  }

  return (<div>
    <h1>Session {titulo}</h1>
    <button onClick={handleExecute} >Ejecutar</button>
    <button onClick={handleBackHome} >Volver al inicio</button>
  </div>);
};

import { useDispatch } from "react-redux";
import { deleteComandos, selectComandoIndividual } from "../../../data/slices/editorSlice";
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid'

export const CommandTag = ({comando}) => {

  const { index, titulo, command } = comando

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSelectComandoIndividual = () => {
    dispatch(selectComandoIndividual(index))
    navigate('/editCommand')
  }

  const handleDeleteComando = () => {
    dispatch(deleteComandos(index))
    console.log('exe')
  }

  return (
    <div key={uuid()} >
      <p>{titulo ? titulo : 'No tiene titulo'}</p>
      <p>Tipo de accion {command}</p>
      <p>Accion numero {index}</p>
      <button onClick={() => handleSelectComandoIndividual()} >Editar</button>
      <button onClick={() => handleDeleteComando()} >Eliminar</button>
    </div>
  );
};

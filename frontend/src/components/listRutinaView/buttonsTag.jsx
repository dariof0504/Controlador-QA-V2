import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useListIndividualRutinaQuery } from "../../api/apiSideEndpoints"
import { setRutina, setTurnNew } from "../../data/slices/editorSlice"

export const ButtonsTag = ({pk_id_rutina}) => {

  const {data} = useListIndividualRutinaQuery(pk_id_rutina)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const handleEdit = async () => {
    const result = await data
    dispatch(setRutina(result))
    dispatch(setTurnNew('edit'))
    navigate('/editRutina')
  }

  const handleDelete = () => {
    console.log('Se va a eliminar')
  }

  return (
    <div>
      <button onClick={handleEdit} >Editar</button>
      <button onClick={handleDelete} >Eliminar</button>
    </div>
  )
}

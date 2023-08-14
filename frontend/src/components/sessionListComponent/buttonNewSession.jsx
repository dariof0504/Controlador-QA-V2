import { useDispatch } from "react-redux"
import { setIsEditSession } from "../../data/slices/sessionSlice"
import { useNavigate } from "react-router-dom"

export const ButtonNewSession = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNewSession = () => {
    dispatch(setIsEditSession(false))
    navigate('/editSession')
  }

  return (
    <button onClick={handleNewSession}>Crear nueva sesion</button>
  )
}

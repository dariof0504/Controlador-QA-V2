import { useNavigate } from "react-router-dom"
import './style.css'

export const HomeOptions = () => {
  
  const navigate = useNavigate()

  const handleNavigate = (route) => {
    navigate(`/${route}`)
  }

  return (
    <div className="homeDiv" >
      <h1>Controlador General QA</h1>
      <div className="rutinas" >
        <h2>Modulo de rutinas</h2>
        <button onClick={() => handleNavigate('createRutina')} >Crear nueva rutina</button>
        <button onClick={() => handleNavigate('listRutinas')} >Ver las rutinas disponibles</button>
      </div>
      <div className="sesiones" >
        <h2>Modulo de sesiones</h2>
        <button onClick={() => handleNavigate('editSession')} >Crear nueva sesion</button>
        <button onClick={() => handleNavigate('listSession')} >Ver las sesiones disponibles</button>
      </div>
    </div>
  )
}

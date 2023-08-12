import { useNavigate } from "react-router-dom"

export const HomeOptions = () => {
  
  const navigate = useNavigate()

  const handleNavigate = (route) => {
    navigate(`/${route}`)
  }

  return (
    <div>
      <h1>Controlador General QA</h1>
      <div>
        <h2>Modulo de rutinas</h2>
        <button onClick={() => handleNavigate('createRutina')} >Crear nueva rutina</button>
        <button onClick={() => handleNavigate('listRutinas')} >Ver las rutinas disponibles</button>
      </div>
      <div>
        <h2>Modulo de sesiones</h2>
        <button onClick={() => handleNavigate('editSession')} >Crear nueva sesion</button>
        <button onClick={() => handleNavigate('listSession')} >Ver las sesiones disponibles</button>
      </div>
    </div>
  )
}

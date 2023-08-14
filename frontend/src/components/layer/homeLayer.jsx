import { useNavigate } from "react-router-dom";

export const HomeLayer = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (<div>
    <button onClick={handleNavigate} >Volver al inicio</button>
  </div>);
};

import { HomeLayer } from "../layer/homeLayer";
import { ButtonsTag } from "./buttonsTag";
import './style.css'

export const ListRutinasMain = ({ data }) => {
  return (
    <div className="listRutinas" >
      <HomeLayer />
      <h1>Listado de rutinas creadas</h1>
      {data.map((dat) => (
        <div className="rutina" >
          <p>{dat.titulo}</p>
          <ButtonsTag pk_id_rutina={dat.pk_id_rutina} />
        </div>
      ))}
    </div>
  );
};

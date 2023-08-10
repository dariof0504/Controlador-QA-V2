import { ButtonsTag } from "./buttonsTag";

export const ListRutinasMain = ({data}) => {

  return (
    <div>
      <h1>Listado de rutinas creadas</h1>
      {data.map(dat => (<div><h1>{dat.titulo}</h1><ButtonsTag id={dat.id} /></div>))}
    </div>
  );
};

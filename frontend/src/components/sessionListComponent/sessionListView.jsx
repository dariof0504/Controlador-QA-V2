import { ButtonTagSession } from "./buttonTagSession";

export const SessionListView = ({ data }) => {
  return (
    <div>
      <h1>Lista de sesiones creadas</h1>
      {data.map((dat) => (
        <div>
          <h1>{dat.titulo}</h1>
          <ButtonTagSession pk_id_session={dat.pk_id_session} />
        </div>
      ))}
    </div>
  );
};

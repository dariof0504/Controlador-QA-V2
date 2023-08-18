import { useEffect, useState } from "react";
import { RutinaTagSession } from "./rutinaTagSession";
import { InfoSession } from "./infoSession";
import { ListRutinasForSession } from "./listRutinasForSession";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useCreateSessionMutation, useEditSessionMutation } from "../../api/apiSideEndpoints";
import { deleteAllSessionInfo } from "../../data/slices/sessionSlice";
import {useNavigate} from 'react-router-dom'
import './style.css'

export const SessionEditorComponent = ({ rutinaInfo, sessionInfo }) => {
  const { data, status } = rutinaInfo;

  const [rutinas, setRutinas] = useState([]);
  const [buttonRutinas, setButtonRutinas] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [reqSave, { status: statusRequest }] = useCreateSessionMutation();
  const [reqEdit, {status: statusEdit}] = useEditSessionMutation()

  useEffect(() => {
    if (status === "fulfilled") {
      setRutinas(data);
    }
  }, [status]);

  const handleSaveRutina = async () => {
    if (sessionInfo.isEdit) {
      
      console.log(sessionInfo)

      const result = await reqEdit(sessionInfo)

      result && console.log('Edicion hecha')

    } else {
      const element = { ...sessionInfo, pk_id_session: uuid() };

      const result = await reqSave(element);

      result && console.log("HECHO");
    }

    
    dispatch(deleteAllSessionInfo())
    navigate('/listSession')

  };

  return (
    <div className="sessionEditor" >
      <h1>Session Editor</h1>
      <InfoSession sessionInfo={sessionInfo} />
      <p>Linea de tiempo de rutinas</p>
      <ListRutinasForSession sessionInfo={sessionInfo} />
      <div className="checkRutinas" >
        <label for="checkRutina" >Ver Rutinas disponibles</label>
        <input
          id="checkRutina"
          type="checkbox"
          checked={buttonRutinas}
          onChange={() => setButtonRutinas(!buttonRutinas)}
        />
        
      </div>
      <button onClick={handleSaveRutina}>Guardar sesion</button>
      <div className="listRutinasSession" >
      {buttonRutinas &&
        rutinas.length > 0 &&
        rutinas.map((rutina) => <RutinaTagSession rutina={rutina} />)}
      </div>
    </div>
  );
};

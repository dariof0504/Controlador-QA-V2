import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInstanceSession } from "../../data/slices/sessionSlice";

export const InfoSession = ({ sessionInfo }) => {

	const dispatch = useDispatch()

	const [editSessionInfo, setEditSessionInfo] = useState(sessionInfo)

	const handleInfoEdit = (e) => {
		const instance = e.target.className
		const value = e.target.value

		const result = {...editSessionInfo, [instance] : value}

		setEditSessionInfo(result)
	}

	const handleSave = (e) => {
		const instance = e.target.className
		const value = e.target.value 

		dispatch(setInstanceSession({instance,value}))
	}

  return (
    <div>
      <p>Titulo</p>
			<p>{sessionInfo.titulo.length > 0 ? sessionInfo.titulo : 'Aun no hay titulo'}</p>
			<input className="titulo" onChange={e => handleInfoEdit(e)} />
			<button value={editSessionInfo.titulo} className="titulo" onClick={e => handleSave(e)} >Guardar cambios</button>
    </div>
  );
};

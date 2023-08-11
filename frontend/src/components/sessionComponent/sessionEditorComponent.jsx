import { useEffect, useState } from "react"
import { RutinaTagSession } from "./rutinaTagSession"
import { InfoSession } from "./infoSession"

export const SessionEditorComponent = ({rutinaInfo, sessionInfo}) => {

	const {data, status} = rutinaInfo

	const [rutinas, setRutinas] = useState([])

	useEffect(() => {
		if (status === 'fulfilled') {
			setRutinas(data)
		}
	},[status])

	return (
    <div>
			<h1>Session Editorr</h1>
			<InfoSession sessionInfo={sessionInfo} />
			{rutinas.length > 0 && rutinas.map(rutina => <RutinaTagSession rutina={rutina} />)}
		</div>
  )
}

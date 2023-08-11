import { useSelector } from "react-redux"
import { useListRutinasQuery } from "../../api/apiSideEndpoints"
import { SessionEditorComponent } from "../../components/sessionComponent/sessionEditorComponent"

export const SessionPage = () => {

  const { data, status } = useListRutinasQuery()
  const sessionInfo = useSelector(state => state.sessionReducer)

  

  return (
    <div>
      <h1>Session Page</h1>
      <SessionEditorComponent rutinaInfo={{data, status}} sessionInfo={sessionInfo} />
    </div>
  )
}

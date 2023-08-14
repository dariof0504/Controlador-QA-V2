import { useSelector } from "react-redux"
import { ExecuteSesion } from "../../components/executeSesionComponent/executeSesion"


export const ExecutorPage = () => {

  const data = useSelector(state => state.executeReducer)

  return (
    <ExecuteSesion data={data} />
  )
}

import { useEffect } from "react"
import { useListSessionsQuery } from "../../api/apiSideEndpoints"
import { useState } from "react"
import { SessionListView } from "../../components/sessionListComponent/sessionListView"

export const ListSessionsPage = () => {

  const { data, status } = useListSessionsQuery()
  const [sesiones, setSesiones] = useState([])
  
  useEffect(() => {
    if (status === 'fulfilled') {
      setSesiones(data)
      console.log(sesiones)
    }
  }, [status])

  return (
    <div>
      <SessionListView data={sesiones} />
    </div>
  )
}

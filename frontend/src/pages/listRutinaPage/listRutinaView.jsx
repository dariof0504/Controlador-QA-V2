import { useEffect } from "react"
import { useListRutinasQuery } from "../../api/apiSideEndpoints"
import { ListRutinasMain } from "../../components/listRutinaView/listRutinas"
import { useState } from "react"

export const ListRutinaView = () => {

  const { data, refetch, status } = useListRutinasQuery()

  const [rutinas, setRutinas] = useState([])
  const [process, setProcess] = useState(data)

  useEffect(() => {
    if (status === 'fulfilled') {
      setRutinas(data)
    }
  }, [status])

  return (
    <div>
      <ListRutinasMain data={rutinas} />
    </div>
  )
}

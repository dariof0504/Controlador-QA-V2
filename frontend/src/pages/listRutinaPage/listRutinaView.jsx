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

  const mockupData = [
    {
      id:1,
      titulo: 'Rutina 1'
    },
    {
      id:2,
      titulo: 'Rutina 2'
    },
    {
      id:3,
      titulo: 'Rutina 3'
    },{
      id:4,
      titulo: 'Rutina 4'
    }
  ]

  return (
    <div>
      <button onClick={() => setProcess(true)} >Boton</button>
      <ListRutinasMain data={rutinas} />
    </div>
  )
}

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { deselectComandoIndividual } from "../../data/slices/editorSlice"
import { deleteInfo } from "../../data/slices/uploadSlice"

export const EditorConfig = () => {

  const dispatch = useDispatch()

  //Quitar la seleccion del comando individual cuando se carga por primera vez
  useEffect(() => {
    dispatch(deselectComandoIndividual())
    dispatch(deleteInfo())
  },[])

  const editorInfo = useSelector(state => state.editorComponentReducer)

  const val = editorInfo.isEdit | editorInfo.isNew ? true : false


  return (
    val ?   <Outlet />  : <Navigate to='/' /> 
  )
}

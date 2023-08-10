import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAllEditInfo } from "../../../data/slices/editorSlice";
import { useSaveRutinaMutation } from "../../../api/apiSideEndpoints";

export const SaveButton = ({data}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [req, {isLoading}] = useSaveRutinaMutation()

	const {isNew, isEdit} = data

  const handleSaveEdit = async () => {
    if (isNew) {

      // console.log(data)
      const result = await req(data)

      result && console.log(result)

      console.log('peticion hecha')

    } else if (isEdit) {
      console.log("elemento editado");
    }

    //Cuando se envie, limpiamos los datos
    dispatch(deleteAllEditInfo());

    //Realizamos la navegacion
    navigate("/rutinas");
  };

  return <button onClick={handleSaveEdit} >Guardar cambios</button>;
};

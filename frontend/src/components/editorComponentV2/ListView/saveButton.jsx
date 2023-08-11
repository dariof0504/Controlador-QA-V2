import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAllEditInfo } from "../../../data/slices/editorSlice";
import { useEditRutinaIndividualMutation, useSaveRutinaMutation } from "../../../api/apiSideEndpoints";

export const SaveButton = ({data}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [req, {isLoading}] = useSaveRutinaMutation()
  const [reqEdit, {isLoading:loadEdit}] = useEditRutinaIndividualMutation() 

	const {isNew, isEdit} = data

  const handleSaveEdit = async () => {
    if (isNew) {

      // console.log(data)
      const result = await req(data)

      result && console.log(result)

      console.log('peticion hecha')

    } else if (isEdit) {
      const result = await reqEdit(data)
      result && console.log(result)
    }

    // //Cuando se envie, limpiamos los datos
    // dispatch(deleteAllEditInfo());

    //Realizamos la navegacion
    navigate("/listRutinas");
  };

  return <button onClick={handleSaveEdit} >Guardar cambios</button>;
};

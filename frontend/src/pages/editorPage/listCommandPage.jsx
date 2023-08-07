import { ListCommands } from "../../components/editorComponentV2/ListView/listCommands";
import { useSelector } from "react-redux";

export const ListCommandView = () => {
  //Se llama a toda la informacion del estado de edicion
  const data = useSelector((state) => state.editorComponentReducer);

  return <ListCommands data={data} />;
};

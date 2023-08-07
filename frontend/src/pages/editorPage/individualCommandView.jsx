import { IndividualView } from "../../components/editorComponentV2/IndividualView/individualView";
import { useSelector } from "react-redux";

export const IndividualCommandView = () => {
  //Se llama solamente al comando que se esta editando
  const { comandoIndividual } = useSelector(
    (state) => state.editorComponentReducer
  );

  return <IndividualView dataComando={comandoIndividual} />;
};

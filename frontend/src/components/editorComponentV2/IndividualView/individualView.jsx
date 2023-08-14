import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GeneralOptions } from "./generalOptionsV2/generalOptions";
import { TypeOptions } from "./specificOptions/typeOptions/typeOptions";
import { ClickOptions } from "./specificOptions/clickOptions/clickOptions";
import { useNavigate } from "react-router-dom";
import {
  saveSelectComanddoIndividual,
  setComandos,
} from "../../../data/slices/editorSlice";

export const IndividualView = ({ dataComando }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Estado de los validadores de componentes
  //Estado validador del tipo de comando actual, muestrra las opciones segun el tipo de comando cambie
  const [typeCommand, setTypeCommand] = useState(false);
  //Estado validador del boton de opciones en pantalla, según el estado muestra las opciones generales o especificas
  const [optionView, setOptionView] = useState(true);

  //Estado del comando en edicion
  const [comandoIndividual, setComandoIndividual] = useState(dataComando);

  //Estados de carga, por default esta apagado, cuando inicia se torna verdaderro
  const [saveEdit, setSaveEdit] = useState(false);

  //Estado de cancelar cambios, por default esta apagado, esto inicia el proceso de cancelacion de cambios
  const [cancelEdit, setCancelEdit] = useState(false);
  const [cancelProps, setCancelProps] = useState(false);

  //Llaves modificadas, captura en el estado, la llave que ha sido modificada la cual queremos atraer el valor default
  const [modifiedKey, setModifiedKey] = useState("");
  const [modKeyProp, setModKeyProp] = useState("");

  //Cada vez que se confirma la peticion, se realiza el cambio de estado al estado en redux
  useEffect(() => {
    //Si el proceso esta iniciado, ejecuta lo siguiente
    if (saveEdit) {
      //Apaga el proceso
      setSaveEdit(false);
      //Guarda los cambios del comando individual en edicion
      dispatch(saveSelectComanddoIndividual(comandoIndividual));
      //Con los cambios guardados, en redux se realiza la funcion para cambiar el estado de los comandos actuales en edicion
      dispatch(setComandos());
      //Navegamos a la pagina de listado de los comandos en edicion
      navigate("/editRutina");
      console.log("guardado Todo el elemento");
    }
  }, [saveEdit]);

  //Cada vez que se cancela la peticion, se realiza el cambio default al estado en redux y se cambia el estado de comando individual
  useEffect(() => {
    //Valida que el proceso de cancelacion este iniciado
    if (cancelEdit) {
      //Trae a la data inicial antes de cambios según la instancia modificada
      const value = dataComando[modifiedKey];
      //Creamos un objeto con las demas propiedades pero modificando solo la instancia y estableciendo el valor default
      const defaultCommand = { ...comandoIndividual, [modifiedKey]: value };
      //Cambiamos el estado actual del comando en edicion
      setComandoIndividual(defaultCommand);
      //Apagamos el proceso de cancelacion
      setCancelEdit(false);
    }
  }, [cancelEdit]);

  //Proceso de cancelacion de cambios para propiedades
  useEffect(() => {
    //Si el proceso de cancelacion esta iniciado, ejecuta lo siguiente
    if (cancelProps) {
      //Primero verifica cuales son las propiedades por modificar según el tipo de comando actual
      const whatProp = typeCommand ? "propType" : "propClick";
      //Creamos un objeto que contenga las demas propiedades del comando en edicion, pero modificando la instancia con el
      const result = {
        ...comandoIndividual,
        [whatProp]: {
          ...comandoIndividual[whatProp],
          [modKeyProp]: dataComando[whatProp][modKeyProp],
        },
      };

      //Establecemos el nuevo estado del comando en edicion
      setComandoIndividual(result);
      //Apagamos el proceso de cancelacion
      setCancelProps(false);
    }
  }, [cancelProps]);

  //Efecto que se ejecuta tras un cambio en el tipo de comando
  useEffect(() => {
    //Cambiamos el estado de las opciones en pantalla
    comandoIndividual.command === "type"
      ? setTypeCommand(true)
      : setTypeCommand(false);
  }, [comandoIndividual.command]);

  //Proceso para realizar cambios en el tipo de dato segun el valor agregado
  useEffect(() => {
    //Validamos si se puede convertir en numero
    const value = parseFloat(comandoIndividual.value) ? "number" : "string";
    //Según la validacion establecemos el tipo de dato
    const result = { ...comandoIndividual, tipoDeDato: value };
    //Guardamos el nuevo estado del comando en edicion
    setComandoIndividual(result);
  }, [comandoIndividual.value]);

  //Funciones para cambiar los estados
  const handleSaveEdit = () => {
    //Inicia el proceso de guardado
    setSaveEdit(!saveEdit);
  };

  //Funciones para cancelar los cambios
  const handleCancel = (llave) => {
    //Establece la llave que ha sido modificada en las propiedades generales
    setModifiedKey(llave);
    //Inicia el proceso de cancelacion
    setCancelEdit(!cancelEdit);
  };

  //Funcion para cancelar cambios de las propiedades
  const handleCancelSpec = (llave) => {
    //Establece la llave que ha siddo modificada en las propiedades especificas
    setModKeyProp(llave);
    //Inicia el proceso de cancelacion
    setCancelProps(!cancelProps);
  };

  //Funcion para cambiar las instancias del comando
  //Necesitan eventos para funcionar

  //Funcion para guardar cambios en las propiedades generales
  const handleComandoIndividualGeneral = (e) => {
    //Capturamos los valores a traves de los eventos que ejecutan
    const instance = e.target.className;
    const value = e.target.value;
    //Establecemos un nuevo objeto con los nuevos cambios
    const result = { ...comandoIndividual, [instance]: value };
    //Actualizamos el estado del comando en edicion
    setComandoIndividual(result);
  };

  //Funcion para guardar cambios de las propiedades
  const handleTypeProps = (instance, value) => {
    const result = {
      ...comandoIndividual,
      propType: { ...comandoIndividual.propType, [instance]: value },
    };
    setComandoIndividual(result);
  };

  const handleClickProps = (instance, value) => {
    const result = {
      ...comandoIndividual,
      propClick: { ...comandoIndividual.propClick, [instance]: value },
    };
    setComandoIndividual(result);
  };

  //Props
  const data = [comandoIndividual];
  const generalFunctions = [handleComandoIndividualGeneral, handleCancel];
  const specFunctions = { handleCancelSpec, handleClickProps, handleTypeProps };

  return (
    <div>
      <button onClick={() => setOptionView(!optionView)}>
        {optionView ? "Generales" : "Especificos"}
      </button>
      {optionView ? (
        <GeneralOptions data={data} generalFunctions={generalFunctions} />
      ) : typeCommand ? (
        <TypeOptions data={data} specFunctions={specFunctions} />
      ) : (
        <ClickOptions data={data} specFunctions={specFunctions} />
      )}

      <button onClick={() => handleSaveEdit()}>Guardar cambios</button>
    </div>
  );
};

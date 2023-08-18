import { useSideFilterMutation } from "../../api/apiSideEndpoints";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../data/slices/uploadSlice";
import { setIsEditRutina, setRutina } from "../../data/slices/editorSlice";
import { HomeLayer } from "../layer/homeLayer";

import "./style.css";

export const FileReaderComponent = () => {
  const [data, { status }] = useSideFilterMutation();
  const [file, setFile] = useState("");
  const [loadFile, setLoadFile] = useState(false);

  const initialState = {
    id: "",
    titulo: "",
    servicio: "SELENIUM",
    numeroAcciones: 0,
    comandos: [],
    targetURL: "",
  };

  const [rutinaInfo, setRutinaInfo] = useState(initialState);
  const [cargarArchivo, setCargarArchivo] = useState(false);
  const [saveRutina, setSaveRutina] = useState(false);

  const dataFileUploaded = useSelector((state) => state.uploadReducer).test;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Cada vez que el estado de cargar archivo cambia, verrifica que en caso de ser verdadero, establece que el servicio es SELENIUM
  useEffect(() => {
    if (cargarArchivo) {
      const result = { ...rutinaInfo, servicio: "SELENIUM" };
      setRutinaInfo(result);
    }
  }, [cargarArchivo]);

  useEffect(() => {
    //Verificamos que el proceso este encendido
    if (saveRutina) {
      //Si se ha cargado un archivo, realizamos el despacho de los datos de la siguiente manera
      if (cargarArchivo) {
        const result = { ...rutinaInfo, ...dataFileUploaded };

        //Establecemos el estado de la rutina a enviar con los datos del archivo cargado
        dispatch(setRutina(result));
      } else {
        //Establecemos informacion de rutina con la editada en el formulario
        dispatch(setRutina(rutinaInfo));
      }

      //Apagamos el proceso
      setSaveRutina(false);

      //Declaramos que es un nuevo componente
      dispatch(setIsEditRutina(false));

      //Cambiamos de ruta
      navigate("/editRutina");
    }
  }, [saveRutina]);

  const handleJsonReader = (e) => {
    const data = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setFile(content);
        setLoadFile(true);
      } catch (error) {
        console.log(error);
      }
    };

    reader.readAsText(data);
  };

  const handleRutinaInfo = (e) => {
    const instance = e.target.className;
    const value = e.target.value;

    const result = { ...rutinaInfo, [instance]: value };

    setRutinaInfo(result);
  };

  const sendData = async (e) => {
    e.preventDefault();

    if (cargarArchivo) {
      const fetchData = await data(file);
      fetchData && dispatch(uploadFile(fetchData));
    }

    setSaveRutina(true);
  };

  return (
    <form className="fileReader">
      <HomeLayer />
      <div className="firstCard" >
        <p>Escriba el titulo de la rutina</p>
        <input className="titulo" onChange={(e) => handleRutinaInfo(e)}></input>
        <div className="inputCheckbox">
          <label for="cargar">Cargar comandos</label>
          <input
            id="cargar"
            type="checkbox"
            value={cargarArchivo}
            onChange={() => setCargarArchivo(!cargarArchivo)}
          />
        </div>
      </div>
      {cargarArchivo ? (
        <div className="fileUpload">
          <p>Servicio actual es Selenium</p>
          <p>Esta opcion solo esta disponible para Selenium</p>
          <p>Ingrese los comandos</p>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => handleJsonReader(e)}
            accept=".side"
          />
          {loadFile && (
            <button onClick={(e) => sendData(e)}>Crear nueva rutina</button>
          )}
        </div>
      ) : (
        <div className="sinCargar" >
          <p>URL Objetivo</p>
          <input className="targetURL" onChange={(e) => handleRutinaInfo(e)} />
          <p>Servicio en el que se ejecuta</p>
          <select
            className="servicio"
            onChange={(e) => handleRutinaInfo(e)}
            value={rutinaInfo.servicio}
          >
            <option value="SELENIUM">SELENIUM</option>
            <option value="APPIUM">APPIUM</option>
          </select>
          <button onClick={(e) => sendData(e)}>Crear nueva rutina</button>
        </div>
      )}
    </form>
  );
};

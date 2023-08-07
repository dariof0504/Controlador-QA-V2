import { useSideFilterMutation } from "../api/apiSideEndpoints";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../data/slices/uploadSlice";
import uuid from "react-uuid";
import { setRutina } from "../data/slices/editorSlice";

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

        dispatch(setRutina(result));
      } else {
        dispatch(setRutina(rutinaInfo));
      }

      //Apagamos el proceso
      setSaveRutina(false);

      //Cambiamos de ruta
      navigate("/list");
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
    <form>
      <h1>Inserte aca el archivo por leer</h1>
      <p>Titulo</p>
      <input className="titulo" onChange={(e) => handleRutinaInfo(e)}></input>
      <p>Cargar comandos</p>
      <input
        type="checkbox"
        value={cargarArchivo}
        onChange={() => setCargarArchivo(!cargarArchivo)}
      />

      <p>Servicio</p>
      {cargarArchivo ? (
        <div>
          <p>Servicio actual es Selenium</p>
          <p>Esta opcion solo esta disponible para Selenium</p>
          <p>Ingrese los comandos</p>
          <input
            type="file"
            onChange={(e) => handleJsonReader(e)}
            accept=".side"
          />
          {loadFile && (
            <button onClick={(e) => sendData(e)}>Enviar datos</button>
          )}
        </div>
      ) : (
        <div>
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

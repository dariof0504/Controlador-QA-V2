import { createSlice } from "@reduxjs/toolkit";
import { clickPropierties, typePropierties } from "../defaultProps";
import uuid from "react-uuid";

const updateIndex = (comando, comandos) => {
  const index = comandos.indexOf(comando);

  const result = { ...comando, index };

  return result;
};

const initialState = {
  titulo: "",
  servicio: "",
  numeroAcciones: 0,
  targetURL: "",
  pk_id_rutina: "",
  //Estos son los que se han utilizado antes
  comandos: [],
  comandoIndividual: {},
  //Verificacion para saber si es un elemento nuevo o en edicion
  isNew: false,
  isEdit: false
};

const editorComponentSlice = createSlice({
  name: "editorComponent",
  initialState,
  reducers: {
    //Funcion para eliminar comandos
    //Se usa en commandTag
    deleteComandos: (state, { payload }) => {
      const index = payload;

      const newComandos = state.comandos.filter((e) => e.index !== index);

      const result = newComandos.map((c) => updateIndex(c, newComandos));

      state.comandos = result;
    },
    //Funcion para seleccionar un comando para editar
    //Se usa en commandTag
    selectComandoIndividual: (state, { payload }) => {
      const index = payload;

      state.comandoIndividual = state.comandos[index];
    },
    //Funcion para guardar el comando actual en edicion
    //Se usa en individualView
    saveSelectComanddoIndividual: (state, { payload }) => {
      state.comandoIndividual = payload;
    },
    //Funcion para eliminar el comando actual en edicion
    //Se usa en individualView || En editor Config
    deselectComandoIndividual: (state) => {
      state.comandoIndividual = {};
    },
    //Funcion para guardar cambios de comando editado
    //Se usa en individualView
    setComandos: (state) => {
      const index = state.comandoIndividual.index;

      const result = { ...state.comandoIndividual };

      const newComandos = state.comandos.map((comando) =>
        comando.index === index ? result : comando
      );

      state.comandos = newComandos;
    },
    //Funcion para cambiar el estado de una instancias en especifico

    //Se usa en listCommands
    setInstanceRutina: (state, { payload }) => {
      const { instance, value } = payload;

      state[instance] = value;
    },
    //Se usa en listCommands
    deleteAllEditInfo: (state) => {
      const llavesIniciales = Object.keys(initialState);

      llavesIniciales.map((llave) => (state[llave] = initialState[llave]));
    },
    //Funcion para añadir comandos
    //Se usa en formAction
    addComandos: (state, { payload }) => {
      const comando = payload;

      const newComando = {
        ...comando,
        propClick: clickPropierties,
        propType: typePropierties,
      };

      const newComandos =
        state.comandos.length > 0
          ? [...state.comandos, newComando]
          : [newComando];

      const result = newComandos.map((c) => updateIndex(c, newComandos));

      state.comandos = result;
    },

    //Funcion para establecer los comandos iniciales
    //Se utiliza en fileReader
    setRutina: (state, { payload }) => {
      const llaves = Object.keys(payload);
      llaves.map((llave) => {
        state[llave] = payload[llave];
      });

      //Si no existe una ID, entonces crea una nueva; esto solo pasa para las nuevas creaciones
      if (!payload.id) {
        state.pk_id_rutina = uuid()
      }
    },
    //Cambiar estado a un nuevo elemento
    //Se encuentra en homeReadOrCreate filereader
    setTurnNew: (state, {payload}) => {
      switch (payload) {
        case 'new':
          state.isNew = true
          break
        case 'edit':
          state.isEdit = true
          break
      }
    }
  },
});

export const {
  //Funciones para los comandos
  addComandos,
  deleteComandos,
  setComandos,
  //Funciones para el comando en edicion
  selectComandoIndividual,
  deselectComandoIndividual,
  saveSelectComanddoIndividual,
  //Funciones para el cambio del estado de la rutina
  setRutina,
  setInstanceRutina,
  //Funcion para eliminar informacion cuando se hace el envio
  deleteAllEditInfo,
  //Funcion para cambiar estado de la edicion
  setTurnNew
} = editorComponentSlice.actions;

export default editorComponentSlice.reducer;

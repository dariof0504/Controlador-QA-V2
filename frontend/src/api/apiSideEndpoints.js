import { sliceSideReducer } from "./slideSide";

export const apiSide = sliceSideReducer.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.query({
      query: (cred) => ({
        url: "home",
        method: "GET",
        body: { ...cred },
      }),
    }),
    sideFilter: builder.mutation({
      query: (cred) => ({
        url: "sideFilter",
        method: "POST",
        body: { ...cred },
      }),
    }),
    saveRutina: builder.mutation({
      query: (cred) => ({
        url: "save",
        method: "POST",
        body: { ...cred },
      }),
    }),
    listRutinas: builder.query({
      query: () => ({
        url: "/list",
        method: "GET",
      }),
    }),
    listIndividualRutina: builder.query({
      query: (pk_id_rutina) => ({
        url: `/list/${pk_id_rutina}`,
        method: "GET",
      }),
    }),
    editRutinaIndividual: builder.mutation({
      query: (rutina) => ({
        url: "edit",
        method: "PUT",
        body: { ...rutina },
      }),
    }),
    //Apis para sesiones
    listSessions: builder.query({
      query: () => ({
        url: '/listSession',
        method: 'GET'
      })
    }),
    listIndividualSession: builder.query({
      query: (pk_id_session) => ({
        url: `/session/${pk_id_session}`,
        method: 'GET'
      })
    }),
    createSession: builder.mutation({
      query: (session) => ({
        url: 'createSession',
        body: {...session},
        method: 'POST',
      })
    }),
    editSession: builder.mutation({
      query: (session) => ({
        url: 'editSession',
        body: {...session},
        method: 'PUT'
      })
    }),
    executeSession: builder.mutation({
      query: (pk_id_session) => ({
        url: 'execute',
        method: 'POST',
        body: {pk_id_session}
      })       
    })
  }),
});

export const {
  useTestQuery,
  useSideFilterMutation,
  useSaveRutinaMutation,
  useListRutinasQuery,
  useListIndividualRutinaQuery,
  useEditRutinaIndividualMutation,
  //APIS SESIONES
  useListSessionsQuery,
  useListIndividualSessionQuery,
  useCreateSessionMutation,
  useEditSessionMutation,
  //Execute
  useExecuteSessionMutation
} = apiSide;

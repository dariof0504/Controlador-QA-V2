import React from "react";
import { useListIndividualSessionQuery } from "../../api/apiSideEndpoints";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../data/slices/sessionSlice";

export const ButtonTagSession = ({ pk_id_session }) => {

  const { data } = useListIndividualSessionQuery(pk_id_session)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = async () => {
    const result = await data
    dispatch(setSession(result))
    navigate('/editSession')
  }


  return (
    <div>
      <button onClick={handleEdit} >Editar</button>
      <button>Eliminar</button>
    </div>
  );
};

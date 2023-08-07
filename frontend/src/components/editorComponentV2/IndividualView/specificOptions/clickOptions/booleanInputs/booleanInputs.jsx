export const BooleanInputs = ({ specFunctions, data }) => {
  //Desestrructuramos las props
  const { handleClickProps } = specFunctions;
  const [comandoIndividual] = data;

  const { propClick } = comandoIndividual

  const handleChangeInput = (e) => {
    const instance =  e.target.className

    const value = !propClick[instance]

    handleClickProps(instance, value)
  }

  const llaves = ["validador"];

  return (
    <div>
      {llaves.map((llave) => (
        <>
          <p>{llave}</p>
          <input
            type="checkbox"
            checked={propClick[llave]}
            className={llave}
            onChange={(e) => handleChangeInput(e)}
          />
        </>
      ))}
      <hr></hr>
    </div>
  );
};

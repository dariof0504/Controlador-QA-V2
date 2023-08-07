export const BooleanInputs = ({ specFunctions, data }) => {
  //Desestrructuramos las props
  const { handleTypeProps } = specFunctions;
  const [comandoIndividual] = data;

  const { propType } = comandoIndividual

  const handleChangeInput = (e) => {
    const instance =  e.target.className

    const value = !propType[instance]

    handleTypeProps(instance, value)
  }

  const llaves = ["obligatorio", "unico", "longitudIndefinida", "tieneAdvertencias"];

  return (
    <div>
      {llaves.map((llave) => (
        <>
          <p>{llave}</p>
          <input
            type="checkbox"
            checked={propType[llave]}
            className={llave}
            onChange={(e) => handleChangeInput(e)}
          />
        </>
      ))}
      <hr></hr>
    </div>
  );
};

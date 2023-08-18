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
    <div className="booleanDiv" >
      {llaves.map((llave) => (
        <div>
          <label for={llave} >{llave}</label>
          <input
            id={llave}
            type="checkbox"
            checked={propType[llave]}
            className={llave}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      ))}
      <hr></hr>
    </div>
  );
};

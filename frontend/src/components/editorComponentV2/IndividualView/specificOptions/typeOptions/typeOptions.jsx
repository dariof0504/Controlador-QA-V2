import { AdvertenciasModule } from "./advertencias/advertencias";
import { BooleanInputs } from "./booleanInputs/booleanInputs";
import { LongitudInput } from "./longitud/longitud";

export const TypeOptions = ({ data, specFunctions }) => {

  const [comandoIndividual] = data;

  const valLongitud = comandoIndividual.propType.longitudIndefinida

  const valAdvertencias = comandoIndividual.propType.tieneAdvertencias

  return (
    <div>
      
      <BooleanInputs data={data} specFunctions={specFunctions} />
      {valAdvertencias && <AdvertenciasModule data={data} specFunctions={specFunctions} />}
      <hr></hr>
      {valLongitud && <LongitudInput data={data} specFunctions={specFunctions} />}
    </div>
  );
};

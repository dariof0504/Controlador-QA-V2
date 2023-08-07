import { BooleanInputs } from "./booleanInputs/booleanInputs";

export const ClickOptions = ({ data, specFunctions }) => {
  return (<div>
    <BooleanInputs data={data} specFunctions={specFunctions} />
  </div>);
};

import { DotSteps } from "./DotSteps";
import { Step1 } from "./steps/Step1";
import { FormStyle } from "../../style/components/form/Form";

export function Form() {
  return (
    <FormStyle>
      <form action="save">
        <DotSteps />
        <Step1 />
      </form>
    </FormStyle>
  );
}

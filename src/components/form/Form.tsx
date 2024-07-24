import { Steps } from "./Steps";
import { Step1 } from "./steps/Step1";
import { FormStyle } from "../../style/components/form/Form";

export function Form() {
  return (
    <FormStyle>
      <form action="save">
        <Steps />
        <Step1 />
      </form>
    </FormStyle>
  );
}

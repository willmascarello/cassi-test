import { Base } from "../components/form/Base";
import { Form } from "../components/form/Form";
import { FormPageStyle } from "../style/pages/FormPage";

export function FormPage() {
  return (
    <FormPageStyle className="container">
      <Base />
      <Form />
    </FormPageStyle>
  );
}

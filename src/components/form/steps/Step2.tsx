import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../pages/FormPage";
import { FormGroup, Buttons } from "../../../style/components/form/Form";

export type Step2Props = {
  toStep: (stepNumber: number) => void;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

// Endereço
export const Step2: React.FC<Step2Props> = (props: Step2Props) => {
  const { formData, setFormData } = useContext(FormContext);

  const [step2NextButton, setStep2NextButton] = useState(true);

  useEffect(() => {
    console.warn(formData);
    setStep2NextButton(true);

    console.log("step1NextButton: ", step2NextButton);
  }, [formData]);

  useEffect(() => {
    setFormData({ ...formData, checkboxCpf: "checkboxCpf" });
  }, []);

  return (
    <FormGroup>
      <p>STEP 2</p>

      <Buttons>
        <button className="prev" type="button" onClick={() => props.toStep(1)}>
          Anterior
        </button>
        <button
          className="next"
          type="button"
          disabled={!step2NextButton}
          onClick={() => props.toStep(3)}
        >
          Proximo
        </button>
      </Buttons>
    </FormGroup>
  );
};

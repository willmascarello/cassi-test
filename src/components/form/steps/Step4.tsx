import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../pages/FormPage";
import {
  FormGroup,
  Buttons,
  FieldRecaptcha,
} from "../../../style/components/form/Form";
import ReCAPTCHA from "react-google-recaptcha";
// 6LckuBgqAAAAAP-Q2ReBl1A5Ccw0G7knhdEzbXUA

export type Step4Props = {
  toStep: (stepNumber: number) => void;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

// Endereço
export const Step4: React.FC<Step4Props> = (props: Step4Props) => {
  const { formData, setFormData } = useContext(FormContext);

  const [step4NextButton, setStep4NextButton] = useState(true);

  useEffect(() => {
    setStep4NextButton(!!formData.recaptcha);
  }, [formData.recaptcha]);

  useEffect(() => {
    setFormData({ ...formData, recaptcha: "" });
  }, []);

  return (
    <FormGroup>
      <FieldRecaptcha>
        <p>Confirme que você é humano:</p>
        <ReCAPTCHA
          sitekey="6LckuBgqAAAAAP-Q2ReBl1A5Ccw0G7knhdEzbXUA"
          onChange={(validate: string | null) =>
            setFormData({ ...formData, recaptcha: validate })
          }
        />
      </FieldRecaptcha>

      <Buttons>
        <button className="prev" type="button" onClick={() => props.toStep(3)}>
          Anterior
        </button>
        <button
          className="next"
          type="button"
          disabled={!step4NextButton}
          onClick={() => props.toStep(5)}
        >
          Proximo
        </button>
      </Buttons>
    </FormGroup>
  );
};

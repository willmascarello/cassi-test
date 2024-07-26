import { useContext, useEffect } from "react";
import { DotSteps } from "./DotSteps";
import { FormStyle } from "../../style/components/form/Form";
import { FormContext } from "../../pages/FormPage";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { cepMask, cnpjMask, cpfMask, telefoneMask } from "./Mask";

// import { currentStep } from "./steps/"+currentStep;

export function Form() {
  const { formData, setFormData } = useContext(FormContext);

  function handleInputChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    let { name, value } = event.target;

    if (name === "cpf") {
      value = cpfMask(value);
    }

    if (name === "cnpj") {
      value = cnpjMask(value);
    }

    if (name === "cep") {
      value = cepMask(value);
    }

    if (name === "celular") {
      value = telefoneMask(value);
    }

    if (name === "telefone") {
      value = telefoneMask(value);
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = event.target;

    console.log("event:", event);
    console.log("file:", event.target.files);
    // console.log("event:", event.target.file);
    // console.log("file:", !event.target.files[0] ?? event.target.files[0]);

    setFormData({ ...formData, [name]: value });
  }

  // FIXME: voltar para -> step: "1"
  useEffect(() => {
    setFormData({ ...formData, step: "5", checkboxCpf: "checkboxCpf" });
  }, []);

  function toStep(stepNumber: number) {
    setFormData({ ...formData, step: stepNumber.toString() });
  }

  function handleSendForm() {
    return null;
  }

  return (
    <FormStyle>
      <form action="save">
        <DotSteps />
        {formData.step === "1" && (
          <Step1 toStep={toStep} handleInputChange={handleInputChange} />
        )}
        {formData.step === "2" && (
          <Step2 toStep={toStep} handleInputChange={handleInputChange} />
        )}
        {formData.step === "3" && (
          <Step3 toStep={toStep} handleInputChange={handleInputChange} />
        )}
        {formData.step === "4" && (
          <Step4 toStep={toStep} handleInputChange={handleInputChange} />
        )}
        {formData.step === "5" && (
          <Step5
            toStep={toStep}
            handleInputChange={handleInputChange}
            handleSendForm={handleSendForm}
            handleFileChange={handleFileChange}
          />
        )}
      </form>
    </FormStyle>
  );
}

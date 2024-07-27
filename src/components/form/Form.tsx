import { useContext, useEffect, useState } from "react";
import { DotSteps } from "./DotSteps";
import {
  FormStyle,
  Loading,
  Submit,
  Submited,
} from "../../style/components/form/Form";
import { FormContext } from "../../pages/FormPage";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { cepMask, cnpjMask, cpfMask, telefoneMask } from "./Mask";

export function Form() {
  const submitedSuccess = true; // mude para false para ver a mensagem de falha
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const { formData, setFormData } = useContext(FormContext);

  function handleInputChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
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

  // Valores iniciais
  // FIXME: voltar para -> step: "1"
  useEffect(() => {
    setFormData({
      ...formData,
      step: "5",
      checkboxCpf: "checkboxCpf",
      protocolo: "231321542132",
    });
  }, []);

  function toStep(stepNumber: number) {
    setFormData({ ...formData, step: stepNumber.toString() });
  }

  function showFeedback() {
    setLoading(false);
  }

  function handleSendForm() {
    setLoading(true);
    setFeedback(true);
    setTimeout(() => showFeedback(), 2500);
  }

  function handleNewRequest() {
    // clean formData
    setFormData({ step: "1", protocolo: Number(formData.protocolo) + 1 });
    setFeedback(false);
  }

  const successSubmited = (
    <>
      <img src="icon/check.svg" alt="Icone Sucesso" />
      <p className="title">Protocolo: {formData.protocolo}</p>
      <p className="message">Sua solicitação foi enviada com sucesso.</p>
      <button onClick={() => handleNewRequest()}>Nova solicitação</button>
    </>
  );

  const failSubmited = (
    <>
      <img src="icon/warning.svg" alt="Icone Alerta" />
      <p>Ocorreu um erro ao enviar a sua mensagem.</p>
      <p>
        Por favor, tente novamente mais tarde ou fale conosco pelo{" "}
        <a href="https://wa.link/hhznk3">0800 729 0080</a>. Atendimento 24
        horas, inclusive aos sábados, domingos e feriados.
      </p>
      <button>Enviar nova mensagem</button>
    </>
  );

  const submit = (
    <Submit>
      {loading ? (
        <Loading>
          <div>
            <span className="loader"></span>
            <p>Enviando mensagem</p>
          </div>
        </Loading>
      ) : (
        <Submited>{submitedSuccess ? successSubmited : failSubmited}</Submited>
      )}
    </Submit>
  );

  const form = (
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
  );

  return <FormStyle>{feedback ? submit : form}</FormStyle>;
}

import { createContext, useState } from "react";
import { Base } from "../components/form/Base";
import { Form } from "../components/form/Form";
import { FormPageStyle } from "../style/pages/FormPage";

const formDataFields = {
  // DotStep
  step: "",
  // Step 1 - Dados
  checkboxCpf: "checkboxCpf",
  checkboxCnpj: "",
  nome: "",
  cpf: "",
  cnpj: "",
  prestador: "",
  especialidades: "",

  // Step 2 - Endereço
  // Step 3 - Contato
  // Step 4 - Confirmação
  // Step 5 - Anexos
};

type FormContextType = {
  formData: typeof formDataFields;
  setFormData: React.Dispatch<React.SetStateAction<object | null>>;
};

const iFormContextState = {
  formData: formDataFields,
  setFormData: () => {},
};

export const FormContext = createContext<FormContextType>(iFormContextState);

export function FormPage() {
  const [formData, setFormData] = useState<any>({});
  // const [step, setStep] = useState<Number>(1);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <FormPageStyle className="container">
        <Base />
        <Form />
      </FormPageStyle>
    </FormContext.Provider>
  );
}

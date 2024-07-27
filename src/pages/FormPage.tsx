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
  cep: "",
  endereco: "",
  uf: "",
  cidade: "",
  bairro: "",
  numero: "",
  complemento: "",
  // Step 3 - Contato
  contato: "",
  celular: "",
  telefone: "",
  email: "",
  // Step 4 - Confirmação
  recaptcha: "",
  // Step 5 - Anexos
  arquivo: [],
  observacoes: "",
  // Feedback
  protocolo: 231321542132,
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

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <FormPageStyle className="container">
        <Base />
        <Form />
      </FormPageStyle>
    </FormContext.Provider>
  );
}

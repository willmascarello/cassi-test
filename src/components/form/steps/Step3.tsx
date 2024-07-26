import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../pages/FormPage";
import {
  FormGroup,
  Buttons,
  TwoFieldForm,
  FieldForm,
} from "../../../style/components/form/Form";

export type Step3Props = {
  toStep: (stepNumber: number) => void;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

// Endereço
export const Step3: React.FC<Step3Props> = (props: Step3Props) => {
  const { formData } = useContext(FormContext);

  const [step3NextButton, setStep3NextButton] = useState(true);

  const validEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  useEffect(() => {
    setStep3NextButton(
      (!!formData.contato &&
        (formData.celular?.length > 13 || formData.telefone?.length > 13) &&
        !!formData.email) ??
        !!formData.email.match(validEmail) // TODO: validar o e-mail
    );
  }, [formData]);

  return (
    <FormGroup>
      <FieldForm>
        <label htmlFor="contato">* Nome para contato</label>
        <input
          id="contato"
          name="contato"
          type="text"
          placeholder="Informe o nome..."
          value={formData.contato || ""}
          onChange={(e) => props.handleInputChange(e)}
          required
        />
      </FieldForm>

      <TwoFieldForm>
        <FieldForm>
          <label htmlFor="celular">Telefone celular</label>
          <input
            id="celular"
            name="celular"
            type="text"
            placeholder="(00) 0000-0000"
            maxLength={15}
            value={formData.celular || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
        <FieldForm>
          <label htmlFor="telefone">Telefone fixo</label>
          <input
            id="telefone"
            name="telefone"
            type="text"
            placeholder="(00) 0000-0000"
            maxLength={15}
            value={formData.telefone || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
      </TwoFieldForm>

      <FieldForm>
        <label htmlFor="email">* E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Informe o nome..."
          value={formData.email || ""}
          onChange={(e) => props.handleInputChange(e)}
          required
        />
      </FieldForm>

      <Buttons>
        <button className="prev" type="button" onClick={() => props.toStep(2)}>
          Anterior
        </button>
        <button
          className="next"
          type="button"
          disabled={!step3NextButton}
          onClick={() => props.toStep(4)}
        >
          Proximo
        </button>
      </Buttons>
    </FormGroup>
  );
};

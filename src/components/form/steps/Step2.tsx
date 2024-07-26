import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../pages/FormPage";
import {
  FormGroup,
  Buttons,
  TwoFieldForm,
  FieldForm,
} from "../../../style/components/form/Form";

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
  const { formData } = useContext(FormContext);

  const [step2NextButton, setStep2NextButton] = useState(true);

  useEffect(() => {
    setStep2NextButton(
      formData.cep?.length > 9 &&
        !!formData.endereco &&
        !!formData.uf &&
        !!formData.cidade &&
        !!formData.bairro &&
        !!formData.numero
    );
  }, [formData]);

  return (
    <FormGroup>
      <TwoFieldForm customGridColumn={"114px auto"}>
        <FieldForm>
          <label htmlFor="cep">* CEP</label>
          <input
            id="cep"
            name="cep"
            type="text"
            placeholder="00.000-000"
            maxLength={10}
            value={formData.cep || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
        <FieldForm>
          <label htmlFor="endereco">* Endereço</label>
          <input
            id="endereco"
            name="endereco"
            type="text"
            placeholder="Informe o endereço..."
            value={formData.endereco || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
      </TwoFieldForm>

      <TwoFieldForm customGridColumn={"auto 1fr"}>
        <FieldForm>
          <label htmlFor="uf">* Estado</label>
          <select
            name="uf"
            id="uf"
            defaultValue={formData.uf || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          >
            <option value="" disabled>
              UF...
            </option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </FieldForm>
        <FieldForm>
          <label htmlFor="cidade">* Cidade</label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            placeholder="Informe a cidade..."
            value={formData.cidade || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
      </TwoFieldForm>

      <TwoFieldForm>
        <FieldForm>
          <label htmlFor="bairro">* Bairro</label>
          <input
            id="bairro"
            name="bairro"
            type="text"
            placeholder="Informe o bairro..."
            value={formData.bairro || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
        <FieldForm>
          <label htmlFor="numero">* Número</label>
          <input
            id="numero"
            name="numero"
            type="text"
            placeholder="Informe o número..."
            value={formData.numero || ""}
            onChange={(e) => props.handleInputChange(e)}
            required
          />
        </FieldForm>
      </TwoFieldForm>

      <FieldForm>
        <label htmlFor="complemento">Complemento</label>
        <input
          id="complemento"
          name="complemento"
          type="text"
          placeholder="Informe o complemento..."
          value={formData.complemento || ""}
          onChange={(e) => props.handleInputChange(e)}
        />
      </FieldForm>

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

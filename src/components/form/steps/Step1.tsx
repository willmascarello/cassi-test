import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../pages/FormPage";
import {
  FormGroup,
  FieldFormCheckbox,
  Checkboxes,
  FieldForm,
  TwoFieldForm,
  Buttons,
} from "../../../style/components/form/Form";
import { cnpjMask, cpfMask } from "../Mask";

// Dados
export function Step1() {
  const { formData, setFormData } = useContext(FormContext);

  const [checkboxTipo, setCheckboxTipo] = useState("checkboxCpf");
  const [step1NextButton, setStep1NextButton] = useState(true);

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

    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    checkboxTipo === "checkboxCpf"
      ? setFormData({ ...formData, checkboxCnpj: "" })
      : setFormData({ ...formData, checkboxCpf: "" });
  }, [checkboxTipo]);

  useEffect(() => {
    console.warn(formData); // formData

    const validateCpf =
      checkboxTipo === "checkboxCpf" && formData.cpf?.length > 13;
    const validateCnpj =
      checkboxTipo === "checkboxCnpj" && formData.cnpj?.length > 17;

    setStep1NextButton(
      !!formData.nome &&
        (validateCpf || validateCnpj) &&
        !!formData.prestador &&
        !!formData.especialidades
    );

    console.log("step1NextButton: ", step1NextButton);
  }, [formData]);

  // TODO: revisar se ao voltar para o formulário ele mantem o CNPJ selecionado
  // inicialização
  useEffect(() => {
    setFormData({ ...formData, step: "1", checkboxCpf: "checkboxCpf" });
  }, []);

  return (
    <FormGroup>
      <FieldFormCheckbox>
        <p>* Tipo</p>
        <Checkboxes>
          <label>
            Pessoa física
            <input
              name="checkboxCpf"
              type="checkbox"
              value="checkboxCpf"
              checked={checkboxTipo === "checkboxCpf"}
              onChange={(e) => {
                handleInputChange(e);
                setCheckboxTipo(e.target.value);
              }}
            />
            <span></span>
          </label>
          <label>
            Pessoa Jurídica
            <input
              name="checkboxCnpj"
              type="checkbox"
              value="checkboxCnpj"
              checked={checkboxTipo === "checkboxCnpj"}
              onChange={(e) => {
                handleInputChange(e);
                setCheckboxTipo(e.target.value);
              }}
            />
            <span></span>
          </label>
        </Checkboxes>
      </FieldFormCheckbox>

      <TwoFieldForm className="2-inputs">
        <FieldForm>
          <label htmlFor="nome">* Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Informe o nome..."
            required
            value={formData.nome || ""}
            onChange={(e) => handleInputChange(e)}
          />
        </FieldForm>

        <FieldForm hidden={checkboxTipo === "checkboxCnpj"}>
          <label htmlFor="cpf">* CPF</label>
          <input
            id="cpf"
            name="cpf"
            type="text"
            placeholder="000.000.000-00"
            maxLength={14}
            value={formData.cpf || ""}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </FieldForm>
        <FieldForm hidden={checkboxTipo === "checkboxCpf"}>
          <label htmlFor="cnpj">* CNPJ</label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            placeholder="00.000.000/0000-00"
            maxLength={18}
            value={formData.cnpj || ""}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </FieldForm>
      </TwoFieldForm>

      <FieldForm>
        <label htmlFor="prestador">* Tipo de Prestador</label>
        <select
          name="prestador"
          id="prestador"
          defaultValue=""
          onChange={(e) => handleInputChange(e)}
          required
        >
          <option value="" disabled>
            Selecione o tipo...
          </option>
          <option value="1">Médico(a)</option>
          <option value="2">Fisioterapeuta</option>
          <option value="3">Nutricionista</option>
          <option value="4">Psicólogo(a)</option>
          <option value="5">Terapia Ocupacional</option>
          <option value="0">Outros</option>
        </select>
      </FieldForm>

      {/* TODO: Multselect, max. 10 */}
      {/* TODO: Variar com Tipo de Prestador */}
      {/* TODO: Buscar com Axios em um mockup */}
      <FieldForm>
        <label htmlFor="especialidades">* Especialidades</label>
        <select
          name="especialidades"
          id="especialidades"
          defaultValue=""
          onChange={(e) => handleInputChange(e)}
          required
        >
          <option value="" disabled>
            Selecionar especialidade...
          </option>
          <option value="1">Cirurgia Cardiovascular</option>
          <option value="2">Cirurgia da Mão</option>
          <option value="3">Cirurgia de Cabeça e Pescoço</option>
          <option value="4">Cirurgia do Aparelho Digestivo</option>
          <option value="5">Cirurgia Geral</option>
          <option value="0">Cirurgia Plástica</option>
        </select>
      </FieldForm>

      <Buttons>
        <button className="prev not-allowed" type="button">
          Anterior
        </button>
        <button className="next" type="button" disabled={!step1NextButton}>
          Proximo
        </button>
      </Buttons>
    </FormGroup>
  );
}

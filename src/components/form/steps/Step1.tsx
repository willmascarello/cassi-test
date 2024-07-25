import { useEffect, useState } from "react";
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
  const [formData, setFormData] = useState<any>({}); // usado any como tipo apenas pelo objeto ser dinamico e não saber quais atributos receberá

  const [checkboxTipo, setCheckboxTipo] = useState("checkboxCpf");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
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
      ? delete formData.checkboxCnpj
      : delete formData.checkboxCpf;
  }, [checkboxTipo]);

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

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
            value={formData.nome}
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
            value={formData.cpf}
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
            value={formData.cnpj}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </FieldForm>
      </TwoFieldForm>

      <FieldForm>
        <label htmlFor="prestador">* Tipo de Prestador</label>
        <select name="prestador" id="prestador" required>
          <option value="" disabled selected>
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
        <select name="especialidades" id="especialidades" required>
          <option value="" disabled selected>
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
        <button className="prev" disabled>
          Anterior
        </button>
        <button className="next">Proximo</button>
      </Buttons>
    </FormGroup>
  );
}

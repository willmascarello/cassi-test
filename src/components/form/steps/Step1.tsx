import {
  FormGroup,
  FieldFormCheckbox,
  Checkboxes,
  FieldForm,
  TwoFieldForm,
  Buttons,
} from "../../../style/components/form/Form";

// Dados
export function Step1() {
  return (
    <FormGroup>
      <FieldFormCheckbox>
        <p>* Tipo</p>
        <Checkboxes>
          <label>
            Pessoa física
            <input name="checkbox-tipo" value="cpf" type="checkbox" />
            <span></span>
          </label>
          <label>
            Pessoa Jurídica
            <input name="checkbox-tipo" value="cnpj" type="checkbox" />
            <span></span>
          </label>
        </Checkboxes>
      </FieldFormCheckbox>

      <TwoFieldForm className="2-inputs">
        <FieldForm>
          <label htmlFor="nome">* Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Informe o nome..."
            required
          />
        </FieldForm>

        <FieldForm>
          <label htmlFor="cpf">* CPF</label>
          <input id="cpf" type="number" placeholder="000.000.000-00" required />
        </FieldForm>
        {/* <FieldForm>
        
          <label htmlFor="cnpj">* CNPJ</label>
          <input
            id="cnpj"
            type="number"
            placeholder="00.000.000/0000-00"
            required
          />
        </FieldForm> */}
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

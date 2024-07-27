import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FormContext } from "../../../pages/FormPage";
import {
  FormGroup,
  Buttons,
  FieldForm,
  FieldFormFile,
  TitleField,
} from "../../../style/components/form/Form";

export type Step5Props = {
  toStep: (stepNumber: number) => void;
  handleSendForm: () => void;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Endereço
export const Step5: React.FC<Step5Props> = (props: Step5Props) => {
  const { formData } = useContext(FormContext);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    // @ts-ignore: Unreachable code error
    <li key={file.path}>
      {/* @ts-ignore: Unreachable code error */}
      {/* {file.path} - {file.size} bytes */}
      <img src="img/file-example.png" alt="exemplo de arquivo" />

      {/* TODO: remover o arquivo */}
    </li>
  ));

  const [step5NextButton, setStep5NextButton] = useState(true);

  // TODO: rever validação
  useEffect(() => {
    setStep5NextButton(!!files.length);
  }, [formData]);

  return (
    <FormGroup>
      {/* 
      TODO: o limite de arquivos é 3 ou 12? 
      Pois no Figma antes de fazer upload aparecem 0/12 e após subir um arquivo aparece 1/3 arquivos anexados
      */}
      <TitleField>
        <p>Anexar Arquivos</p>
        {/* TODO: abrir aside */}
        {/* TODO: colocar icone "?" */}
        <button>
          <img src="icon/question.svg" alt="Icone ?" />{" "}
          <span>Documentação necessária</span>
        </button>
      </TitleField>
      <FieldFormFile {...getRootProps({ className: "dropzone" })}>
        <input
          id="arquivo"
          name="arquivo"
          type="text"
          multiple
          maxLength={10}
          value={formData.arquivo || ""}
          onChange={(e) => props.handleFileChange(e)}
          {...getInputProps()}
          required
        />
        <p style={{ display: files.length ? "none" : "block" }}>
          Arraste ou selecione um arquivo (4MB por arquivo)
        </p>

        <small>{files.length}/12 arquivos anexados</small>

        <ul>{files}</ul>
      </FieldFormFile>

      <FieldForm>
        <label htmlFor="observacoes">Observações (Opcional)</label>
        <textarea
          id="observacoes"
          name="observacoes"
          placeholder="Sua mensagem..."
          maxLength={800}
          rows={6}
          value={formData.observacoes || ""}
          onChange={(e) => props.handleInputChange(e)}
        />

        <small>{formData.observacoes?.length ?? 0}/800 caracteres</small>
      </FieldForm>

      <Buttons>
        <button className="prev" type="button" onClick={() => props.toStep(4)}>
          Anterior
        </button>
        <button
          className="next"
          type="button"
          disabled={!step5NextButton}
          onClick={() => props.handleSendForm()}
        >
          Enviar
        </button>
      </Buttons>
    </FormGroup>
  );
};

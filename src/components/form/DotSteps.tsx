import { useContext } from "react";
import { FormContext } from "../../pages/FormPage";
import { DotStepsStyle, Dot } from "../../style/components/form/DotSteps";

export function DotSteps() {
  const { formData } = useContext(FormContext);

  return (
    <DotStepsStyle>
      <Dot active={formData.step === "1"}>
        <div>1</div>
        <p>Dados</p>
      </Dot>
      <Dot active={formData.step === "2"}>
        <div>2</div>
        <p>Endereço</p>
      </Dot>
      <Dot active={formData.step === "3"}>
        <div>3</div>
        <p>Contato</p>
      </Dot>
      <Dot active={formData.step === "4"}>
        <div>4</div>
        <p>Confirmação</p>
      </Dot>
      <Dot active={formData.step === "5"}>
        <div>5</div>
        <p>Anexos</p>
      </Dot>
    </DotStepsStyle>
  );
}

import { DotStepsStyle, Dot } from "../../style/components/form/DotSteps";

export function DotSteps() {
  return (
    <DotStepsStyle>
      <Dot active={true}>
        <div>1</div>
        <p>Dados</p>
      </Dot>
      <Dot active={false}>
        <div>2</div>
        <p>Endereço</p>
      </Dot>
      <Dot active={false}>
        <div>3</div>
        <p>Contato</p>
      </Dot>
      <Dot active={false}>
        <div>4</div>
        <p>Confirmação</p>
      </Dot>
      <Dot active={false}>
        <div>5</div>
        <p>Anexos</p>
      </Dot>
    </DotStepsStyle>
  );
}

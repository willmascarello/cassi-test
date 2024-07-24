import { Breadcrumb, Title, Text } from "../../style/components/form/Base.js";

export function Base() {
  const breadcrumb =
    "Credenciado CASSI > Quero ser um credenciado > Nova solicitação";
  const title = "Seja um novo prestador CASSI";
  const text =
    "Para se credenciar à CASSI o primeiro passo é registrar a sua proposta, que será avaliada de acordo com a necessidade de oferta dos serviços na localidade.";

  return (
    <div>
      <Breadcrumb>{breadcrumb}</Breadcrumb>
      <img src="img/base-form.png" alt="Imagem de Tecnologia" />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
  );
}

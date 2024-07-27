import { useState } from "react";
import { AsideQuestionSyle } from "../../style/components/form/AsideCommonQuestions";

export type AsideQuestionProps = {
  title: string;
  text: string;
};

export const AsideQuestion: React.FC<AsideQuestionProps> = (
  props: AsideQuestionProps
) => {
  const [openQuestion, setOpenQuestion] = useState(false);
  console.log("ver-- openQuestion:", openQuestion);

  return (
    <AsideQuestionSyle>
      <div className="title">
        <span>{props.title}</span>
        <button onClick={() => setOpenQuestion(!openQuestion)}>
          <img src="icon/plus.svg" alt="Icone Abrir Pergunta" />
        </button>
      </div>

      {openQuestion ? <div className="text">{props.text}</div> : ""}
    </AsideQuestionSyle>
  );
};

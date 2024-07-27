import { useState } from "react";
import {
  AsideCommonQuestionsStyle,
  AsideButton,
  AsideOpen,
  Background,
  Questions,
} from "../../style/components/form/AsideCommonQuestions";
import { AsideQuestion } from "./AsideQuestion";

export function AsideCommonQuestions() {
  const [openAside, setOpenAside] = useState(false);

  return (
    <AsideCommonQuestionsStyle>
      {openAside ? (
        <AsideOpen>
          <Background onClick={() => setOpenAside(false)} />
          <Questions>
            <div className="title-questions">
              <div className="title">
                <span>Perguntas Frequentes</span>
                <button onClick={() => setOpenAside(false)}>
                  <img src="icon/close.svg" alt="Icone Close" />
                </button>
              </div>
              <div className="questions">
                {/* TODO: ler um array com os titulos e textos */}
                <AsideQuestion
                  title={"Conheça as vantagens de ser um credenciado"}
                  text={"Texto Conheça as vantagens de ser um credenciado"}
                />
                <AsideQuestion
                  title={"Documentação necessária - Pessoa jurídica"}
                  text={"Texto Documentação necessária - Pessoa jurídica"}
                />
                <AsideQuestion
                  title={"Conheça as vantagens de ser um credenciado"}
                  text={"Texto Conheça as vantagens de ser um credenciado"}
                />
              </div>
            </div>
          </Questions>
        </AsideOpen>
      ) : (
        <AsideButton>
          <button onClick={() => setOpenAside(true)}>
            <img src="icon/commom-question.svg" alt="Icone ?" />
            <span>Perguntas Frequentes</span>
          </button>
        </AsideButton>
      )}
    </AsideCommonQuestionsStyle>
  );
}

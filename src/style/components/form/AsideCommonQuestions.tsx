import styled from "styled-components";

export const AsideCommonQuestionsStyle = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
`;

// TODO: adicionar bordas quando abrir
// TODO: rotacionar o botão de abrir para fechar
export const AsideQuestionSyle = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 5px;
  background-color: var(--questions);
  justify-content: space-between;

  div {
    display: flex;
    span {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
    }
  }

  .text {
    margin-top: 16px;
  }
`;

export const AsideOpen = styled.div``;

export const Background = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
`;

export const Questions = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  width: 630px;
  height: 100vh;
  gap: 24px;

  background-color: var(--background);

  .title-questions {
    padding: 16px;
    overflow: auto;
  }

  .title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    /* A fonte no Figma estava em Roboto, então ajustei para ficar coerente ao design */
    font-size: 14px;
    font-weight: 550;
    color: var(--primary);

    .title > span,
    .title > button {
      vertical-align: middle;
    }

    button {
      background-color: transparent;
      border: none;
    }
  }

  .questions {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;
    gap: 24px;

    button {
      background-color: transparent;
      border: none;
    }
  }
`;

export const AsideButton = styled.div`
  position: absolute;
  top: 20vh;
  right: -87px;
  rotate: -90deg;

  button > img,
  button > span {
    vertical-align: middle;
  }

  button {
    width: 218px;
    height: 44px;
    padding: 8px;
    border-radius: 4px 4px 0 0;
    border: none;
    background-color: var(--primary);
    color: var(--text-white);

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      rotate: 90deg;
    }

    &:hover {
      background-color: var(--secundary);
      color: var(--primary);

      img {
        -webkit-filter: invert(100%);
        filter: invert(100%);
      }
    }
  }
`;

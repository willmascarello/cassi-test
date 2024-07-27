import styled from "styled-components";

const buttonStandard = `
    button {
      min-width: 80px;
      padding: 8px 16px 8px 16px;
      border-radius: 4px;
      border: none;
      background-color: var(--primary);
      color: var(--text-white);

      &:hover {
        background-color: var(--secundary);
        color: var(--primary);
      }
    }

    button:disabled {
      color: var(--text-white);
      background-color: var(--grey);
    }
  `;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  padding: 24px 16px;

  border-bottom: 9px solid var(--primary);
  border-radius: 9px;
  box-shadow: 0px 2px 3px 0px #0000001a;

  form {
    height: 100%;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  height: calc(100% - 84px); // - height e margin-bottom do DotSteps
`;

export const FieldFormCheckbox = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin: 0 0 8px 0;
  }
`;

interface IFieldForm {
  hidden?: boolean;
  custom?: string;
}

export const FieldForm = styled.div<IFieldForm>`
  position: relative;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: column;

  ${(props) => props.custom ?? ""};

  label {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
  }

  input,
  select {
    padding: 8px 16px;
    border: 1px solid var(--light-grey);
    border-radius: 4px;
    margin-bottom: 24px;
  }

  select {
    font-size: 1rem;
    font-weight: 400;

    &:invalid {
      color: var(--grey);
    }

    &:valid {
      color: var(--primary);
    }
  }

  textarea {
    resize: none;
    border: 1px solid var(--light-grey);
    border-radius: 4px;
    padding: 8px 16px;
  }

  small {
    position: absolute;
    bottom: 8px;
    right: 16px;
    color: var(--grey);
  }
`;

interface ITwoFieldForm {
  customGridColumn?: string;
}

export const TwoFieldForm = styled.div<ITwoFieldForm>`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) =>
    props.customGridColumn ?? "repeat(2, 1fr)"};
  gap: 16px;

  small {
    position: absolute;
    bottom: 0;
    color: var(--grey);
  }
`;

export const TitleField = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
  }

  button > img,
  button > span {
    vertical-align: middle;
  }

  button {
    border: none;
    background-color: transparent;
    color: var(--primary);
    font-size: 14px !important;
    font-weight: 400 !important;
  }
`;

export const FieldFormFile = styled.div`
  position: relative;
  width: 100%;
  height: 164px;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  align-content: center;
  text-align: center;
  margin-bottom: 24px;

  p {
    text-decoration: underline;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 16.5px;

    li {
      width: 80px;
      height: 80px;
      border: 4px solid var(--dark-grey);
      border-radius: 12px;
      pointer-events: none;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  small {
    position: absolute;
    bottom: 16px;
    right: 20px;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;

  ${buttonStandard}

  .prev {
    border: 1px solid var(--primary);
    background-color: var(--background);
    color: var(--primary);

    &:hover {
      background-color: var(--primary);
      color: var(--text-white);
    }
  }

  .not-allowed {
    color: var(--light-grey);
    border-color: var(--light-grey);
    pointer-events: none;
  }
`;

export const FieldRecaptcha = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 36px);
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 16px;
  }
`;

interface IFieldForm {
  hidden?: boolean;
}

export const Checkboxes = styled.div`
  display: flex;
  gap: 16px;

  label {
    display: block;
    position: relative;

    font-size: 16px;
    font-weight: 400;
    color: var(--text);

    padding-left: 24px;
    margin-bottom: 24px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: var(--background);

    border-radius: 50%;
    border: 1px solid var(--primary);
  }

  label:hover input ~ span {
    box-shadow: 0px 2px 3px 0px #00000084;
  }

  label input:checked ~ span {
    background-color: var(--primary);

    border: 1px solid var(--background);
    outline: 1px solid var(--primary);
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ span:after {
    display: block;
  }

  label span:after {
    left: 5px;
    top: 2px;
    width: 3.5px;
    height: 7px;
    border: solid white;
    border-width: 0 2.7px 2.7px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Submit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  text-align: -webkit-center;
  justify-content: center;
`;
export const Loading = styled.div`
  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin-top: 24px;
  }

  .loader {
    width: 80px;
    height: 80px;
    border: 6px solid var(--primary);
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Submited = styled.div`
  ${buttonStandard}

  button {
    margin-top: 24px;
  }

  .title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin-top: 24px;
  }

  .message {
    max-width: 218px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  a {
    text-decoration: underline;
  }
`;

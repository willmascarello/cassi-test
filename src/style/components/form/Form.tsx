import styled from "styled-components";

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
  height: calc(100% - 60px); // - height do DotSteps
`;

export const FieldFormCheckbox = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
  }
`;
export const FieldForm = styled.div`
  display: flex;
  flex-direction: column;

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
  }
`;

export const TwoFieldForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;

  button {
    min-width: 80px;
    padding: 8px 16px 8px 16px;
    border-radius: 4px;
    border: none;
    background-color: var(--primary);
    color: var(--text-white);
  }
`;

export const Checkboxes = styled.div`
  display: flex;
  gap: 16px;

  label {
    display: block;
    position: relative;

    font-size: 16px;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 8px;

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
    background-color: var(--light-grey);
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

import styled from "styled-components";

export const DotStepsStyle = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin-bottom: 24px;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 50px);
    height: 1px;
    background-color: var(--grey);
    z-index: -1;
  }
`;

interface IDot {
  active?: boolean;
}

export const Dot = styled.div<IDot>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  div {
    align-content: center;
    border-radius: 50%;
    transition: 300ms ease;

    /* alterações feitas se o Dot está ativo ou não */
    height: ${(props) => (props.active ? "32px" : "24px")};
    width: ${(props) => (props.active ? "32px" : "24px")};
    font-size: ${(props) => (props.active ? "20px" : "12px")};
    font-weight: ${(props) => (props.active ? "700" : "400")};
    color: ${(props) => (props.active ? "var(--secundary)" : "var(--grey)")};
    border: ${(props) => (props.active ? "none" : "1px solid var(--grey)")};
    background-color: ${(props) =>
      props.active ? "var(--primary)" : "var(--background)"};
    ${(props) => props.active && "transform: translateY(-3px);"}
  }

  p {
    color: var(--grey);

    /* alterações feitas se o Dot está ativo ou não */
    margin: ${(props) => (props.active ? "4px 0 0 0" : "8px 0 0 0")};
    font-size: ${(props) => (props.active ? "14px" : "12px")};
    font-weight: ${(props) => (props.active ? "700" : "400")};
  }
`;

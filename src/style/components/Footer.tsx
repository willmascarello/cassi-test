import styled from "styled-components";

export const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 118px;
  background-color: var(--primary);
  /* padding: 33px 86px; */
  justify-content: space-between;
`

export const ImgFooter = styled.div`
  display: flex;
  height: 52px;
  margin: 33px 86px;

  img {      
    height: 52px;
  }
`

// TODO: hover
export const RedesSociais = styled.div`
  display: flex;
  margin: 33px 86px;
  gap: 24px;
  align-items: center;

  a {      
    height: 24px;
    width: 24px;
  }
`


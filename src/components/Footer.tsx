import {
  FooterStyle,
  ImgFooter,
  RedesSociais,
} from "../style/components/Footer.js";

export function Footer() {
  return (
    <FooterStyle>
      <ImgFooter>
        <img src="img/web-logo-cassi-branco.png" alt="Logo Cassi Footer" />
      </ImgFooter>
      <RedesSociais>
        <a
          href="https://www.facebook.com/CASSISAUDEBR"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="img/logo-facebook-cassi.png"
            alt="Link para o Facebook da Cassi"
          />
        </a>
        <a
          href="https://www.instagram.com/cassi.saude/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="img/logo-linkedin-cassi.png"
            alt="Link para o Linkedin da Cassi"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/cassi/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="img/logo-instagram-cassi.png"
            alt="Link para o Instagram da Cassi"
          />
        </a>
      </RedesSociais>
    </FooterStyle>
  );
}

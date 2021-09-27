import React from 'react';
import { Contact } from '../components';
import git from '../assets/logos/github-svgrepo-com.svg';
import instagram from '../assets/logos/instagram-svgrepo-com.svg';
import linkedin from '../assets/logos/linkedin-svgrepo-com.svg';
import yt from '../assets/logos/youtube-svgrepo-com.svg';
import email from '../assets/logos/email-svgrepo-com.svg';
import find from '../assets/logos/gps-pin-svgrepo-com.svg';
import phone from '../assets/logos/phone-svgrepo-com.svg';
import page from '../assets/logos/network-svgrepo-com.svg';

const openTab = (props) => {
  window.open(props, "_blank");
};

export function ContactContainer() {
  return (
      <>
    <Contact id="contact">
      <Contact.InnerContainer>
        <Contact.Form>
          <Contact.Text>Deja un Mensaje</Contact.Text>
          <Contact.Input placeholder="Nombre" />
          <Contact.Input placeholder="Correo Email" />
          <Contact.Input placeholder="Mensaje" />
          <Contact.Button>Enviar</Contact.Button>
          <Contact.Break />
        </Contact.Form >
        <Contact.Information>
        <Contact.InformationTextTitle>Informacion de Contacto</Contact.InformationTextTitle>

          <Contact.InfoContainer src={email}>
            <Contact.InfoText >lorem@ipsum.com</Contact.InfoText>
          </Contact.InfoContainer>

          <Contact.InfoContainer src={find}>
            <Contact.InfoText >Bogota, Colombia</Contact.InfoText>
          </Contact.InfoContainer>

          <Contact.InfoContainer src={phone}>
            <Contact.InfoText >+57 123 123 1234</Contact.InfoText>
          </Contact.InfoContainer>

          <Contact.InfoContainer src={page}>
            <Contact.InfoText >mypage.com</Contact.InfoText>
          </Contact.InfoContainer>

          <Contact.LinksContainer>
            <Contact.LinksLogo src={git} alt="git" onClick={() => openTab("https://www.google.com")}/>
            <Contact.LinksLogo src={instagram} alt="instagram" onClick={() => openTab("https://www.google.com")}/>
            <Contact.LinksLogo src={linkedin}alt="linkedin" onClick={() => openTab("https://www.google.com")}/>
            <Contact.LinksLogo src={yt} alt="yt" onClick={() => openTab("https://www.google.com")}/>
          </Contact.LinksContainer>

        </Contact.Information>
      </Contact.InnerContainer>
    </Contact>
  </>
  );
}

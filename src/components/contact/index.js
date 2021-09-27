import React from 'react';
import { Container, Input, Break, Button, Text, Information,InnerContainer,InfoLogo, InfoContainer, InfoText,Form,LinksContainer,LinksLogo, InformationTextTitle } from './styles/contact';

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Input = function ContactInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Contact.Button = function ContactButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  );
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Contact.InnerContainer =  function ContactInnerContainer({ children, ...restProps }) {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
}
Contact.Form =  function ContactForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}
Contact.Information =  function ContactInformation({ children, ...restProps }) {
  return <Information {...restProps}>{children}</Information>;
}


Contact.InfoLogo = function ContactInfoLogo ({children , ...restprops}) {
    return <InfoLogo {...restprops}/>
};

Contact.InfoContainer = function ContactInfoContainer ({children , ...restprops}) {
    return <InfoContainer {...restprops}>
        <InfoLogo {...restprops}/>{children}
    </InfoContainer>

};
Contact.InfoText = function ContactInfoText ({children , ...restprops}) {
    return <InfoText {...restprops}>{children}</InfoText>
};

Contact.LinksContainer = function ContactLinksContainer({ children, ...restProps }) {
  return <LinksContainer {...restProps}>{children}</LinksContainer>;
};

Contact.InformationTextTitle = function ContactInformationTextTitle({ children, ...restProps }) {
  return <InformationTextTitle {...restProps}>{children}</InformationTextTitle>;
};

Contact.LinksLogo = function ContactLogo({ children, ...restProps }) {
  return <LinksLogo {...restProps}/>;
};
Contact.Break = function ContactBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

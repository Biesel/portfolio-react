import React from 'react';
import { Container,Link,UpLogo } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.UpLogo = function HeroUpLogo({ children, ...restProps }) {
  return <UpLogo {...restProps}/>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

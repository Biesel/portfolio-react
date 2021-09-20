import React from 'react';
import { Container, Links,LinksLogo,DeveloperContainer,Title, SubTitle, Image, Background } from './styles/hero';

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Background = function HeroBackground({ children,...restProps }) {
  return <Background {...restProps} >{children}</Background>;
};

Hero.Links = function HeroLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Hero.LinksLogo = function HeroLinksLogo({ children, ...restProps }) {
  return <LinksLogo {...restProps}/>;
};

Hero.DeveloperContainer = function HeroDeveloperContainer({ children, ...restProps }) {
  return <DeveloperContainer {...restProps}>{children}</DeveloperContainer>;
};
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.SubTitle = function HeroSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Hero.Image = function HeroImage({ ...restProps }) {
  return <Image {...restProps} />;
};

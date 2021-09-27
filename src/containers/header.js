import React from 'react';
import { Header } from '../components';
import {Link} from 'react-scroll'
import logo from '../assets/logos/logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={logo} alt="Nombre Desarrollador" />

        <Header.TextLink > <Link  to="skills" spy={true} smooth={true}>Habilidades</Link></Header.TextLink>

        <Header.TextLink > <Link  to="projects" spy={true} smooth={true}>Proyectos</Link></Header.TextLink>

        <Header.ButtonLink > <Link  to="contact" spy={true} smooth={true}>Contact</Link></Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

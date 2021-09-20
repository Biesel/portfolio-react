import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../assets/logos/logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Nombre Desarrollador" />

        <Header.TextLink >Acerca</Header.TextLink>

        <Header.TextLink >Proyectos</Header.TextLink>

        <Header.ButtonLink >Contacto</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

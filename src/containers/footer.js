import React from 'react';
import { Footer } from '../components';
import  logo from '../assets/logos/g8169.png';


export function FooterContainer() {
  return (
    <Footer>
      <Footer.UpLogo src={logo}/>
      <Footer.Link href="#">Developer Name Copyright @2021</Footer.Link>
    </Footer>
  );
}

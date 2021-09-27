import React from 'react';
import { Footer } from '../components';
import  logo from '../assets/logos/g8169.png';


export function FooterContainer() {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

  return (

    <Footer>
      <Footer.UpLogo src={logo} onClick={scrollToTop}/>
      <Footer.Link href="#">Developer Name Copyright @2021</Footer.Link>
    </Footer>
  );
}

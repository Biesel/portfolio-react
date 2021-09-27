import React from 'react';
import { Hero } from '../components';
import git from '../assets/logos/github-svgrepo-com.svg';
import instagram from '../assets/logos/instagram-svgrepo-com.svg';
import linkedin from '../assets/logos/linkedin-svgrepo-com.svg';
import yt from '../assets/logos/youtube-svgrepo-com.svg';
import developer_img from '../assets/images/silhoutte.png';

const openTab = (props) => {
  window.open(props, "_blank");
};

export function HeroContainer() {
  return (
    <>
    <Hero.Background>
    <Hero>

    <Hero.Links>
    <Hero.LinksLogo src={git} alt="git" onClick={() => openTab("https://www.google.com")}/>
    <Hero.LinksLogo src={instagram} alt="instagram" onClick={() => openTab("https://www.google.com")}/>
    <Hero.LinksLogo src={linkedin}alt="linkedin" onClick={() => openTab("https://www.google.com")}/>
    <Hero.LinksLogo src={yt} alt="yt" onClick={() => openTab("https://www.google.com")}/>
    </Hero.Links>

    <Hero.DeveloperContainer>
    <Hero.Title>Jhon Barret
    Stone Castle</Hero.Title>
    <Hero.SubTitle>UIX Designer / Web Developer</Hero.SubTitle>
    </Hero.DeveloperContainer>

    </Hero>
    <Hero.Image src={developer_img} alt="Image"/>
    </Hero.Background>
    </>
  );
}

import React from 'react';
import { Hero } from '../components';
import git from '../assets/logos/github-svgrepo-com.svg';
import instagram from '../assets/logos/instagram-svgrepo-com.svg';
import linkedin from '../assets/logos/linkedin-svgrepo-com.svg';
import yt from '../assets/logos/youtube-svgrepo-com.svg';
import developer_img from '../assets/images/silhoutte.png';

export function HeroContainer() {
  return (
    <>
    <Hero.Background>
    <Hero>
      
    <Hero.Links>
    <Hero.LinksLogo src={git} alt="git"/>
    <Hero.LinksLogo src={instagram} alt="instagram"/>
    <Hero.LinksLogo src={linkedin}alt="linkedin"/>
    <Hero.LinksLogo src={yt} alt="yt"/>
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

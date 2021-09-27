import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer.js';
import { HeroContainer } from '../containers/hero.js';
import { SkillsContainer } from '../containers/skills.js';
import { ProjectsContainer } from '../containers/projects.js';
import { ContactContainer } from '../containers/contact';

export default function Home() {
  return (
    <>
      <HeaderContainer>
      </HeaderContainer>
      <HeroContainer>
      </HeroContainer>
      <SkillsContainer/>
      <ProjectsContainer/>
      <ContactContainer/>
      <FooterContainer />
    </>
  );
}

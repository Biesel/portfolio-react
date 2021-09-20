import React from 'react';
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles/skills';

export default function Skills({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Skills.Container = function SkillsContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Skills.Pane = function SkillsPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Skills.Title = function SkillsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Skills.SubTitle = function SkillsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Skills.Image = function SkillsImage({ ...restProps }) {
  return <Image {...restProps} />;
};

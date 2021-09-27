import React from 'react';
import {Container, SkillTitle, SkillContentContainer,
	SkillList,SkillListImg,
	SkillListContent, SkillPieChartContainer, SkillPieChart,SkillListContentText
        } from './styles/skills'


export default function Skills({children, ...restProps}){
 return <Container {...restProps}>{children}</Container>;
}

Skills.Title = function SkillsTitle({ children, ...restProps }) {
  return <SkillTitle {...restProps}>{children}</SkillTitle>;
};

Skills.ContentContainer = function SkillsContentContainer({ children, ...restProps }) {
  return <SkillContentContainer {...restProps}>{children}</SkillContentContainer>;
};

Skills.SkillList = function SkillsList({ children, ...restProps }) {
  return <SkillList {...restProps}>{children}</SkillList>;
};

Skills.SkillListImg = function SkillsListImg({...restProps }) {
  return <SkillListImg {...restProps}/>;
};


Skills.SkillListContent = function SkillsListContent({ children, ...restProps }) {
  return <SkillListContent>
		<Skills.SkillListImg {...restProps}/>{children}
		</SkillListContent>;
};

Skills.SkillListContentText = function SkillsListCaption({ children, ...restProps }) {
  return <SkillListContentText{...restProps}>{children}</SkillListContentText>;
};

Skills.PieChartContainer = function SkilsPieChartContainer({ children, ...restProps }) {
  return <SkillPieChartContainer {...restProps}>{children}</SkillPieChartContainer>;
};

Skills.PieChart = function SkillsPieChart({ children, ...restProps }) {
  return <SkillPieChart {...restProps}>{children}</SkillPieChart>;
};

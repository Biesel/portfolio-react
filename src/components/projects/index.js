import React from 'react';
import {Container, Title, List,
        ListContent, PortfolioContainer, Triangle,
        Portfolio, PortfolioLink, ListLink} from './styles/projects';

export default function Project({children, ...restProps}){
 return <Container {...restProps}>{children}</Container>
}

Project.Title = function ProjectTitle({children, ...restProps}){
 return <Title {...restProps}>{children}</Title>;
};

Project.List = function ProjectList({children, ...restProps}){
 return <List {...restProps}>{children}</List>
};

Project.ListLink = function ProjectListLink({children, ...restProps}){
 return <ListLink {...restProps}>{children}</ListLink>
};

Project.ListContent = function ProjectListContent({children, ...restProps}){
 return <Project.ListLink {...restProps}>
	 <ListContent >{children}</ListContent>
	</Project.ListLink>
};

Project.PortfolioContainer = function ProjectPortfolioContainer({children, ...restProps}){
 return <PortfolioContainer {...restProps}>{children}</PortfolioContainer>
};

Project.PortfolioLink = function ProjectPortfolioLink({children, ...restProps}){
 return <PortfolioLink {...restProps}>{children}</PortfolioLink>
};

Project.Portfolio= function ProjectPortfolio({...Props}){
 return <Project.PortfolioLink href={Props.href}>
		<Portfolio src={Props.src} />
	</Project.PortfolioLink>
};

Project.Triangle= function ProjectTriangle({children, ...restProps}){
 return <Triangle {...restProps}>{children}</Triangle>
};

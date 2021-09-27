import React from 'react';
import {Project as Prj} from '../components';
import project from '../assets/thumbnails/project_1.jpg';

const projects = [project, project, project,
	        project, project, project];

export function ProjectsContainer(){

 return(
   <>
    <Prj>
        <Prj.Triangle />

	 <Prj.Title>Proyectos</Prj.Title>

	 <Prj.List>
	   <Prj.ListContent href="#" >PHP</Prj.ListContent>
	   <Prj.ListContent href="#" >Node.js</Prj.ListContent>
	   <Prj.ListContent href="#" >Ruby on rails</Prj.ListContent>
	   <Prj.ListContent href="#" >Python</Prj.ListContent>
	 </Prj.List>

	 <Prj.PortfolioContainer>

	  {projects.map( image => (

            <Prj.Portfolio src={image} href={'#'}/>

           ))}

	 </Prj.PortfolioContainer>

         <Prj.Triangle />
    </Prj>
   </>
 );
}

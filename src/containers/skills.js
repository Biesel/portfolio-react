import React from 'react';
import {Skills as Sk} from '../components';
// import icon_nodejs from '../assets/graphs/skill_icons_nodejs.png';
// import icon_php from '../assets/graphs/skill_icons_php.png';
// import icon_rails from '../assets/graphs/skill_icons_rurails.png';
import icon from '../assets/graphs/skill_icon_example.png';
import graph_pieChart from '../assets/graphs/pie_chart_example.png';

export function SkillsContainer(){
 return(
   <>
   <Sk>

     <Sk.Title> Habilidades</Sk.Title>

     <Sk.ContentContainer>
	 <Sk.SkillList>
	   <Sk.SkillListContent src={icon}>
		   <Sk.SkillListContentText>Skill</Sk.SkillListContentText>
		   </Sk.SkillListContent>
	   <Sk.SkillListContent src={icon}>
		   <Sk.SkillListContentText>Skill</Sk.SkillListContentText>
		   </Sk.SkillListContent>
	   <Sk.SkillListContent src={icon}>
		   <Sk.SkillListContentText>Skill</Sk.SkillListContentText>
		   </Sk.SkillListContent>
	   <Sk.SkillListContent src={icon}>
		   <Sk.SkillListContentText>Skill</Sk.SkillListContentText>
		   </Sk.SkillListContent>
	 </Sk.SkillList>

	<Sk.PieChartContainer>
	  <Sk.PieChart src={graph_pieChart} alt="My abilities pie char"/>
	</Sk.PieChartContainer>

    </Sk.ContentContainer>
   </Sk>
   </>
 );
}

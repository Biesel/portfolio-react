import styled from 'styled-components/macro';


export const Container = styled.div`
 background-color: #000814;
`;

export const SkillTitle = styled.h1`
 color:white;
 text-align: center;
 padding-top: 3rem;
 margin-left:5rem;
 font-size: 4rem;
 margin-top:0;
`;

export const SkillContentContainer = styled.div`
 display: flex;
 justify-content:center;
 align-content:center;
 margin-left: 2rem;
 padding-bottom: 10rem;
`;

export const SkillList = styled.div`
 display: grid;
 grid-template-columns: repeat(2,1fr);
`;


export const SkillListImg = styled.img`
`;

export const SkillListContent = styled.figure`
 display: flex;
 flex-flow: column;
 margin-bottom:2rem;
 width:15rem;

`;
export const SkillListContentText = styled.figure`
text-align: center;
color:white;
text-transform:uppercase;
font-size:1.6rem;
font-weight:700;
`;

export const SkillPieChartContainer = styled.div`
 margin-left: 20rem;
 height:320px;
`;

export const SkillPieChart = styled.img`
 height:40rem;
 margin-top:4rem;
`;

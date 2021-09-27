import styled from 'styled-components/macro';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Title = styled.h4`
 text-align: center;
 margin-left:5rem;
 font-size: 4rem;

`;

export const List = styled.ul`
  display:flex;
  justify-content:center;
  width: 35%;
  margin: auto;
  list-style-type: none;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const ListContent = styled.li`
 display: inline-block;
 padding: 0px 10px;
`;

export const PortfolioContainer= styled.div`
  max-width:750px;
  margin: auto;
  margin-bottom: 5rem;
`;

export const Portfolio= styled.img`
  width: 250px;
  padding: 5px;
  height: auto;

`;

export const Triangle= styled.img`

  &:nth-child(1){
   height: 0;
   border-left: 2rem solid transparent;
   border-right: 2rem solid transparent;
   border-top: 2rem solid #000814;
   border-bottom: 2rem solid transparent;
  }

   width: 100%;
   height: 0;
   border-left: 2rem solid transparent;
   border-right: 2rem solid transparent;
   border-bottom: 2rem solid #000814;


`;

export const PortfolioLink = styled.a`

 &:link, &:visited, &:active {
   background-color: transparent;
   transition: background-color 1s;
   filter: brightness(1);
   transition: filter 1s;
   transition-timing-function: ease-out;
 }

 &:hover{
   background-color: #000814;
   transition: background-color 1s;
   filter: brightness(0.6);
   transition: filter 1s;;
   transition-timing-function: ease-out;
 }
`;

export const ListLink = styled.a`
 &:link, &:visited, &:active {
   color: #909090;
   transition: color 1s;
   transition-timing-function: ease-out;
 }

 &:hover{
   color: #000814;
   transition: color 1s;
   transition-timing-function: ease-out;
 }
`;

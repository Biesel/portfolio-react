import styled from 'styled-components/macro';


export const Container = styled.div`
  display: grid;
  grid-template-columns:repeat(2,1fr);
  padding: 20px;
  // margin: auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Links = styled.div`
display: flex;
flex-direction:column;
margin-top: 170px;
margin-left: 100px;
// justify-content: space-between;
align-content: space-between;
padding-right:10%;
  // border-bottom: 8px solid #222;
  // padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const LinksLogo = styled.img`
  max-width: 70px;
  height: 70px;
  margin-bottom:10%;
`;

export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 70px 0;
  margin: auto;
  margin-bottom:20px;
  max-width: auto;
  hight:auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  letter-spacing:2px;
  line-height: 1.1;
  margin-bottom: 8px;
  color:white;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  letter-spacing:6px;
  font-weight: normal;
  line-height: normal;
  color:#ffee32;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
position:absolute;
width: 550px;
height: 868px;
left:70%;
bottom:1%;
top:12%;
`;

export const Background = styled.div`
// position:relative;
  width: 100%;
  height: 885px;
 background-image: linear-gradient(to bottom right, #000814, #000814 60%, transparent 60%);}
 z-index:-10;
`;

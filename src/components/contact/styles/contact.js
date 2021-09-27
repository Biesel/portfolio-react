import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  background-color:#ffd60a;
  justify-content: center;
  align-items:center;
  height: 80rem;
  width:100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 35rem;
  padding: 1rem;
  height: 15rem;
  border-width: 0 0 2px;
  background-color:transparent;
  border-color:#000814;
  box-sizing: border-box;
  margin:3rem;
  font-size:1.6rem;

  &:focus {
    outline-style: none;
    outline-color: none;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-contents:center;
  height: 2rem;
  background: #000814;
  color: white;
  text-transform: uppercase;
  padding: 2rem 1.5rem ;
  font-size: 1.7rem;
  border-radius: 90px;
  cursor: pointer;
  margin-top:1.5rem;

    @media (max-width: 1000px) {
      width: 16rem;
    }
  }

  &:hover {
    background: #2a4280;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  color: #00000;
  font-weight:700;
  text-align: center;
  text-transform:uppercase;

  @media (max-width: 600px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

`;

export const InnerContainer = styled.div`
  display: flex;
  align-items:center;
  justify-contents:center;
  height: 40rem;
  width:55%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  `;

  export const Form = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-contents:center;
  height: 40rem;
  padding: 0 4rem;
  width:60rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  `;

export const Information = styled.div`
  display: flex;
  flex-direction:column;
  background-color:#000814;
  justify-content: center;
  align-content: center;
  width:40rem;
  border-radius:2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InformationTextTitle = styled.p`
  font-size: 3rem;
  color: white;
  text-transform:uppercase;
  font-weight:700;
  padding:1rem;
  text-align:center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;



export const LinksContainer = styled.div`
display: flex;
flex-direction:row;
margin-top: 4rem;

justify-content: center;
align-content: center;
color: white;
overflow: hidden;
`;

export const LinksLogo = styled.img`
max-width: 50px;
height: 50px;
filter: invert(0%) sepia(1%) saturate(1%) hue-rotate(351deg) brightness(104%) contrast(100%);
margin-right:2rem;
margin-bottom:2rem;
&:hover{
  cursor:pointer;
}

`;

export const InfoLogo = styled.img`
filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(6deg) brightness(106%) contrast(101%);
height: 3rem;
`;

export const InfoContainer = styled.figure`
display: flex;
align-items:center;
margin-bottom:1.2rem;
`;

export const InfoText  = styled.figure`
color:white;
text-transform:uppercase;
font-size:1.8rem;
font-weight:400;
`;
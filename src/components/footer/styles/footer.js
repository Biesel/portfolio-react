import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#000814;
  height:auto;
  padding:20px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const UpLogo = styled.img`
  width: 4%;
  height:auto;
  margin-bottom:40px;
  &:hover {
    cursor:pointer;
  }
`;
export const Link = styled.a`
  color: white;
  font-size: 16px;
  padding-top:2px;
  text-decoration: none;
`;

import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2%;
  height: 60%;

  @media (max-width: 768px) {
    gap: 5%;
  }
`;

export const SearchButtonContainer = styled.div`
  border-radius: 10px;
  background-color: #8dd3bb;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SearchButton = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

import styled from 'styled-components'

export const LowerSection = styled.div`
  box-sizing: border-box;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 30%;
`
export const RequestButtonContainer = styled.div`
  display: flex;
  gap: 5%;
`
export const CardContainer = styled.div`
  position: relative;
`
export const DeleteButton = styled.img`
  position: absolute;
  width: 2.25vw;
  aspect-ratio: 1;
  z-index: 1;
  top: 12%;
  right: 3%;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.75% 0;
`

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5vw;
  font-weight: 600;
  line-height: 3vw;
  text-align: left;
`

export const CreateButton = styled.div`
  position: relative;
  padding: 0.75% 1%;
  background: #93d5bf;
  border-radius: 10px;
  font-size: 2vw;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #82c5ab;
  }
  @media (max-width: 768px) {
    border-radius: 5px;
  }
  @media (max-width: 440px) {
    border-radius: 2.5px;
  }
`

export const ProfileCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    ${CreateButton} {
      height: auto;
    }
  }
`

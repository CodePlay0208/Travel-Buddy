import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2%;
  padding: 0 1%;
  height: 60%;
  position: relative;
  @media (max-width: 456px) {
    gap: 1%;
    padding: 3%;
  }
`

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 1%;
  gap: 2%;
  position: relative;
  @media (max-width: 456px) {
    flex-direction: column;
    gap: 1%;
  }
`
export const SearchButtonContainer = styled.div`
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 4vw;
    aspect-ratio: 1;
  }
  @media (max-width: 786px) {
    img {
      width: 7vw;
      aspect-ratio: 1;
    }
  }
`

export const SearchButton = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2vw;
  font-weight: 600;
  line-height: 100%;
  text-align: left;
`

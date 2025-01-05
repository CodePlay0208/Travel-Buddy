import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2%;
  height: 60%;
  font-size: 3vw;
  line-height: 2.5vw;
  position:relative;
  @media (max-width: 768px) {
    gap: 1%;
  }
`

export const SearchButtonContainer = styled.div`
  border-radius: 10px;
  background-color: #8dd3bb;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SearchButton = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2vw;
  font-weight: 600;
  line-height: 100%;
  text-align: left;
`

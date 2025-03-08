import styled from 'styled-components'

export const SearchResultsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
`

export const TripList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5%;
  width: 100%;
  gap: 4%;
`

export const SearchResultButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
`

export const ShowMoreButton = styled.button`
  font-size: 36px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: var(--color-primary);
  border-radius: 10px;
  font-weight: 700;
  border: none;
  color: rgb(0, 0, 0);
  padding: 2%;
  margin-bottom: 3%;
  &:hover {
    background-color: #7cc2a9;
  }
`

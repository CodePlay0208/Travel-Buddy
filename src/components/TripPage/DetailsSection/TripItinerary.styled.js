import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2%;
  max-height: 75vh;
  @media (max-width: 1080px) {
    flex-direction: column;
    gap:20px
  }

  @media (max-width: 440px) {
   max-height: 700px;
  }
`
export const DayTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  gap: 10px;
  @media (max-width: 1080px) {
    width: 100%;
    height: 100%;
  }
`
export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80%;
  height: 100%;
  @media (max-width: 1080px) {
    width: 100%;
    height: 100%;
  }

`
export const DayTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  background: #ffffff;
  color: #000000;
  font-weight: 600;
  height: 80px;
  font-size: 1.5rem;
  line-height: 2.5rem;
  padding: 1% 2%;
  box-shadow: 0px 0px 9px 0px #00000036;

  cursor: pointer;
  border-radius: 35px;

  &.active {
    background: #8dd3bb;
    box-shadow: 0px 0px 9px 0px #00000036;
  }

  @media (max-width: 1080px) {
    height: 50px;
  }
  @media (max-width: 440px) {
    padding: 5% 3%;
    font-size: 3rem;
    width: 100%;
    height: 100%;
  }
`

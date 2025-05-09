import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  position: relative;
  max-width: 600px;
  width: 75vw;
  padding: 2%;
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(141, 211, 187, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 440px) {
    padding: 5%;
  }
`

export const Title = styled.h2`
  max-width: 488px;
  /* height: 68px; */
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #000000;
  text-align: center;
  margin: 0 0 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 440px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`

export const Button = styled.button`
  height: 52.14px;
  width: 50%;
  border: none;
  border-radius: 54px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 440px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const DeleteBtn = styled(Button)`
  background: #ef4343;
  color: #000000;
`

export const StayBtn = styled(Button)`
  background: #8dd3bb;
  color: #000000;
`

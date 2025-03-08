import styled from 'styled-components'
import firstImage from '../data/Images/image.png'

export const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff 50%, var(--color-primary) 50%);
  padding: 5%;

  @media (max-width: 786px) {
    padding: 3%;
  }
`

export const NewsletterWrapper = styled.div`
  display: flex;
  background: #cdeae1;
  box-shadow: 0px 4.8px 19.2px rgba(17, 34, 17, 0.05);
  border-radius: 24px;
  overflow: hidden;
  align-items: flex-start;
  width: 80%;
  padding: 2% 2% 0;

  @media (max-width: 786px) {
    border-radius: 12px;
    width: 100%;
  }
`

export const NewsletterHeader = styled.div`
  font-family: 'TradeGothic LT Extended';
  font-style: normal;
  font-weight: 700;
  font-size: 3.5vw;
  color: #112211;
  margin-bottom: 5%;

  @media (max-width: 786px) {
    font-size: 5vw;
  }
`

export const NewsletterLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
`

export const NewsletterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;

  h2 {
    margin: 0;
    font-family: 'TradeGothic LT Extended';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    color: #112211;
    opacity: 0.8;

    @media (max-width: 786px) {
      font-size: 3vw;
    }
  }

  p {
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1vw;
    color: #112211;
    opacity: 0.7;

    @media (max-width: 786px) {
      font-size: 2.5vw;
    }
  }
`

export const NewsletterForm = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 5%;

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 2.5%;

  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const EmailInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 23px;
  color: #1c1b1f;
  background: transparent;
  margin: 2.5%;

  @media (max-width: 786px) {
    font-size: 3.5vw;
  }
`

export const NewsletterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #112211;
  border-radius: 25px;
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1vw;
  cursor: pointer;
  padding: 2%;
  border: none;

  @media (max-width: 786px) {
    font-size: 2.5vw;

    padding: 5% 10%;
    border-radius: 25px;
  }
`

export const NewsletterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40%;
  margin-top: 4%;
  margin-left: 2.5%;

  @media (max-width: 786px) {
    margin-top: 20%;
  }
`

export const NewsletterImage = styled.img.attrs({
  src: firstImage,
  alt: 'Newsletter',
})`
  width: 80%;
  aspect-ratio: 4/3;
  border-radius: 5px;

  @media (max-width: 786px) {
    border-radius: 3px;
    width: 100%;
  }
`

import styled from 'styled-components'
import firstImage from '../data/Images/image.png'

export const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff 50%, #8dd3bb 50%);
  padding: 20px;
`

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84%;
  max-width: 1470px;
  background: #cdeae1;
  box-shadow: 0px 4.8px 19.2px rgba(17, 34, 17, 0.05);
  border-radius: 24px;
  overflow: hidden;
`

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 2% 2% 0;
`

export const NewsletterHeader = styled.div`
  font-family: 'TradeGothic LT Extended';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 65px;
  color: #112211;
  margin-bottom: 7%;
`

export const NewsletterLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const NewsletterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin: 0;
    font-family: 'TradeGothic LT Extended';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #112211;
    opacity: 0.8;
  }

  p {
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
    color: #112211;
    opacity: 0.7;
  }
`

export const NewsletterForm = styled.div`
  padding: 10px 0 0;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`

export const EmailInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #1c1b1f;
  background: transparent;
  margin: 10px;
`

export const NewsletterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: #112211;
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  padding: 20px;
`

export const NewsletterRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NewsletterImage = styled.img.attrs({
  src: firstImage,
  alt: 'Newsletter',
})`
  max-width: 100%;
  width: 480.28px;
  height: 366.21px;
  border-radius: 5px;
`

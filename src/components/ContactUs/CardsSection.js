import React from 'react'
import styled from 'styled-components'
import MailCircleIcon from '../../assets/svg/mailCircle'
import PhoneCircleIcon from '../../assets/svg/phoneCircle'

const CardsFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 40px;
  }
`

const Card = styled.div`
  width: 560px;
  height: 260px;
  position: relative;
  padding: 45px 0 0;
  background: #fff;
  border-radius: 32px;

  @media (max-width: 1080px) {
    width: 440px;
    padding: 25px 0 0;
  }
  @media (max-width: 440px) {
    width: 340px;
    height: 160px;
    padding: 25px 0 0;
  }
`

const CardBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 215px;
  border-radius: 24px;
  padding: 24px;

  background: #fafafa;
  box-shadow: 1px 2px 6px 0px #00000029;
  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: 1px solid #000000;
    box-shadow: 20px 20px 0px #8dd3bbbb;
  }

  @media (max-width: 440px) {
    width: 100%;
    height: 130px;
  }
`

const CardText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.35rem;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
  }
`

const IconCircle = styled.div`
  position: absolute;
  width: 85px;
  height: 85px;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 440px) {
    width: 50px;
    height: 50px;
  }
`

const PlaceholderIcon = styled.div`
  border: 2px solid #000;
  border-radius: 12px;
`

const CardsSection = () => (
  <CardsFrame>
    <Card>
      <IconCircle>
        <PhoneCircleIcon />
      </IconCircle>
      <CardBg>
        <CardText>+91 1234567890</CardText>
        <CardText>+91 2345678901</CardText>
      </CardBg>
    </Card>
    <Card>
      <IconCircle>
        <MailCircleIcon />
      </IconCircle>
      <CardBg>
        <CardText>xyz123@Gmail.com</CardText>
        <CardText>xyz123@Gmail.com</CardText>
      </CardBg>
    </Card>
  </CardsFrame>
)

export default CardsSection

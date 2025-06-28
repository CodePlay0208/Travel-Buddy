import React from 'react'
import {
  Frame,
  ImageWrapper,
  SideFrame,
  Overlay,
  WaitingMessageBig,
  WaitingMessageSmall,
  TextBlock,
  Question,
  Description,
} from './WaitingScreen.styled'

const WaitingScreen = () => (
  <Frame>
    <ImageWrapper>
      <Overlay />
      <WaitingMessageBig>Travel far, travel wide, make friends on every side</WaitingMessageBig>
    </ImageWrapper>
    <SideFrame>
      <WaitingMessageSmall>We’re Here to Help You Plan the Perfect Trip!</WaitingMessageSmall>
      <TextBlock>
        <Question>Have questions, need assistance, or want to know more about a travel package?</Question>
        <Description>
          Our team at Travmigoz is just a message away. Whether you’re looking to book your next adventure or partner with us as a vendor,
          we’d love to hear from you.
        </Description>
      </TextBlock>
    </SideFrame>
  </Frame>
)

export default WaitingScreen

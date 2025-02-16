import React from 'react'
import { BoxContainer, BoxContent, ProfileImage, Heading, BodyText, ImageContainer, RemoveIcon } from './DetailBox.styled'

const DetailBox = ({ heading, body, profilePic }) => {
  return (
    <BoxContainer className={body}>
      <BoxContent>
        <ImageContainer>
          <ProfileImage src={profilePic} alt="TravellerPic" />
          <RemoveIcon></RemoveIcon>
        </ImageContainer>
        <Heading>{heading}</Heading>
        <BodyText>{body}</BodyText>
      </BoxContent>
    </BoxContainer>
  )
}

export default DetailBox

import React from 'react'
import { BoxContainer, BoxContent, ProfileImage, Heading, BodyText } from './DetailBox.styled'

const DetailBox = ({ heading, body, profilePic }) => {
  return (
    <BoxContainer>
      <BoxContent>
        <ProfileImage
          src={profilePic}
          alt="TravellerPic"
        />
        <Heading>{heading}</Heading>
        <BodyText>{body}</BodyText>
      </BoxContent>
    </BoxContainer>
  )
}

export default DetailBox

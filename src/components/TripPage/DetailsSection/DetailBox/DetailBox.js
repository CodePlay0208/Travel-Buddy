import React from 'react'
import { BoxContainer, BoxContent, ProfileImage, Heading, BodyText, ImageContainer, RemoveIcon } from './DetailBox.styled'
import { useNavigate } from 'react-router-dom'

const DetailBox = ({ id, heading, body, profilePic }) => {
  const navigate = useNavigate()
  return (
    <BoxContainer className={body} onClick={() => navigate('/user/' + id)}>
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

import React from 'react'
import { BoxContainer, BoxContent, ProfileImage, Heading, BodyText, ImageContainer, RemoveIcon } from './DetailBox.styled'
import { useNavigate } from 'react-router-dom'

const DetailBox = ({ id, heading, body, profilePic }) => {
  const navigate = useNavigate()

  const handleProfileClick = (id) => {
    if (localStorage.token) {
      navigate(`/user/${id}`)
    } else {
      navigate('/login')
    }
  }

  return (
    <BoxContainer className={body} onClick={() => handleProfileClick(id)}>
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

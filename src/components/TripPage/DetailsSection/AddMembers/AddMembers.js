import React from 'react'
import DetailBox from '../DetailBox/DetailBox'
import { LowerSection, HeadingContainer, Title, CreateButton, ProfileCardsContainer } from './AddMembers.styled'

const AddMembers = () => {
  return (
    <LowerSection>
      <HeadingContainer>
        <Title>Meet Your Travmigoz</Title>
        <CreateButton>Create More</CreateButton>
      </HeadingContainer>

      <ProfileCardsContainer>
        <DetailBox heading={'Username'} body={'Trip Publisher'} svg={''} />
        <DetailBox heading={'Username'} body={'Member 1'} svg={''} />
        <DetailBox heading={'Username'} body={'Member 2'} svg={''} />
      </ProfileCardsContainer>
    </LowerSection>
  )
}

export default AddMembers

import { useState } from 'react'
import {
  SectionContainer,
  DescriptionContainer,
  Title,
  DescriptionTitle,
  DescriptionContent,
  ToggleButton,
  ChatSection,
  ProfileImage,
  ProfilePicture,
  ProfileName,
  DateContainer,
  DateSection,
  InfoSection,
  DetailsBox,
  BoxHeading,
  BoxContent,
  ChatButton,
  GreyLine,
  StartDate,
  EndDate,
} from './TripDescription.styled'

const TripDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ...`
  const words = content.split(' ')
  const displayedContent = isExpanded ? content : words.slice(0, 40).join(' ') + '...'

  return (
    <SectionContainer>
      <DescriptionContainer>
        <Title>Add Title Here</Title>
        <DescriptionTitle>Description</DescriptionTitle>
        <GreyLine />
        <DescriptionContent>
          {displayedContent}
          {words.length > 40 && <ToggleButton onClick={toggleExpand}>{isExpanded ? ' Show Less' : ' Show More'}</ToggleButton>}
        </DescriptionContent>
      </DescriptionContainer>
      <ChatSection>
        <ProfileImage>
          <ProfilePicture src="" alt="" />
          <ProfileName>User</ProfileName>
        </ProfileImage>
        <GreyLine />
        <DateContainer>
          <DateSection>
            <StartDate>
              <BoxHeading>Start Date</BoxHeading>
              <BoxContent>DD/MM/YYYY</BoxContent>
            </StartDate>
            <EndDate>
              <BoxHeading>End Date</BoxHeading>
              <BoxContent>DD/MM/YYYY</BoxContent>
            </EndDate>
          </DateSection>
          <InfoSection>
            <DetailsBox>
              <BoxHeading>Budget</BoxHeading>
              <BoxContent>6000</BoxContent>
            </DetailsBox>
            <DetailsBox>
              <BoxHeading>Members</BoxHeading>
              <BoxContent>10</BoxContent>
            </DetailsBox>
          </InfoSection>
          <ChatButton>Chat Now</ChatButton>
        </DateContainer>
      </ChatSection>
    </SectionContainer>
  )
}

export default TripDescription

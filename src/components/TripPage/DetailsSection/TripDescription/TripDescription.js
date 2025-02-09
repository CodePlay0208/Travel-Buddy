import { useState, memo } from 'react'
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
  EditButton,
} from './TripDescription.styled'
import { connect } from 'react-redux'
import { formatDate } from '../../../../utils/DateUtils'
import { getOrCreateChat } from '../../../../actions/chats.action'
import { useNavigate } from 'react-router-dom'
import { images } from '../../../../assets/images'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})

const TripDescription = (props) => {
  const { trip, getOrCreateChat, isUserTrip } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const navigate = useNavigate()

  const publisher = trip?.tripMembersIds.filter((user) => user?.userId === trip?.userId)[0]

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const onChatNowClick = async () => {
    const isChatCreated = await getOrCreateChat(publisher?.userId)
    if (isChatCreated) {
      navigate('/chats')
    }
  }

  const onEditTripClick = async () => {
    navigate('/publish-trip', { state: { trip } })
  }

  console.log('trip', JSON.stringify(trip, null, 2))

  const content = trip?.description || ''
  const words = content ? content.split(' ') : []
  const displayedContent = isExpanded ? content : words?.slice(0, 40).join(' ') + '...'

  return (
    <SectionContainer>
      <DescriptionContainer>
        <Title>{`${trip?.startLocation} To ${trip?.destination}`}</Title>
        <DescriptionTitle>Description</DescriptionTitle>
        <GreyLine />
        <DescriptionContent>
          {displayedContent}
          {words?.length > 40 && <ToggleButton onClick={toggleExpand}>{isExpanded ? ' Show Less' : ' Show More'}</ToggleButton>}
        </DescriptionContent>
      </DescriptionContainer>
      <ChatSection>
        <ProfileImage>
          <ProfilePicture src={publisher?.profilePic?.[0] || images.defaultProfileImg} alt="" />
          <ProfileName>{publisher?.username}</ProfileName>
        </ProfileImage>
        <GreyLine />
        <DateContainer>
          <DateSection>
            <StartDate>
              <BoxHeading>Start Date</BoxHeading>
              <BoxContent>{formatDate(trip?.startDate)}</BoxContent>
            </StartDate>
            <EndDate>
              <BoxHeading>End Date</BoxHeading>
              <BoxContent>{formatDate(trip?.endDate)}</BoxContent>
            </EndDate>
          </DateSection>
          <InfoSection>
            <DetailsBox>
              <BoxHeading>Budget</BoxHeading>
              <BoxContent>{trip?.budget}</BoxContent>
            </DetailsBox>
            <DetailsBox>
              <BoxHeading>Members</BoxHeading>
              <BoxContent>{trip?.totalMembers}</BoxContent>
            </DetailsBox>
          </InfoSection>
          {!isUserTrip && <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>}
          {isUserTrip && <EditButton onClick={onEditTripClick}>Edit Trip</EditButton>}
        </DateContainer>
      </ChatSection>
    </SectionContainer>
  )
}

export default connect(mapStateToProps, { getOrCreateChat })(memo(TripDescription))

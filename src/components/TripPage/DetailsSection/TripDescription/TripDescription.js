import { useState, useEffect, memo } from 'react'
import {
  SectionContainer,
  DescriptionContainer,
  Title,
  DescriptionContent,
  ToggleButton,
  ChatSection,
  ProfileImage,
  ProfilePicture,
  ProfileName,
  DateContainer,
  DateSection,
  InfoSection,
  BoxHeading,
  BoxContent,
  ChatButton,
  GreyLine,
  StartDate,
  EndDate,
  EditButton,
  ButtonSection,
  Link,
  ChatSectionContainer,
  Button,
} from './TripDescription.styled'
import { connect } from 'react-redux'
import { formatDate } from '../../../../utils/DateUtils'
import { getOrCreateChat } from '../../../../actions/chats.action'
import { addWishlistTrip, removeWishlistTrip, requestJoinTrip, leaveTrip, deleteUserTrip } from '../../../../actions/trips.action'
import { useNavigate } from 'react-router-dom'
import { images } from '../../../../assets/images'
import { SVG } from '../../../../assets'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
  wishlistTrips: state.tripReducer.wishlistTrips?.trips,
  profile: state.profileReducer.profile,
})

const TripDescription = (props) => {
  const {
    trip,
    getOrCreateChat,
    addWishlistTrip,
    removeWishlistTrip,
    requestJoinTrip,
    leaveTrip,
    deleteUserTrip,
    isUserTrip,
    wishlistTrips,
    profile,
    editMode,
    setEditMode,

    editedData,
    setEditedData,
    onSaveTrip,
  } = props

  const [isExpanded, setIsExpanded] = useState(false)
  const [wishlistAdded, setWishlistAdded] = useState(trip?.isWishlisted || false)
  const [joined, setJoined] = useState(trip?.isJoined || false)
  const [requested, setRequested] = useState(trip?.isRequested || false)
  const navigate = useNavigate()

  const publisher = trip?.tripMembersIds?.find((user) => user?.userId === trip?.userId)

  useEffect(() => {
    setWishlistAdded(trip?.isWishlisted || false)
    setJoined(trip?.isJoined || false)
    setRequested(trip?.isRequested || false)
  }, [trip])

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  const onChatNowClick = async () => {
    const isChatCreated = await getOrCreateChat(trip?.userId)
    if (isChatCreated) {
      navigate('/chats')
    }
  }

  const onWishlistClick = async () => {
    if (!wishlistAdded) {
      const result = await addWishlistTrip(trip.tripId)
      if (result === true) {
        setWishlistAdded(true)
      }
    } else {
      const result = await removeWishlistTrip(trip.tripId)
      if (result === true) {
        setWishlistAdded(false)
      }
    }
  }

  const onShareLinkClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast.success('Link copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy link.')
    }
  }

  const onEditTripClick = () => {
    navigate('/publish-trip', { state: { trip } })
  }

  const onDeleteTripClick = async () => {
    await deleteUserTrip(trip.tripId)
  }

  const onJoinTripClick = async () => {
    if (!joined) {
      if (requested) {
        return
      }
      const result = await requestJoinTrip(trip.tripId)
      if (result === true) {
        setJoined(false)
        setRequested(true)
      }
    } else {
      const result = await leaveTrip(trip.tripId)
      if (result === true) {
        setJoined(false)
        setRequested(false)
      }
    }
  }

  const content = trip?.description || ''
  const words = content ? content.split(' ') : []
  const displayedContent = isExpanded ? content : words.slice(0, 90).join(' ') + '...'

  return (
    <SectionContainer>
      <DescriptionContainer>
        <Title>{`${trip?.startLocation} To ${trip?.destination}`}</Title>
        <GreyLine />
        {editMode ? (
          <textarea defaultValue={content} />
        ) : (
          <DescriptionContent>
            {displayedContent}
            <Link>
              {words.length > 90 && <ToggleButton onClick={toggleExpand}>{isExpanded ? ' Show Less' : ' Show More'}</ToggleButton>}
            </Link>
          </DescriptionContent>
        )}
      </DescriptionContainer>
      <ChatSectionContainer>
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
              <StartDate>
                <BoxHeading>Budget</BoxHeading>
                <BoxContent>${trip?.budget}</BoxContent>
              </StartDate>
              <EndDate>
                <BoxHeading>Members</BoxHeading>
                <BoxContent>{trip?.totalMembers ?? 0}</BoxContent>
              </EndDate>
            </InfoSection>
            <ButtonSection>
              <ChatButton onClick={onShareLinkClick}>Share Now</ChatButton>
              {isUserTrip && <EditButton onClick={onDeleteTripClick}>Delete Trip</EditButton>}
              {!isUserTrip && <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>}
              {!isUserTrip && (
                <ChatButton onClick={onWishlistClick}>
                  {wishlistAdded ? <img src={SVG.wishListRed} alt="wishlist" /> : <img src={SVG.wishlist} alt="wishlist" />}
                </ChatButton>
              )}
            </ButtonSection>
          </DateContainer>
        </ChatSection>
        <ChatButton
          style={{ width: '100%' }}
          onClick={() => {
            isUserTrip ? onEditTripClick() : onJoinTripClick()
          }}
        >
          {isUserTrip ? 'Edit Trip' : joined ? 'Leave Trip' : requested ? 'Requested' : 'Join Trip'}
        </ChatButton>
      </ChatSectionContainer>
    </SectionContainer>
  )
}

export default connect(mapStateToProps, {
  getOrCreateChat,
  addWishlistTrip,
  removeWishlistTrip,
  requestJoinTrip,
  leaveTrip,
  deleteUserTrip,
})(memo(TripDescription))

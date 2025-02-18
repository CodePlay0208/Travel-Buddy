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
} from './TripDescription.styled'
import { connect } from 'react-redux'
import { formatDate } from '../../../../utils/DateUtils'
import { getOrCreateChat } from '../../../../actions/chats.action'
import { addWishlistTrip, removeWishlistTrip } from '../../../../actions/trips.action'
import { useNavigate } from 'react-router-dom'
import { images } from '../../../../assets/images'
import { SVG } from '../../../../assets'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
  wishlistTrips: state.tripReducer.wishlistTrips,
})

const TripDescription = (props) => {
  const { trip, getOrCreateChat, addWishlistTrip, removeWishlistTrip, isUserTrip, wishlistTrips } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const [wishlistAdded, setWishlistAdded] = useState(false)
  const navigate = useNavigate()

  const publisher = trip?.tripMembersIds?.find((user) => user?.userId === trip?.userId)

  useEffect(() => {
    if (trip && wishlistTrips) {
      const exists = wishlistTrips.find((wTrip) => wTrip.tripId === trip.tripId)
      setWishlistAdded(!!exists)
    }
  }, [trip, wishlistTrips])

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  const onChatNowClick = async () => {
    const isChatCreated = await getOrCreateChat(publisher?.userId)
    if (isChatCreated) {
      navigate('/chats')
    }
  }

  const onWishlistClick = async () => {
    if (!wishlistAdded) {
      try {
        await addWishlistTrip(trip.tripId)
        setWishlistAdded(true)
        toast.success('Trip added to wishlist!')
      } catch (error) {
        toast.error('Failed to add trip to wishlist. Please try again.')
      }
    } else {
      try {
        await removeWishlistTrip(trip.tripId)
        setWishlistAdded(false)
        toast.success('Trip removed from wishlist!')
      } catch (error) {
        toast.error('Failed to remove trip from wishlist. Please try again.')
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

  const content = trip?.description || ''
  const words = content ? content.split(' ') : []
  const displayedContent = isExpanded ? content : words.slice(0, 90).join(' ') + '...'

  return (
    <SectionContainer>
      <DescriptionContainer>
        <Title>{`${trip?.startLocation} To ${trip?.destination}`}</Title>
        <GreyLine />
        <DescriptionContent>
          {displayedContent}
          <Link>{words.length > 90 && <ToggleButton onClick={toggleExpand}>{isExpanded ? ' Show Less' : ' Show More'}</ToggleButton>}</Link>
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
            <StartDate>
              <BoxHeading>Budget</BoxHeading>
              <BoxContent>{trip?.budget}</BoxContent>
            </StartDate>
            <EndDate>
              <BoxHeading>Members</BoxHeading>
              <BoxContent>{trip?.totalMembers}</BoxContent>
            </EndDate>
          </InfoSection>
          <ButtonSection>
            <ChatButton onClick={onShareLinkClick}>Share Now</ChatButton>
            {isUserTrip && <EditButton onClick={onEditTripClick}>Delete Trip</EditButton>}
            {!isUserTrip && <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>}
            {!isUserTrip && (
              <ChatButton onClick={onWishlistClick} style={{ backgroundColor: wishlistAdded ? 'red' : undefined }}>
                <img src={SVG.wishlist} alt="wishlist" />
              </ChatButton>
            )}
          </ButtonSection>
        </DateContainer>
      </ChatSection>
    </SectionContainer>
  )
}

export default connect(mapStateToProps, { getOrCreateChat, addWishlistTrip, removeWishlistTrip })(memo(TripDescription))

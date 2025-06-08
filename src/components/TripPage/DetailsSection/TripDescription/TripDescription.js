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
  JoinButton,
  AlternateButton,
} from './TripDescription.styled'
import { connect } from 'react-redux'
import { formatDate } from '../../../../utils/DateUtils'
import { getOrCreateChat } from '../../../../actions/chats.action'
import { addWishlistTrip, removeWishlistTrip, requestJoinTrip, leaveTrip, deleteUserTrip } from '../../../../actions/trips.action'
import { useNavigate } from 'react-router-dom'
import { images } from '../../../../assets/images'
import { SVG } from '../../../../assets'
import { toast } from 'react-toastify'
import React from 'react'
import Modal from '../../../Modal/Modal'
import AlternateDatesCard from '../AlternateDatesCard/AlternateDatesCard'
import Overlay from '../../../Overlay/overlay'
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
  const [deleteModal, setDeleteModal] = useState(false)
  const [showAlternateDates, setShowAlternateDates] = useState(false)
  const navigate = useNavigate()

  const publisher = trip?.joinedMembers?.find((user) => user?.userId === trip?.hostId)
  const phoneNumber = publisher?.phoneNumber
  useEffect(() => {
    setWishlistAdded(trip?.isWishlisted || false)
    setJoined(trip?.isJoined || false)
    setRequested(trip?.isRequested || false)
  }, [trip])

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  const onChatNowClick = async () => {
    if (!localStorage.token) {
      navigate('/login')
      return
    }
    const isChatCreated = await getOrCreateChat(trip?.hostId)
    if (isChatCreated) {
      navigate('/chats')
    }
  }

  const onWishlistClick = async () => {
    if (!localStorage.token) {
      navigate('/login')
      return
    }
    if (!wishlistAdded) {
      const result = await addWishlistTrip(trip.tripInstanceId)
      if (result) {
        setWishlistAdded(true)
      }
    } else {
      const result = await removeWishlistTrip(trip.tripInstanceId)
      if (result) {
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
    const res = await deleteUserTrip(trip.tripInstanceId)
    if (res) {
      navigate('/user-trips')
    }
  }

  const onJoinTripClick = async () => {
    if (!localStorage.token) {
      navigate('/login')
      return
    }
    if (!joined) {
      if (requested) {
        return
      }
      const result = await requestJoinTrip(trip.tripInstanceId, trip.hostId)
      if (result) {
        setJoined(false)
        setRequested(true)
      }
    } else {
      const result = await leaveTrip(trip.tripInstanceId, trip.hostId)
      if (result) {
        setJoined(false)
        setRequested(false)
      }
    }
  }

  const onCallNowClick = (e) => {
    e.stopPropagation()
    if (localStorage.token) {
      window.open(`tel:${phoneNumber}`, '_blank')
    } else {
      navigate('/login')
    }
  }

  const content = trip?.description || ''
  const words = content ? content.split(' ') : []
  const displayedContent = isExpanded ? content : words.slice(0, 90).join(' ') + '...'

  const handleAlternateButtonClick = () => {
    setShowAlternateDates(true)
  }

  return (
    <>
      {showAlternateDates && (
        <Overlay onClose={() => setShowAlternateDates(false)} onClick={() => setShowAlternateDates(false)}>
          <AlternateDatesCard relatedTrips={trip?.relatedTrips || []} onClose={() => setShowAlternateDates(false)} />
        </Overlay>
      )}
      <SectionContainer>
        <DescriptionContainer>
          <Title>{trip.title}</Title>
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
              <ProfilePicture src={publisher?.profilePic?.[0]?.preSignedUrl || images.defaultProfileImg} alt="" />
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
                  <BoxHeading>Min Budget</BoxHeading>
                  <BoxContent>₹{trip?.minBudget}</BoxContent>
                </StartDate>
                <EndDate>
                  <BoxHeading>Max Budget</BoxHeading>
                  <BoxContent>₹{trip?.maxBudget}</BoxContent>
                </EndDate>
              </InfoSection>
              <ButtonSection>
                <ChatButton onClick={onShareLinkClick}>Share Now</ChatButton>
                {isUserTrip && (
                  <EditButton
                    onClick={() => {
                      setDeleteModal(true)
                    }}
                  >
                    Delete Trip
                  </EditButton>
                )}
                {/* {!isUserTrip && <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>} */}
                {!isUserTrip && <ChatButton onClick={onCallNowClick}>Call Now</ChatButton>}
                {
                  <ChatButton onClick={onWishlistClick}>
                    {wishlistAdded ? <img src={SVG.wishListRed} alt="wishlist" /> : <img src={SVG.wishlist} alt="wishlist" />}
                  </ChatButton>
                }
              </ButtonSection>
            </DateContainer>
          </ChatSection>
          <JoinButton
            style={{ width: '100%' }}
            onClick={() => {
              isUserTrip ? onEditTripClick() : onJoinTripClick()
            }}
          >
            {isUserTrip ? 'Edit Trip' : joined ? 'Leave Trip' : requested ? 'Requested' : 'Join Trip'}
          </JoinButton>
          <AlternateButton style={{ width: '100%' }} onClick={handleAlternateButtonClick}>
            Alternative Dates
          </AlternateButton>
        </ChatSectionContainer>
      </SectionContainer>
      {deleteModal && (
        <Modal
          message="Are you sure you want to delete your Trip? This action cannot be undone."
          onConfirm={onDeleteTripClick}
          onCancel={() => setDeleteModal(false)}
        />
      )}
    </>
  )
}

TripDescription.displayName = 'TripDescription'

export default connect(mapStateToProps, {
  getOrCreateChat,
  addWishlistTrip,
  removeWishlistTrip,
  requestJoinTrip,
  leaveTrip,
  deleteUserTrip,
})(memo(TripDescription))

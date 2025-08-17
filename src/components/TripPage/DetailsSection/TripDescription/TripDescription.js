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
import { formatDate } from '../../../../utils/DateUtils'
import { useNavigate } from 'react-router-dom'
import { images } from '../../../../assets/images'
import { SVG } from '../../../../assets'
import { toast } from 'react-toastify'
import React from 'react'
import Modal from '../../../Modal/Modal'
import AlternateDatesCard from '../AlternateDatesCard/AlternateDatesCard'
import Overlay from '../../../Overlay/overlay'
import { useSelector, useDispatch } from 'react-redux'
import { addWishlistTrip, deleteUserTrip, leaveTrip, removeWishlistTrip, requestJoinTrip } from '../../../../store/slices/trips-slice'
import { fetchOrCreateDirectChat } from '../../../../store/slices/chat-slice.ts'

const TripDescription = (props) => {
  const { isUserTrip, editMode, setEditMode, editedData, setEditedData, onSaveTrip } = props

  const dispatch = useDispatch()
  const { trip } = useSelector((state) => state.tripReducer)

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

  // const onChatNowClick = async () => {
  //   if (!localStorage.token) {
  //     navigate('/login')
  //     return
  //   }
  //   const isChatCreated = await getOrCreateChat(trip?.hostId)
  //   if (isChatCreated) {
  //     navigate('/chats')
  //   }
  // }

  const onWishlistClick = async () => {
    if (!localStorage.token) {
      navigate('/login')
      return
    }
    if (!wishlistAdded) {
      const result = await dispatch(addWishlistTrip(trip.tripInstanceId)).unwrap()
      if (result) {
        setWishlistAdded(true)
      }
    } else {
      const result = await dispatch(removeWishlistTrip(trip.tripInstanceId)).unwrap()
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
    const res = await dispatch(deleteUserTrip(trip.tripInstanceId)).unwrap()
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
      const result = await dispatch(requestJoinTrip(trip.tripInstanceId, trip.hostId)).unwrap()
      if (result) {
        setJoined(false)
        setRequested(true)
      }
    } else {
      const result = await dispatch(leaveTrip(trip.tripInstanceId, trip.hostId)).unwrap()
      if (result) {
        setJoined(false)
        setRequested(false)
      }
    }
  }

  const onChatNowClick = async (e) => {
    e.stopPropagation()
    try {
      console.log('here')
      const body = { receiverUserId: trip.hostId }
      await dispatch(fetchOrCreateDirectChat(body)).unwrap()
    } catch (error) {
      console.error('TripDescription:: onChatNowClick - ERROR: ', JSON.stringify(error))
      toast.error('Please Try Again!')
    }
  }

  const content = trip?.description || ''
  const words = content ? content.split(' ') : []
  const displayedContent = isExpanded ? content : words.slice(0, 90).join(' ') + '...'

  const handleAlternateButtonClick = () => {
    setShowAlternateDates(true)
  }

  const handleProfileClick = () => {
    if (localStorage.token) {
      navigate(`/user/${publisher?.userId}`)
    } else {
      navigate('/login')
    }
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
          <Title>{trip?.title}</Title>
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
            <ProfileImage onClick={handleProfileClick}>
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
                {trip?.minBudget !== trip?.maxBudget ? (
                  <>
                    <StartDate>
                      <BoxHeading>Min Budget</BoxHeading>
                      <BoxContent>₹{trip?.minBudget}</BoxContent>
                    </StartDate>
                    <EndDate>
                      <BoxHeading>Max Budget</BoxHeading>
                      <BoxContent>₹{trip?.maxBudget}</BoxContent>
                    </EndDate>
                  </>
                ) : (
                  <StartDate>
                    <BoxHeading> Budget</BoxHeading>
                    <BoxContent>₹{trip?.minBudget}</BoxContent>
                  </StartDate>
                )}
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
                {!isUserTrip && <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>}
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

export default memo(TripDescription)

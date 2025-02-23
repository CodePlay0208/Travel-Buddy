import { memo, useState } from 'react'
import DetailBox from '../DetailBox/DetailBox'
import {
  LowerSection,
  HeadingContainer,
  Title,
  ProfileCardsContainer,
  ButtonContainer,
  RequestButtonContainer,
  CardContainer,
  DeleteButton,
} from './AddMembers.styled'
import { connect } from 'react-redux'
import { images } from '../../../../assets/images'
import { Button } from '../../../../styles/Global'
import { SVG } from '../../../../assets'
import { addMemberTrip, getRequestedMembers, removeMemberAsHost, declineRequest } from '../../../../actions/trips.action'
import { getOrCreateChat } from '../../../../actions/chats.action'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = (state) => ({
  trip: state.tripReducer,
})

const mapDispatchToProps = {
  addMemberTrip,
  removeMemberAsHost,
  getRequestedMembers,
  declineRequest,
  getOrCreateChat,
}

const AddMembers = (props) => {
  const { trip, isUserTrip, addMemberTrip, removeMemberAsHost, editMode, getRequestedMembers, declineRequest, getOrCreateChat } = props

  const [isShowAll, setIsShowAll] = useState(false)
  const [isRequestShowAll, setIsRequestShowAll] = useState(false)
  const [showRequests, setShowRequests] = useState(false)

  const navigate = useNavigate()

  const tripMembers = trip?.trip?.joinedMembers || []
  const pendingRequest = trip?.requestedMembers || []
  const membersToDisplay = isShowAll ? tripMembers : tripMembers.slice(0, 5)
  const requestToDisplay = isRequestShowAll ? pendingRequest : pendingRequest.slice(0, 5)

  const handleConfirm = async (userId) => {
    if (trip) {
      const result = await addMemberTrip(trip.trip.tripId, userId)
      if (result) {
        console.log('Accepted request for user:', userId)
      }
    }
  }

  const handleChatNow = async (userId) => {
    const isChatCreated = await getOrCreateChat(userId)
    if (isChatCreated) {
      navigate('/chats')
    }
  }

  const handleRemoveMember = async (userId) => {
    if (trip) {
      const result = await removeMemberAsHost(trip.trip.tripId, userId)
      if (result) {
        console.log('Removed member:', userId)
      }
    }
  }

  const handleDeclineRequest = async (userId) => {
    if (trip) {
      const result = await declineRequest(trip.trip.tripId, userId)
      if (result) {
        console.log('Declined member:', userId)
      }
    }
  }

  return (
    <LowerSection>
      <HeadingContainer>
        <Title>{showRequests ? 'Pending Requests' : 'Your Travmigoz'}</Title>
        <ButtonContainer>
          {showRequests ? (
            <>
              {isUserTrip && <Button onClick={() => setShowRequests(false)}>Travmigoz</Button>}
              {requestToDisplay.length > 5 && (
                <Button onClick={() => setIsShowAll(!isShowAll)}>{isShowAll ? 'Show Less' : 'Show All'}</Button>
              )}
            </>
          ) : (
            <>
              {isUserTrip && (
                <Button
                  onClick={() => {
                    setShowRequests(getRequestedMembers())
                  }}
                >
                  Requests
                </Button>
              )}
              {tripMembers.length > 5 && (
                <Button onClick={() => setIsRequestShowAll(!isRequestShowAll)}>{isRequestShowAll ? 'Show Less' : 'Show All'}</Button>
              )}
            </>
          )}
        </ButtonContainer>
      </HeadingContainer>

      <ProfileCardsContainer>
        {showRequests
          ? requestToDisplay.map((item, index) => (
              <CardContainer key={item.userId || index}>
                <DeleteButton src={SVG.deleteCross} onClick={() => handleDeclineRequest(item.userId)} />
                <DetailBox
                  heading={item.username}
                  body={
                    <RequestButtonContainer>
                      <Button style={{ width: '50%', fontSize: '1vw', padding: '5%' }} onClick={() => handleConfirm(item.userId)}>
                        Accept
                      </Button>
                      <Button
                        style={{ width: '50%', fontSize: '1vw', backgroundColor: '#E0E0E0', padding: '5%' }}
                        onClick={() => handleChatNow(item.userId)}
                      >
                        Chat Now
                      </Button>
                    </RequestButtonContainer>
                  }
                  profilePic={images.defaultProfileImg}
                />
              </CardContainer>
            ))
          : membersToDisplay.map((item, index) => (
              <CardContainer key={item.userId || index}>
                {isUserTrip && <DeleteButton src={SVG.deleteMin} onClick={() => handleRemoveMember(item.userId)} />}
                <DetailBox
                  heading={item.username}
                  body={item.userId === trip?.trip?.userId ? 'Host' : 'Traveller'}
                  profilePic={images.defaultProfileImg}
                />
              </CardContainer>
            ))}
      </ProfileCardsContainer>
    </LowerSection>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AddMembers))

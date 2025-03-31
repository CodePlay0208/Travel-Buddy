import { memo, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

import { images } from '../../../../assets/images'
import { Button } from '../../../../styles/Global'
import { SVG } from '../../../../assets'
import { addMemberTrip, getRequestedMembers, removeMemberAsHost, declineRequest, getTripById } from '../../../../actions/trips.action'
import { getOrCreateChat } from '../../../../actions/chats.action'
import React from 'react'

const mapStateToProps = (state) => ({
  trip: state.tripReducer,
})

const mapDispatchToProps = {
  addMemberTrip,
  removeMemberAsHost,
  getRequestedMembers,
  declineRequest,
  getOrCreateChat,
  getTripById,
}

const AddMembers = (props) => {
  const { trip, isUserTrip, addMemberTrip, removeMemberAsHost, getRequestedMembers, declineRequest, getOrCreateChat, getTripById } = props

  const currentTrip = trip?.trip
  const fetchTrip = useCallback(() => {
    if (currentTrip.tripId) {
      getTripById(currentTrip.tripId)
    }
  }, [getTripById, currentTrip?.tripId])

  const [areMembersExpanded, setAreMembersExpanded] = useState(false)
  const [areRequestsExpanded, setAreRequestsExpanded] = useState(false)
  const [showRequests, setShowRequests] = useState(false)

  const navigate = useNavigate()

  const tripMembers = currentTrip?.joinedMembers || []
  const pendingRequest = trip?.requestedMembers || []

  const membersToDisplay = areMembersExpanded ? tripMembers : tripMembers.slice(0, 5)
  const requestsToDisplay = areRequestsExpanded ? pendingRequest : pendingRequest.slice(0, 5)

  const handleConfirm = useCallback(
    async (userId) => {
      if (currentTrip) {
        const result = await addMemberTrip(currentTrip.tripId, userId)
        if (result) fetchTrip()
      }
    },
    [currentTrip, addMemberTrip, fetchTrip],
  )

  const handleChatNow = useCallback(
    async (userId) => {
      const isChatCreated = await getOrCreateChat(userId)
      if (isChatCreated) navigate('/chats')
    },
    [getOrCreateChat, navigate],
  )

  const handleRemoveMember = useCallback(
    async (userId) => {
      if (currentTrip) {
        const result = await removeMemberAsHost(currentTrip.tripId, userId)
        if (result) fetchTrip()
      }
    },
    [currentTrip, removeMemberAsHost, fetchTrip],
  )

  const handleDeclineRequest = useCallback(
    async (userId) => {
      if (currentTrip) {
        const result = await declineRequest(currentTrip.tripId, userId)
        if (result) {
          fetchTrip()
          getRequestedMembers()
        }
      }
    },
    [currentTrip, declineRequest, fetchTrip, getRequestedMembers],
  )

  const handleShowRequests = useCallback(() => {
    getRequestedMembers()
    setShowRequests(true)
  }, [getRequestedMembers])

  return (
    <LowerSection>
      <HeadingContainer>
        <Title>{showRequests ? 'Pending Requests' : 'Your Travmigoz'}</Title>
        <ButtonContainer>
          {showRequests ? (
            <>
              {isUserTrip && <Button onClick={() => setShowRequests(false)}>Travmigoz</Button>}
              {pendingRequest.length > 5 && (
                <Button onClick={() => setAreRequestsExpanded((prev) => !prev)}>{areRequestsExpanded ? 'Show Less' : 'Show All'}</Button>
              )}
            </>
          ) : (
            <>
              {isUserTrip && <Button onClick={handleShowRequests}>Requests</Button>}
              {tripMembers.length > 5 && (
                <Button onClick={() => setAreMembersExpanded((prev) => !prev)}>{areMembersExpanded ? 'Show Less' : 'Show All'}</Button>
              )}
            </>
          )}
        </ButtonContainer>
      </HeadingContainer>

      <ProfileCardsContainer>
        {showRequests ? (
          requestsToDisplay.length > 0 ? (
            requestsToDisplay.map((item, index) => (
              <CardContainer key={item.userId || index}>
                <DeleteButton src={SVG.deleteCross} onClick={() => handleDeclineRequest(item.userId)} />
                <DetailBox
                  id={item.userId}
                  heading={item.username}
                  body={
                    <RequestButtonContainer>
                      <Button style={{ width: '50%', fontSize: '1rem', padding: '5%' }} onClick={() => handleConfirm(item.userId)}>
                        Accept
                      </Button>
                      <Button
                        style={{ width: '50%', fontSize: '1rem', backgroundColor: '#E0E0E0', padding: '5%' }}
                        onClick={() => handleChatNow(item.userId)}
                      >
                        Chat Now
                      </Button>
                    </RequestButtonContainer>
                  }
                  profilePic={item?.profilePic?.[0]?.preSignedUrl ?? images.defaultProfileImg}
                />
              </CardContainer>
            ))
          ) : (
            <CardContainer>No pending requests</CardContainer>
          )
        ) : (
          membersToDisplay.map((item, index) => (
            <CardContainer key={item.userId || index}>
              {isUserTrip && item.userId !== currentTrip?.userId && (
                <DeleteButton src={SVG.deleteMin} onClick={() => handleRemoveMember(item.userId)} />
              )}
              <DetailBox
                id={item.userId}
                heading={item.username}
                body={item.userId === currentTrip?.userId ? 'Host' : 'Traveller'}
                profilePic={item?.profilePic?.[0]?.preSignedUrl ?? images.defaultProfileImg}
              />
            </CardContainer>
          ))
        )}
      </ProfileCardsContainer>
    </LowerSection>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AddMembers))

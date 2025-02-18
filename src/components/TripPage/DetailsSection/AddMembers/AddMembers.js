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
import { addMemberTrip, removeMemberAsHost } from '../../../../actions/trips.action'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})

const mapDispatchToProps = {
  addMemberTrip,
  removeMemberAsHost,
}

const AddMembers = (props) => {
  const { trip, isUserTrip, addMemberTrip, removeMemberAsHost } = props

  const [isShowAll, setIsShowAll] = useState(false)
  const [isRequestShowAll, setIsRequestShowAll] = useState(false)
  const [showRequests, setShowRequests] = useState(false)

  // Mock data for trip members
  const mockTrip = {
    userId: '123',
    tripMembers: [
      {
        userId: '123',
        username: 'Alice',
        profilePic: ['https://via.placeholder.com/150'],
      },
      {
        userId: '124',
        username: 'Bob',
        profilePic: ['https://via.placeholder.com/150'],
      },
      {
        userId: '125',
        username: 'Charlie',
        profilePic: ['https://via.placeholder.com/150'],
      },
      {
        userId: '126',
        username: 'David',
        profilePic: ['https://via.placeholder.com/150'],
      },
      {
        userId: '127',
        username: 'Eve',
        profilePic: ['https://via.placeholder.com/150'],
      },
      {
        userId: '128',
        username: 'Frank',
        profilePic: ['https://via.placeholder.com/150'],
      },
      {
        userId: '129',
        username: 'Grace',
        profilePic: ['https://via.placeholder.com/150'],
      },
    ],
  }

  const pendingRequests = [
    {
      userId: '130',
      username: 'Henry',
      profilePic: ['https://via.placeholder.com/150'],
    },
    {
      userId: '131',
      username: 'Ivy',
      profilePic: ['https://via.placeholder.com/150'],
    },
  ]

  const tripMembers = mockTrip?.tripMembers || []
  const pendingRequest = pendingRequests || []
  const membersToDisplay = isShowAll ? tripMembers : tripMembers.slice(0, 5)
  const requestToDisplay = isRequestShowAll ? pendingRequest : pendingRequest.slice(0, 5)

  const handleConfirm = async (userId) => {
    if (trip) {
      const result = await addMemberTrip(trip.tripId, userId)
      if (result) {
        console.log('Accepted request for user:', userId)
      }
    }
  }

  const handleChatNow = (userId) => {
    console.log('Initiate chat with user:', userId)
  }

  const handleRemoveMember = async (userId) => {
    if (trip) {
      const result = await removeMemberAsHost(trip.tripId, userId)
      if (result) {
        console.log('Removed member:', userId)
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
              {isUserTrip && <Button onClick={() => setShowRequests(true)}>Requests</Button>}
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
                <DeleteButton src={SVG.deleteCross} onClick={() => handleRemoveMember(item.userId)} />
                <DetailBox
                  heading={item.username}
                  body={
                    <RequestButtonContainer>
                      <Button style={{ width: '50%', fontSize: '1vw' }} onClick={() => handleConfirm(item.userId)}>
                        Accept
                      </Button>
                      <Button
                        style={{ width: '50%', fontSize: '1vw', backgroundColor: '#E0E0E0' }}
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
                <DeleteButton src={SVG.deleteMin} onClick={() => handleRemoveMember(item.userId)} />
                <DetailBox
                  heading={item.username}
                  body={item.userId === trip?.userId ? 'Trip Publisher' : 'Traveller'}
                  profilePic={images.defaultProfileImg}
                />
              </CardContainer>
            ))}
      </ProfileCardsContainer>
    </LowerSection>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AddMembers))

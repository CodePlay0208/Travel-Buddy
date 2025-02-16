import { memo, useState } from 'react'
import DetailBox from '../DetailBox/DetailBox'
import { LowerSection, HeadingContainer, Title, ProfileCardsContainer, ButtonContainer, RequestButtonContainer } from './AddMembers.styled'
import { connect } from 'react-redux'
import { images } from '../../../../assets/images'
import { Button } from '../../../../styles/Global'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})

const AddMembers = (props) => {
  const { trip } = props
  const [isShowAll, setIsShowAll] = useState(false)
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

  // Mock data for pending requests
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
  const membersToDisplay = isShowAll ? tripMembers : tripMembers.slice(0, 5)

  const handleConfirm = (userId) => {
    console.log('Confirmed request for user:', userId)
    // Add your logic to confirm the request here.
  }

  const handleDecline = (userId) => {
    console.log('Declined request for user:', userId)
    // Add your logic to decline the request here.
  }

  return (
    <LowerSection>
      <HeadingContainer>
        <Title>{showRequests ? 'Pending Requests' : 'Your Travmigoz'}</Title>
        <ButtonContainer>
          {showRequests ? (
            <>
              <Button onClick={() => setShowRequests(false)}>Travmigoz</Button>
              {tripMembers.length > 5 && <Button onClick={() => setIsShowAll(!isShowAll)}>{isShowAll ? 'Show Less' : 'Show All'}</Button>}
            </>
          ) : (
            <>
              <Button onClick={() => setShowRequests(true)}>Requests</Button>
              {tripMembers.length > 5 && <Button onClick={() => setIsShowAll(!isShowAll)}>{isShowAll ? 'Show Less' : 'Show All'}</Button>}
            </>
          )}
        </ButtonContainer>
      </HeadingContainer>

      <ProfileCardsContainer>
        {showRequests
          ? pendingRequests.map((item, index) => (
              <DetailBox
                key={index}
                heading={item?.username}
                body={
                  <RequestButtonContainer>
                    <Button style={{ width: '50%', fontSize: '1vw' }} onClick={() => handleConfirm(item.userId)}>
                      Accept
                    </Button>
                    <Button
                      style={{ width: '50%', fontSize: '1vw', backgroundColor: '#E0E0E0' }}
                      onClick={() => handleDecline(item.userId)}
                    >
                      Chat Now
                    </Button>
                  </RequestButtonContainer>
                }
                profilePic={item?.profilePic?.[0] || images.defaultProfileImg}
              />
            ))
          : membersToDisplay.map((item, index) => (
              <DetailBox
                key={index}
                heading={item?.username}
                body={item?.userId === mockTrip?.userId ? 'Trip Publisher' : 'Traveller'}
                profilePic={item?.profilePic?.[0] || images.defaultProfileImg}
              />
            ))}
      </ProfileCardsContainer>
    </LowerSection>
  )
}

export default connect(mapStateToProps, null)(memo(AddMembers))

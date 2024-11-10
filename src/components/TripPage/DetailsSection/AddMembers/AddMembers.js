import { memo } from 'react'
import DetailBox from '../DetailBox/DetailBox'
import { LowerSection, HeadingContainer, Title, CreateButton, ProfileCardsContainer } from './AddMembers.styled'
import { connect } from 'react-redux'
import { images } from '../../../../assets/images'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})

const AddMembers = (props) => {
  const { trip } = props

  return (
    <LowerSection>
      <HeadingContainer>
        <Title>Meet Your Travmigoz</Title>
        <CreateButton>Add Members</CreateButton>
      </HeadingContainer>

      <ProfileCardsContainer>
        {trip?.tripMembers &&
          trip?.tripMembers.map((item, index) => {
            return (
              <DetailBox
                key={index}
                heading={item?.username}
                body={item?.userId === trip?.userId ? 'Trip Publisher' : 'Traveller'}
                profilePic={item?.profilePic?.[0] || images.defaultProfileImg}
              />
            )
          })}
        {/* <DetailBox heading={'Username'} body={'Trip Publisher'} svg={''} />
        <DetailBox heading={'Username'} body={'Member 1'} svg={''} />
        <DetailBox heading={'Username'} body={'Member 2'} svg={''} /> */}
      </ProfileCardsContainer>
    </LowerSection>
  )
}

export default connect(mapStateToProps, null)(memo(AddMembers))

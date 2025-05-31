import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: relative;
  width: 547px;
  height: 236px;
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(141, 211, 187, 0.25);
  border-radius: 15px;
`

const Title = styled.h2`
  width: 488px;
  height: 68px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 28.2978px;
  line-height: 34px;
  color: #000000;
  text-align: center;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
`

const Button = styled.button`
  width: 236px;
  height: 52.14px;
  border: none;
  border-radius: 54px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const DeleteBtn = styled(Button)`
  background: #ef4343;
  color: #000000;
`

const StayBtn = styled(Button)`
  background: #8dd3bb;
  color: #000000;
`

const ConfirmationComponent = ({}) => {
  const onDelete = () => {
    // Handle delete action here
    //console.log('Profile deleted')
  }
  const onStay = () => {
    // Handle stay action here
    //console.log('User chose to stay')
  }

  return (
    <ModalContainer>
      <Title>Are you sure you want to delete your Profile on Travmigoz?</Title>
      <ButtonsWrapper>
        <DeleteBtn onClick={onDelete}>Delete</DeleteBtn>
        <StayBtn onClick={onStay}>Stay</StayBtn>
      </ButtonsWrapper>
    </ModalContainer>
  )
}

export default ConfirmationComponent

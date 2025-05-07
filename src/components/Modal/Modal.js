import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ModalOverlay, ModalContainer, Title, ButtonsWrapper, DeleteBtn, StayBtn } from './Modal.styled.js'

const Modal = ({ message, onConfirm, onCancel, confirmText = 'Delete', cancelText = 'Cancel' }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>{message}</Title>
        <ButtonsWrapper>
          <DeleteBtn onClick={onConfirm}>{confirmText}</DeleteBtn>
          <StayBtn onClick={onCancel}>{cancelText}</StayBtn>
        </ButtonsWrapper>
      </ModalContainer>
    </ModalOverlay>
  )
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
}

export default Modal

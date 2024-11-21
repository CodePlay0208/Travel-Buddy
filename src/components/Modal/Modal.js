import React from 'react';
import PropTypes from 'prop-types';

import {ModalOverlay, ModalContainer, ModalHeader, ModalContent, ModalActions, ModalButton} from './Modal.styled'

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>Confirmation</ModalHeader>
        <ModalContent>{message}</ModalContent>
        <ModalActions>
          <ModalButton primary onClick={onConfirm}>
            Confirm
          </ModalButton>
          <ModalButton onClick={onCancel}>Cancel</ModalButton>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Modal;

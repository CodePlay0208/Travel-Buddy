import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 20px;
`

export const ModalHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`

export const ModalContent = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#009f38' : '#ff0019')};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: block;
  height: 30em;
  max-width: 50em;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin: 40px;
  padding: 10px;
  width: 100%;
  background-color: white;
  text-decoration: none;
  overflow: hidden;
`;

export const CardImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffffb5;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
  z-index: 1;
  &:hover {
    transform: translateY(0);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  padding: 0 2em;
  background-color: #ffffffc7;
  border-radius: 10px;
`;

export const CardHeaderText = styled.div`
  p {
    margin: 0;
    padding: 0.3em 0;
  }
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0.5em 1em;
`;

export const CardProfile = styled.div`
  img {
    height: 7em;
    width: 7em;
    border-radius: 60%;
  }
`;

export const CardDescription = styled.div`
  padding: 0 2em 2em;
  margin: 0;
  color: #051e36;
`;

export const ChatNowButton = styled.button`
  background-color: #36A9AE;
  background-image: linear-gradient(#37ADB2, #329CA0);
  border: 1px solid #2A8387;
  border-radius: 4px;
  color: white;
  padding: 11px 15px;
  position: absolute;
  right: 30px;
  bottom: 10px;
  cursor: pointer;
  transition: box-shadow 0.05s ease-in-out;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset, rgba(0, 0, 0, 0.4) 0 1px 2px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 4px inset;
  }
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const DeleteButtonUser = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s;
  width: 40rem;
  &:hover {
    background-color: #e60000;
  }
`;

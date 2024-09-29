import styled from 'styled-components';

export const PublishTripPage = styled.div`
  position: relative;
  width: 100%;
  background: #f5f7f9;
`;

export const PublishTripContainer = styled.div`
  position: relative;
  padding: 3%;
  width: 90%;
  max-width: 1604px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 10px;
`;

export const PublishTripHeading = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 3.5vw;
  line-height: 1.8;
`;

export const PublishTripContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 80%;
`;

export const LeftSection = styled.div`
  width: 60%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1vw;
  color: #040f0f;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 372px;
  height: 3vw;
  padding: 0.8vw;
  border: 2.325px solid #0b87ac;
  border-radius: 9.3px;
  font-family: 'Poppins', sans-serif;
  font-size: 16.275px;
  color: #040f0f;

  &::placeholder {
    color: #040f0f;
    opacity: 0.7;
  }
`;

export const DescriptionField = styled.textarea`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0.8vw;
  border: 2.325px solid #0b87ac;
  border-radius: 9.3px;
  font-family: 'Poppins', sans-serif;
  font-size: 16.275px;
  min-height: 10vw;

  &::placeholder {
    color: #040f0f;
    opacity: 0.7;
  }
`;

export const ToggleSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  max-width: 906px;
  padding: 2% 0;
  background: #8dd3bb;
  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0 0;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.8vw;
  padding: 0 5%;
  color: #000000;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 0.5vw;
    background-color: #559c84;
    border-radius: 2px;
  }
`;

export const Divider = styled.div`
  width: 0.5%;
  height: 4vw;
  background: #ffffff;
  border-radius: 50px;
`;

export const PublishButton = styled.button`
  background-color: #559c84;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #40796b;
  }
`;

export const RightSection = styled.div`
  width: 35%;
  background: #ffffff;
  border: 3px solid rgba(179, 204, 252, 0.1);
  box-shadow: 0px 4px 21px 1px rgba(36, 99, 235, 0.25);
  border-radius: 12px;
  padding: 3%;
`;

export const UploadPhotosTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.5vw;
  color: #000000;
  margin-bottom: 20px;
`;

export const DropImageContainer = styled.div`
  width: 95%;
  max-width: 477px;
  min-height: 10vw;
  border: 1px dashed #b1bfd0;
  border-radius: 9px;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const PreviewImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .preview-image-item {
    width: 100px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }

  .preview-image-remove-button {
    background: red;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

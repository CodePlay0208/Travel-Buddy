import styled from 'styled-components'

export const DashboardContainer = styled.div`
  padding: 0 3%;
  margin: 1% 0%;
`

export const ImageContainer = styled.div`
  width: 100%;
  margin: 0 0 7% 0;
  position: relative;
  border-radius: 10px;
  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const BackgroundImage = styled.img`
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 4;
  object-fit: cover;
  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const ProfilePic = styled.div`
  position: absolute;
  bottom: -20%;
  left: 5%;
  width: 15%;
  aspect-ratio: 1;
  overflow: hidden;
`

export const ImgProfile = styled.img`
  border-radius: 50%;
  border: 7px solid rgb(0, 199, 176);
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 786px) {
    border: 2px solid rgb(0, 199, 176);
  }
`

export const EditPic = styled.img`
  position: absolute;
  width: 30%;
  right: 0;
  z-index: 3;
  bottom: 0;
`

export const DashboardHeader = styled.div`
  position: relative;
  margin-bottom: 2.5%;
`

export const HeaderTitle = styled.h1`
  padding: 0 3%;
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  color: #000000;
  @media (max-width: 786px) {
    font-size: 5vw;
  }
`

export const DashboardContent = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(17, 34, 17, 0.25);
  border-radius: 20px;
  padding: 1% 5%;
  display: flex;
  flex-direction: column;
  gap: 2.5%;
  margin: 2.5% 0;
  @media (max-width: 786px) {
    border-radius: 7.5px;
  }
`

export const UserInfoColumns = styled.div`
  display: flex;
  gap: 5%;
  @media (max-width: 786px) {
    flex-wrap: wrap;
  }
`

export const UserInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 786px) {
    width: 100%;
  }
`

export const UserInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 3% 0;
`

export const Label = styled.span`
  margin: 1.75% 0%;
  font-weight: 400;
  font-size: 20px;
  color: #112211;
  opacity: 0.75;
  @media (max-width: 786px) {
    font-size: 2.5vw;
  }
`

export const Value = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  color: #112211;
  @media (max-width: 786px) {
    font-size: 2.5vw;
  }
`

export const DashboardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5%;
`

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 4%;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;

  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  margin: 0 1%;
  @media (max-width: 786px) {
    font-size: 2.5vw;
    border-radius: 2px;
    img {
      width: 2.5vw;
    }
  }
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`
export const EditButton = styled(BaseButton)`
  color: #112211;
  border: 2px solid #8dd3bb;
`

export const DeleteButton = styled(BaseButton)`
  color: #e9e9e9;
  border: 2px solid #dc2626;
  background-color: #dc2626;
`
export const Input = styled.input`
  width: 100%;
  padding: 2.5%;
  font-size: 1.25vw;
  border: 2px solid #808080;
  border-radius: 10px;
  font-weight: 600;
  color: #7c7878;
  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const SaveButton = styled(BaseButton)`
  background-color: #28a745;
  color: white;
  border: 2px solid #28a745;
`

export const CancelButton = styled(BaseButton)`
  background-color: #dc2626;

  border: 2px solid #dc2626;
  color: white;
`

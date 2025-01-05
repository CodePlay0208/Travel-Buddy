import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const DashboardContainer = styled.div`
  width: 100%;
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

export const ProfilePicContainer = styled.div`
  position: relative;
  width: 20%;
  @media (max-width: 786px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const ProfilePic = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  @media (max-width: 786px) {
    width: 300px;
    height: 300px;
  }
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
  right: 0;
  z-index: 3;
  bottom: 0;
`

export const DashboardHeader = styled.div`
  position: relative;
  margin-bottom: 0.5%;
`

export const HeaderTitle = styled.h1`
  padding: 0 3%;
  margin-bottom: 0.5%;
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
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 2.5%;
  margin: 0.5% 0;
  @media (max-width: 786px) {
    border-radius: 7.5px;
    flex-wrap: wrap-reverse;
  }
`

export const UserInfoColumns = styled.div`
  display: flex;
  width: 70%;
  box-shadow: 0px 0px 9px 0px #11221136;

  border-radius: 20px;
  padding: 1% 3%;
  gap: 5%;
  @media (max-width: 786px) {
    flex-wrap: wrap;
    width: 100%;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 4% 0;
  @media (max-width: 786px) {
    margin: 2% 0;
  }
`

export const NameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 4% 0;
  @media (max-width: 786px) {
    margin: 2% 0;
    padding: 1% 3%;
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
  padding: 0.3% 1%;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 15px;

  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  margin: 0 1%;
  @media (max-width: 786px) {
    font-size: 2.5vw;
    border-radius: 2px;
    img {
      width: 1.5vw;
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

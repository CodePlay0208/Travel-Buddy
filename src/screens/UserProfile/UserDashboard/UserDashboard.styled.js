import styled from 'styled-components'

export const DashboardContainer = styled.div`
  padding: 0 3%;
  margin: 1% 0%;
`

export const ImageContainer = styled.div`
  width: 100%;
  margin: 0 0 7rem 0;
  position: relative;
  border-radius: 10px;
`

export const BackgroundImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 23rem;
  object-fit: cover;
`

export const ProfilePic = styled.div`
  position: absolute;
  bottom: -5rem;
  left: 4rem;
  width: 250px;
  height: 250px;
  overflow: hidden;
`

export const ImgProfile = styled.img`
  border-radius: 50%;
  border: 7px solid rgb(0, 199, 176);
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const EditPic = styled.img`
  position: absolute;
  right: 0;
  z-index: 3;
  bottom: 0;
`

export const DashboardHeader = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const HeaderTitle = styled.h1`
  padding: 0 3%;
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  color: #000000;
`

export const DashboardContent = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(17, 34, 17, 0.25);
  border-radius: 20px;
  padding: 1% 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const UserInfoColumns = styled.div`
  display: flex;
  gap: 5%;
`

export const UserInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const UserInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
`

export const Label = styled.span`
  margin: 1.75% 0%;
  font-weight: 400;
  font-size: 20px;
  color: #112211;
  opacity: 0.75;
`

export const Value = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  color: #112211;
`

export const DashboardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 22px;
  color: #112211;
  border: 2px solid #8dd3bb;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  margin: 0 1%;
`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 22px;
  color: #e9e9e9;
  border: 2px solid #dc2626;
  border-radius: 8px;
  background-color: #dc2626;
  cursor: pointer;
  margin: 0 1%;
`

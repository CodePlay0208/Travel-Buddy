import styled from 'styled-components'

export const NavbarContainer = styled.div`
  padding: 30px;
  z-index: 1000;
  position: absolute;
  width: 100%;
  padding-top: 0;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

export const Logo = styled.div`
  font-weight: 500;
  color: #42a7c3;
  font-size: 40px;
  padding: 8px 12px;
  cursor: pointer;
  color: ${(props) => (props.isLandingPage ? 'white' : '#42A7C3')};
`

export const OtherContentsOfNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 8px 12px;
`

export const ChatButton = styled.div`
  color: rgb(39, 167, 218);
  border-radius: 4px;
  border: none;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(3px 3px 4px #228be6);
  }
`

export const NavLink = styled.div`
  text-decoration: none;
  color: ${(props) => (props.isLandingPage ? 'white' : 'rgb(39, 167, 218)')};
`

export const ProfilePicWrapper = styled.div`
  position: relative;
  cursor: pointer;
`

export const ProfilePicSvg = styled.svg`
  height: 60px;
  width: 60px;
  fill: rgb(39, 167, 218);
  cursor: pointer;
`

export const UserProfileDropDownList = styled.div`
  position: absolute;
  list-style: none;
  width: 200px;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  max-height: 200px;
  font-size: 16px;
  z-index: 2;
  margin-left: -50px;
`

export const ListItemValueForIdx = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 0px;
  margin: 0;
  padding: 0;
  align-items: center;
  font-weight: 600;
  color: black;

  &:hover {
    background-color: #f2f2f2;
  }
`

export const ListItemValueForUserProfileData = styled.p`
  padding: 10px;
  margin: 0;
`

export const NavContents = styled.div`
  padding: 10px;
  cursor: pointer;

  &.signup {
    background-color: white;
    padding: 10px 20px;
    border-radius: 9px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    margin: 0 5px;
  }

  &.login {
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 9px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    margin: 0 5px;
    border: 1px solid white;
  }
`

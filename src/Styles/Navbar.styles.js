import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

export const WebAppNameAndLogo = styled.div`
  font-weight: 500;
  color: #42a7c3;
  font-size: 40px;
  padding: 8px 12px;
  cursor: pointer;
`

export const OtherContentsOfNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`

export const NavContainer = styled.div`
  padding: ${(props) => (props.isImageNavbar ? `30px` : `0px`)};
  z-index: 1000;
  position: ${(props) => (props.isImageNavbar ? `absolute` : `relative`)};
  width: 100%;
  padding-top: 0;
  box-shadow:${(props) => (props.isImageNavbar ? `none` : `0px -13px 20px;`)};
`

export const NavContents = styled.div`
  padding: 10px;
  cursor: pointer;
`

export const Signup = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 9px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin: 0 10px;
`

export const NavLink = styled.div`
  text-decoration: none;
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

export const NavButton = styled.div`
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

export const ListItemValueForUserProfileData = styled.p`
  padding: 10px;
  margin: 0;
`

export const ProfileImageContainer = styled.div`
  cursor: pointer;
`

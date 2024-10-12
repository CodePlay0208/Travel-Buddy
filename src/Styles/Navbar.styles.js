import styled from 'styled-components'

export const NavContainer = styled.div`
  font-size: 2vw;
  padding: ${(props) => (props.isImageNavbar ? `1%` : `0px`)};
  z-index: 1000;
  position: ${(props) => (props.isImageNavbar ? `absolute` : `relative`)};
  width: 100%;
  padding-top: 0;
  box-shadow: ${(props) => (props.isImageNavbar ? `none` : `0px -13px 20px;`)};
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`

export const WebAppNameAndLogo = styled.div`
  font-weight: 500;
  color: #42a7c3;
  font-size: 100%;
  padding: 0.5%;
  cursor: pointer;
  
`

export const OtherContentsOfNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position:relative;
  width: 12.5%;
  font-size:50%;
  img{
    width:100%;
    height:100%;
  }
`


export const NavContents = styled.div`
  padding: 0.5%;
  cursor: pointer;
`

export const NavButton = styled.div`
  color: rgb(39, 167, 218);
  border: none;
  font-weight: 500;
  
  cursor: pointer;
  margin: 2.5%;

  &:hover {
    filter: drop-shadow(3px 3px 4px #228be6);
  }
`


export const Signup = styled.div`
  background-color: white;
  padding: 5%;
  border-radius: 10px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 100%;
  cursor: pointer;
  text-decoration: none;
  margin: 0 10px;
`


export const ProfileImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

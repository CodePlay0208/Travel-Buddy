import styled from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}
export const NavContainer = styled.div`
  font-size: 2vw;
  padding: ${(props) => (props.isImageNavbar ? `1%` : `0px`)};
  z-index: 1000;
  position: ${(props) => (props.isImageNavbar ? `absolute` : `relative`)};
  width: 100%;
  padding-top: 0;
  box-shadow: ${(props) => (props.isImageNavbar ? `none` : `none`)};
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
  color: #000000;
  font-size: 100%;
  padding: 0.5%;
  cursor: pointer;
`

export const OtherContentsOfNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  width: 30%;
  font-size: 75%;
  margin-right: 1%;
  gap: 5%;

  img {
    width: 100%;
    max-width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      max-width: 40px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 20px;
    }
  }
`

export const NavContents = styled.div`
  padding: 0.5%;
  cursor: pointer;
  color: rgb(39, 167, 218);
  border: none;
  &:hover {
    filter: drop-shadow(3px 3px 4px #228be6);
  }
`

export const NavButton = styled.div`
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 50px;
  background-color: #8dd3bb;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  margin: 2.5%;
  padding: 1%;
  width: 70%;
  position: relative;
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

  img {
    width: 100%;
    max-width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      max-width: 40px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 20px;
    }
  }
`

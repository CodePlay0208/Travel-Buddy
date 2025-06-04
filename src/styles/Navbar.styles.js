import styled from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}
export const NavContainer = styled.div`
  font-size: 2rem;
  padding: ${(props) => (props.isImageNavbar ? `0px` : `0px`)};
  z-index: 1000;
  max-width: 2500px;
  position: ${(props) => (props.isImageNavbar ? `absolute` : `relative`)};
  width: 100%;
  padding-top: 0;
  box-shadow: ${(props) => (props.isImageNavbar ? `none` : `none`)};
  background: ${(props) => (!props.isImageNavbar ? `none` : '#00000024')};

  @media (max-width: 1080px) {
    font-size: 4rem;
  }
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.isImageNavbar || true ? ` 1% 2%` : `3%`)};

  @media (max-width: 1080px) {
    padding: ${(props) => (props.isImageNavbar || true? ` 1% 2%` : `4%`)};
  }
`
export const Logo = styled.img`
  width: 200px;
  @media (max-width: 786px) {
    width: 100px;
  }
`

export const WebAppNameAndLogo = styled.div`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 100%;
  padding: 0.5%;
  cursor: pointer;
  font-family: 'Lufga' !important;
`

export const OtherContentsOfNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  position: relative;
  width: 35%;
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

  @media (max-width: 1080) {
    width: 40%;
    img {
      max-width: 40px;
    }
  }
  @media (max-width: 768px) {
    width: 50%;
    img {
      max-width: 40px;
    }
  }
`

export const NavButton = styled.div`
  color: var(--color-primary);
  border: none;
  border-radius: 50px;
  background-color: black;
  font-weight: 600;
  text-align: center;
  border: 2px solid black;
  cursor: pointer;
  margin: 0;
  padding: 2% 4%;
  font-size: 1rem;
  position: relative;
  &:hover {
    color: black;
    border-radius: 50px;

    background-color: transparent;
  }
  img,
  svg {
    display: none;
  }
  @media (max-width: 1080px) {
    background-color: transparent;
    padding: 0%;
    border: none;
    div {
      display: none;
    }
    img,
    svg {
      width: 100%;
      max-width: 45px;
      aspect-ratio: 1;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }
  }
`

export const NavContents = styled.div`
  color: var(--color-primary);
  border: none;
  border-radius: 50px;
  background-color: #ffffff00;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin: 0;
  padding: 0%;
  font-size: 1rem;
  position: relative;

  img,
  svg {
    display: block;
    width: 100%;
    max-width: 45px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img,
    svg {
      max-width: 45px;
    }
  }
  &:hover {
    color: black;
    border: none;
    border-radius: 50px;
    background-color: transparent;
  }
`

export const Signup = styled.div`
  /* background-color: white; */
  padding: 2% 3%;
  border-radius: 10px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 100%;
  cursor: pointer;
  text-decoration: none;
  margin: 0 10px;
`

export const ProfileImageContainer = styled(NavContents)`
  cursor: pointer;
  position: unset;
  img,
  svg {
    width: 100%;
    max-width: 45px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    

    img,
    svg {
      max-width: 45px;
    }
  }
`

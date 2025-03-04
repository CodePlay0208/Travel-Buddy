import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2%;
  gap: 2%;
  background: #8dd3bb;
  width: 100%;
`

export const FooterTop = styled.div`
  width: 100%;
  max-width: 1729px;
  display: flex;
  align-items: center;
  padding: 2% 5%;
  background: #8dd3bb;
  justify-content: center;
  @media (max-width: 786px) {
    flex-wrap: wrap;
  }
`

export const FooterSection = styled.div`
  width: 50%;
  background: #8dd3bb;
  padding: 2% 5%;
  @media (max-width: 786px) {
    width: 100%;
  }
`

export const FooterHeading = styled.h2`
  font-family: 'TradeGothic LT Extended';
  font-style: normal;
  font-weight: 700;
  font-size: 1.75rem;
  color: #112211;
  @media (max-width: 400px) {
    font-size: 2.75vw;
  }
`
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;

  &.social-icons {
    @media (max-width: 786px) {
      flex-direction: row;
      gap: 5%;
    }
  }
`

export const FooterLink = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 4%;
  color: #444444;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5%;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 400px) {
    font-size: 1.75vw;
  }
`

export const Text = styled.div`
  @media (max-width: 786px) {
    display: none;
  }
`
export const Image = styled.img`
  width: 24px;
  aspect-ratio: 1;
  @media (max-width: 400px) {
    font-size: 1.75vw;
  }
`

export const SocialIcon = styled.li`
  width: 24px;
  height: 24px;
  background-size: contain;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`

import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2%;
  gap: 2%;
  background: var(--color-primary);
  width: 100%;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`
export const FooterRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5%;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 100%;
  color: white;

  @media (max-width: 786px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    font-size: 5.5rem;
    padding: 8% 5%;
  }
`

export const FooterTop = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  background: var(--color-primary);
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: 786px) {
    width: 100%;
  }
`

export const FooterSection = styled.div`
  /* width: 25%; */
  background: var(--color-primary);
  @media (max-width: 786px) {
    width: 50%;
    padding: 0% 5%;
  }
`

export const FooterHeading = styled.h2`
  font-family: 'TradeGothic LT Extended';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  color: #112211;
  cursor: pointer;
  @media (max-width: 440px) {
    font-size: 4.5rem;
  }
`
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  gap: 16px;

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
  color: #444444;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5%;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 440px) {
    font-size: 3.5rem;
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
  @media (max-width: 440px) {
    font-size: 1.75rem;
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

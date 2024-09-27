import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background: #8dd3bb;
  width: 100%;
`

export const FooterTop = styled.div`
  width: 100%;
  max-width: 1729px;
  display: flex;
  align-items: center;
  padding: 20px;
  background: #8dd3bb;
  border-radius: 36px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const FooterSection = styled.div`
  height: 215px;
  width: 50%;
  background: #8dd3bb;
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: calc(25% - 20px);
    margin: 0 10px;
  }
`

export const FooterHeading = styled.h2`
  font-family: 'TradeGothic LT Extended';
  font-style: normal;
  font-weight: 700;
  font-size: 1.75rem;
  color: #112211;
  margin-bottom: 10px;
`

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const FooterListItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #112211;
  margin-bottom: 5px;
`

export const FooterLink = styled.a`
  color: #112211;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const SocialIcons = styled.ul`
  display: flex;
  gap: 10px;
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

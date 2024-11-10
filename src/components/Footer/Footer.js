import React from 'react'
import { FooterContainer, FooterTop, FooterSection, FooterHeading, FooterList, FooterListItem, FooterLink } from '../../styles/Footer.styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection className="destinations">
          <FooterHeading>Our Destinations</FooterHeading>
          <FooterList>
            <FooterListItem>
              <FooterLink href="/">Bangalore</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/">Delhi</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/">Tamil Nadu</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/">Mumbai</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection className="contact">
          <FooterHeading>Contact Us</FooterHeading>
          <FooterList className="social-icons">
            <FooterListItem className="facebook">
              <FooterLink href="https://facebook.com" aria-label="Facebook" >Facebook</FooterLink>
            </FooterListItem>
            <FooterListItem className="twitter">
              <FooterLink href="https://twitter.com" aria-label="Twitter" >Twitter</FooterLink>
            </FooterListItem>
            <FooterListItem className="youtube">
              <FooterLink href="https://youtube.com" aria-label="YouTube" >YouTube</FooterLink>
            </FooterListItem>
            <FooterListItem className="instagram">
              <FooterLink href="https://instagram.com" aria-label="Instagram" >Instagram</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterTop>
    </FooterContainer>
  )
}

export default Footer

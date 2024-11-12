import React from 'react'
import {
  FooterContainer,
  FooterTop,
  FooterSection,
  FooterHeading,
  FooterList,
  FooterLink,
} from '../../styles/Footer.styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection className="destinations">
          <FooterHeading>Our Destinations</FooterHeading>
          <FooterList>
            <FooterLink href="/">Bangalore</FooterLink>
            <FooterLink href="/">Delhi</FooterLink>
            <FooterLink href="/">Tamil Nadu</FooterLink>
            <FooterLink href="/">Mumbai</FooterLink>{' '}
          </FooterList>
        </FooterSection>

        <FooterSection className="contact">
          <FooterHeading>Contact Us</FooterHeading>
          <FooterList className="social-icons">
            <FooterLink href="https://facebook.com" aria-label="Facebook">
              Facebook
            </FooterLink>
            <FooterLink href="https://twitter.com" aria-label="Twitter">
              Twitter
            </FooterLink>
            <FooterLink href="https://youtube.com" aria-label="YouTube">
              YouTube
            </FooterLink>
            <FooterLink href="https://instagram.com" aria-label="Instagram">
              Instagram
            </FooterLink>
          </FooterList>
        </FooterSection>
      </FooterTop>
    </FooterContainer>
  )
}

export default Footer

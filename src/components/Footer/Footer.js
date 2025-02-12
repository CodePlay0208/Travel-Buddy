import React from 'react'
import { FooterContainer, FooterTop, FooterSection, FooterHeading, FooterList, FooterLink, Image, Text } from '../../styles/Footer.styles'
import { SVG } from '../../assets/svg'

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
              <Image src={SVG.facebook} alt="" />
              <Text>Facebook</Text>
            </FooterLink>
            <FooterLink href="https://twitter.com" aria-label="Twitter">
              <Image src={SVG.twitter} alt="" />
              <Text>Twitter</Text>
            </FooterLink>
            <FooterLink href="https://youtube.com" aria-label="YouTube">
              <Image src={SVG.youtube} alt="" />
              <Text>YouTube</Text>
            </FooterLink>
            <FooterLink href="https://instagram.com" aria-label="Instagram">
              <Image src={SVG.instagram} alt="" />
              <Text>Instagram</Text>
            </FooterLink>
          </FooterList>
        </FooterSection>
      </FooterTop>
    </FooterContainer>
  )
}

export default Footer

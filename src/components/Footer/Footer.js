import React from 'react'
import {
  FooterContainer,
  FooterTop,
  FooterSection,
  FooterHeading,
  FooterList,
  FooterLink,
  Image,
  Text,
  FooterRight,
} from '../../styles/Footer.styles'
import { SVG } from '../../assets/svg'
import { images } from '../../assets'
import { Logo } from '../../styles/Navbar.styles'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection className="destinations">
          <FooterHeading>Our Destinations</FooterHeading>
          <FooterList>
            <FooterLink href="/">Bangalore</FooterLink>
            <FooterLink href="/">Delhi</FooterLink>
            <FooterLink href="/">Tamil Nadu</FooterLink>
            <FooterLink href="/">Mumbai</FooterLink>
          </FooterList>
        </FooterSection>
        <FooterSection className="destinations">
          <FooterHeading>Blogs</FooterHeading>
          <FooterList>
            <FooterLink href="/">General</FooterLink>
            <FooterLink href="/">Travel Tip</FooterLink>
            <FooterLink href="/">Travel Guide</FooterLink>
          </FooterList>
        </FooterSection>
        <FooterSection className="destinations">
          <FooterHeading onClick={()=>navigate('/about-us')}>About Us</FooterHeading>
          <FooterList>
            <FooterLink href="/about-us">Why Travmigoz</FooterLink>
            <FooterLink href="/about-us">What we Believe</FooterLink>
          </FooterList>
        </FooterSection>
        <FooterSection className="contact">
          <FooterHeading onClick={()=>navigate('/contact-us')}>Contact Us</FooterHeading>
          <FooterList className="social-icons">
            <FooterLink href="https://facebook.com/travmigoz/" aria-label="Facebook">
              <Image src={SVG.facebook} alt="" />
              <Text>Facebook</Text>
            </FooterLink>
            <FooterLink href="https://twitter.com/travmigoz/" aria-label="Twitter">
              <Image src={SVG.twitter} alt="" />
              <Text>Twitter</Text>
            </FooterLink>
            <FooterLink href="https://youtube.com/travmigoz/" aria-label="YouTube">
              <Image src={SVG.youtube} alt="" />
              <Text>YouTube</Text>
            </FooterLink>
            <FooterLink href="https://instagram.com/travmigoz/" aria-label="Instagram">
              <Image src={SVG.instagram} alt="" />
              <Text>Instagram</Text>
            </FooterLink>
          </FooterList>
        </FooterSection>
      </FooterTop>
      <FooterRight>
        <Logo src={images.travmigoz_logo_white} alt="travmigoz logo" />
        {/* © 2025. All rights reserved. */}
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer

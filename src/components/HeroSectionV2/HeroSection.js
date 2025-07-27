import React from 'react'
import {
  Container,
  Section,
  ImageWrapper,
  TextWrapper,
  Heading,
  SubText,
  SmallText,
  BackgroundImage,
  FlexContainer,
  LeftText,
  RightSubText,
  BottomHeading,
  PublishButton,
  PublishHeading,
  PublishNowContainer,
  PublishNowContent,
} from './HeroSection.styled'
import { images } from '../../assets'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <FlexContainer margin="2.5%" gap="20px" direction="column">
      {/* publish section  */}

      <PublishNowContainer width="100%">
        <PublishNowContent width="70%" borderRadius="15px" backgroundImage={images.heroSection_4}>
          <PublishHeading>Publish trips on the go</PublishHeading>
        </PublishNowContent>
        <PublishButton
          onClick={() => {
            navigate('/publish-trip')
          }}
          width="30%"
        >
          Publish Now
        </PublishButton>
      </PublishNowContainer>
      <FlexContainer gap="20px" direction="row" className="main">
        {/* Left Section */}
        <Section>
          <FlexContainer direction="column" gap="10px" className="main">
            {/* Upper Section */}
            <FlexContainer width="100%">
              <FlexContainer aspectRatio="1" width="50%" borderRadius="15px" backgroundImage={images.heroSection_1} />
              <TextWrapper width="50%" backgroundColor="var(--color-primary)" borderRadius="15px">
                <SmallText>Scroll click Tap & Go</SmallText>
                <LeftText>
                  Finding a trip has never been easier! Thanks to our simple app powered by great technology, you can book a trip close to
                  you in just minutes.
                </LeftText>
              </TextWrapper>
            </FlexContainer>

            {/* Lower Section */}
            <FlexContainer
              direction="column"
              gap="20px"
              backgroundImage={images.heroSection_2}
              width="100%"
              aspectRatio="2"
              borderRadius="15px"
            >
              <SubText>
                No matter where you’re going, find the perfect trip and the perfect group from our wide range of destinations and routes.
              </SubText>
              <Heading>Finding the best group</Heading>
            </FlexContainer>
          </FlexContainer>
        </Section>

        {/* Right Section */}
        <Section>
          <FlexContainer
            width="100%%"
            aspectRatio="1"
            borderRadius="15px"
            backgroundImage="https://d1j74yat4qcnis.cloudfront.net/429688d2cfd004fddfa302694d92a11ae1db55bf.jpg"
          >
            <BottomHeading>Trust who you travel with</BottomHeading>
            <RightSubText>
              We take the time to get to know each of our trip publishers and members. We check reviews, profiles and IDs, so you know who
              you’re travelling with and can find a group at ease on our secure platform.
            </RightSubText>
          </FlexContainer>
        </Section>
      </FlexContainer>
    </FlexContainer>
  )
}

HeroSection.displayName = 'HeroSection'

export default HeroSection

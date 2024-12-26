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
} from './HeroSection.styled'

const HeroSection = () => {
  return (
    <FlexContainer margin="2.5%" gap="20px" direction="column">
      {/* publish section  */}

      <FlexContainer width="100%">
        <FlexContainer
          height="135px"
          width="70%"
          borderRadius="15px"
          backgroundImage="https://s3-alpha-sig.figma.com/img/a7e6/7a0b/8e69f6ca4bfcb1a09d62e638f0b971a9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5uS5p02rgY6xXj25z9rfb5AH6F46YfUspP2v9nrhWrjNIR496qpGqpWS7KVVY~oaqOgg5mz22YhIcifkYdtpcI1KXD9cSEvfiNQ7shmFkHpkv2TogBdemz6c62qKFYL6l-vkK1V3~M2-HBI7y9xQnKfRzZaW98YtRl-gLPMJV80hMSoPI9cZfeu9pAkKAMoM6h4tTzuUssRELwr6xmpUx-hCa-kglHC32SooGBUHRxDlLZ2py0OqP0DID3-e9YOySYoLiDy~vesnd0ex97UsfFhMCp7sLCkIT-6KMfFWLqJifa14BmJPCs1TTrduV-CvuwEVmQZy4TabGg98t~fpg__"
        >
          <PublishHeading>Publish trips on the go</PublishHeading>
        </FlexContainer>
        <PublishButton width="30%">Publish Now</PublishButton>
      </FlexContainer>
      <FlexContainer gap="20px" direction="row">
        {/* Left Section */}
        <Section>
          <FlexContainer direction="column" gap="20px">
            {/* Upper Section */}
            <FlexContainer width="100%">
              <FlexContainer
                aspectRatio="1"
                width="50%"
                borderRadius="15px"
                backgroundImage="https://s3-alpha-sig.figma.com/img/c45b/3f26/c707965d5d795d8c87455349579e57c5?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f42u6QIo2DLSCysuaKsef6iX7wJx-r3jJsORwHRaZd9m6iLz0qKaEysLWLBGXwribUCxkbRQBTzPZ0Gu~24KRZKodt-GylsyXkelnXVl1nUxR5uiqDdgnbyyZASvQaBuD4iX9d~jLD9ayBExK0qlQgk~wEk1DgpuBSFh5gI8y~70sftRyzOSv6hJ~C2K9g99u7f052WEPxWTYaAbKTeYgGorfriGulwRjVwPy7IZXy48dWaF-x-hTvI6uQUerWAdVXgPYGJNSSmXUc-GKMhYrQGoW~wCNZt9svbiPzjN7PZtNBrVnjHP1oGazgsAe80EI7spMuX-ORDrAf4ykBqXlA__"
              />
              <TextWrapper width="50%" backgroundColor="#8DD3BBDB" borderRadius="15px">
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
              backgroundImage="https://s3-alpha-sig.figma.com/img/5c5a/8949/7e4fce49535e1669201942e7b66bdb1a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5waygAzgCHToVLlG3BLgUJ2Zsm4-UcqvbGHzhzdTngmypwVxs-plrR0udBAsJmsce~Jw3OHDBUUKTZ3Pyuqa8TTtlFUKGmLKuNPqQltTFO2u-QUAeZhXyC7MU8PRF7HbWFS7vweTY4iylIHCXCkASlsLqg~Z31tVoYkBg9~uAq2Cit2Z8s~uKzwEL0KkWzbc0MsCRNO8PeRuQEsPsLpJGu1Ph7pTwLuZV9~j7CCAw5nxyX~FwM3skM8N9PkpavKtMKZmOKu5UTqou39d8T1K2zoNDlAXes32j0DcnZT0UaRR7SqZZRBlPt3XIUnHHaWLyFi-FXAnF1G~hO7oL19QQ__"
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
        <FlexContainer
          width="50%"
          aspectRatio="1"
          borderRadius="15px"
          backgroundImage="https://s3-alpha-sig.figma.com/img/4296/88d2/cfd004fddfa302694d92a11ae1db55bf?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CMf07cp0L-elbvWXJ3WntRxk1dCd7KagiC4ZteJOiSOOk9WCMPHYNEO~PKEact6BeHs5mDKAkSQCt3-DV3FYypFYap~rn3MDQYWXd2oXnL64x6roD1UmMp4fjTzHs1W1Ts6YH8EpBWVcT8D9MCYJudn2SQGNVUo7SCriN2OBU4tOTN3I6vMkrfVHsRLpwo1hczuNTnM28t7L70mABrGrZ0KhgnZLKxLttEWFeb8SpvKgZxaq2zyUGZZsfO76gh6KCer5-gTFnsc5uHQn0AG2~Nleh2yghXNSJKu--V-SpO~8la7aAeMpO3FCFIT4mTD5LD4MbX3q90lFHt-3NXv~bw__"
        >
          <BottomHeading>Trust who you travel with</BottomHeading>
          <RightSubText>
            We take the time to get to know each of our trip publishers and members. We check reviews, profiles and IDs, so you know who
            you’re travelling with and can find a group at ease on our secure platform.
          </RightSubText>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default HeroSection

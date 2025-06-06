import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: 20px;
`
Container.displayName = 'HeroSectionV2Container'

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
Section.displayName = 'HeroSectionV2Section'

export const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`
ImageWrapper.displayName = 'ImageWrapper'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 2.5%;
  width: ${(props) => props.width || 'auto'};
  position: relative;
  border-radius: ${(props) => props.borderRadius || '0'};
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : 'white')};
  aspect-ratio: 1;
  @media (max-width: 440px) {
    color: white;
  }
`
TextWrapper.displayName = 'TextWrapper'

export const Heading = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px;
  color: white;
  @media (max-width: 786px) {
    font-size: 6rem;
  }
`
Heading.displayName = 'HeroSectionV2Heading'

export const PublishHeading = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
  @media (max-width: 786px) {
    font-size: 5rem;
  }
`
PublishHeading.displayName = 'PublishHeading'

export const BottomHeading = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  position: relative;
  width: 70%;
  padding: 2% 2%;
  position: relative;
  height: 100%;
  display: flex;
  width: 70%;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 786px) {
    font-size: 6rem;
  }
`
BottomHeading.displayName = 'BottomHeading'

export const SubText = styled.p`
  width: 50%;
  font-size: 1.25rem;
  position: absolute;
  bottom: 15%;
  left: 10px;
  color: white;
  @media (max-width: 786px) {
    font-size: 2.5rem;
  }
`
SubText.displayName = 'SubText'

export const LeftText = styled.p`
  font-size: 1.25rem;
  text-align: right;
  @media (max-width: 786px) {
    font-size: 2.5rem;
  }
`
LeftText.displayName = 'LeftText'

export const RightSubText = styled.p`
  padding: 5% 5% 5% 0%;
  font-size: 1.25rem;
  font-weight: 800;
  width: 30%;
  right: 0;
  text-align: right;
  @media (max-width: 786px) {
    font-size: 2.5rem;
  }
`
RightSubText.displayName = 'RightSubText'

export const SmallText = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  text-align: left;

  font-size: 3.5rem;
  @media (max-width: 786px) {
    font-size: 6rem;
  }
`
SmallText.displayName = 'SmallText'

export const BackgroundImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`
BackgroundImage.displayName = 'BackgroundImage'

export const PublishButton = styled.button`
  font-size: 3.5rem;
  padding: 1%;
  cursor: pointer;
  background-color: var(--color-primary);
  width: ${(props) => props.width || 'auto'};
  border-radius: 10px;
  font-weight: 700;
  border: none;
  color: rgb(0, 0, 0);
  @media (max-width: 786px) {
    font-size: 5rem;
    padding: 2.5%;
    height: auto;
    width: 100%;
  }
`
PublishButton.displayName = 'PublishButton'

export const FlexContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-direction: ${(props) => (props.direction === 'column' ? 'column' : 'row')};
  font-size: ${(props) => props.fontSize || 'min(1rem,32px)'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || '10px'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  aspect-ratio: ${(props) => props.aspectRatio || 'auto'};
  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => props.borderRadius || '0'};
  color: ${(props) => props.color || 'black'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: relative;
  @media (max-width: 1080px) {
    border-radius: ${(props) => (props.borderRadius ? `${parseFloat(props.borderRadius) * 0.9}px` : '0')};
    gap: ${(props) => (props.gap ? `${parseFloat(props.gap) * 0.8}px` : '5px')};
  }
  @media (max-width: 786px) {
    border-radius: ${(props) => (props.borderRadius ? `${parseFloat(props.borderRadius) * 0.8}px` : '0')};
    gap: ${(props) => (props.gap ? `${parseFloat(props.gap) * 0.7}px` : '5px')};
  }
  @media (max-width: 440px) {
    border-radius: ${(props) => (props.borderRadius ? `${parseFloat(props.borderRadius) * 0.7}px` : '0')};
    gap: ${(props) => (props.gap ? `${parseFloat(props.gap) * 0.5}px` : '5px')};
  }

  &.main {
    @media (max-width: 786px) {
      flex-direction: column-reverse;
    }
  }
`
FlexContainer.displayName = 'FlexContainer'

export const PublishNowContainer = styled(FlexContainer)`
  @media (max-width: 786px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`
PublishNowContainer.displayName = 'PublishNowContainer'

export const PublishNowContent = styled(FlexContainer)`
  padding: 1%;
  @media (max-width: 786px) {
    padding: 5%;
    width: 100%;
    height: 100%;
  }
`
PublishNowContent.displayName = 'PublishNowContent'

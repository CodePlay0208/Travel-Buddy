import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: 20px;
`

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 3%;
  width: ${(props) => props.width || 'auto'};
  position: relative;
  border-radius: ${(props) => props.borderRadius || '0'};
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : 'white')};
  aspect-ratio: 1;
`

export const Heading = styled.h1`
  font-size: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px;
  color: white;
`
export const PublishHeading = styled.h1`
  font-size: 2.5rem;
  margin: 10px;
  color: white;
`
export const BottomHeading = styled.h1`
  font-size: 2.5rem;
  bottom: -40%;
  left: 0;
  margin: 10px;
  position: relative;
  width: 70%;
`

export const SubText = styled.p`
  width: 50%;
  font-size: 1rem;
  position: absolute;
  bottom: 15%;
  left: 10px;
  color: white;
`
export const LeftText = styled.p`
  font-size: 1rem;
  text-align: right;
`

export const RightSubText = styled.p`
  padding: 5%;
  font-size: 1rem;
  font-weight: 800;
  width: 30%;
  right: 0;
  text-align: right;
`

export const SmallText = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  font-size: 3rem;
`

export const BackgroundImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`
export const PublishButton = styled.button`
  height: 135px;
  font-size: 36px;
  padding: 1%;
  cursor: pointer;
  background-color: #8dd3bb;
  width: ${(props) => props.width || 'auto'};
  border-radius: 10px;
  font-weight: 700;
  border: none;
  color: rgb(0, 0, 0);
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'column' ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || '10px'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  aspect-ratio: ${(props) => props.aspectRatio || 'none'};
  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => props.borderRadius || '0'};
  color: ${(props) => props.color || 'black'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: relative;
`

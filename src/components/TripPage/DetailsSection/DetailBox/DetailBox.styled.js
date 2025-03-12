import styled from 'styled-components'

export const BoxContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 15rem;
  background: #ffffff;
  margin: 3% 0;
  padding: 3%;
  color: var(--color-primary);

  &.Traveller {
    color: #000000;
  }
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`
export const RemoveIcon = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
`

export const Heading = styled.div`
  font-weight: 500;
  color: #000000;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  padding-bottom: 1%;
`

export const BodyText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  width: 100%;
`

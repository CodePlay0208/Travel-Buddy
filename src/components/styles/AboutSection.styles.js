import styled from 'styled-components'

export const AboutSectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-wrap: wrap;
  margin: 100px;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  max-width: 425px;
  height: auto;
  left: 0;
  top: 0;
  background: rgba(141, 211, 187, 0.4);
  border-radius: 20px;
`

export const ContentFrame = styled.div`
  position: relative;
  width: 425px;
  height: 388px;
  background: #ffffff;
  border-radius: 20px;
  margin: 15px auto;

  &.first {
    box-shadow: -9px 10px 20px #d1ede4;
  }

  &.second {
    box-shadow: 0px 10px 20px #d1ede4;
  }

  &.third {
    box-shadow: 9px 10px 20px #d1ede4;
  }
`

export const ContentInnerFrame = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 20px;
`

export const Title = styled.div`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #000000;
  text-align: center;
`

export const Description = styled.div`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #000000;
  text-align: center;
  margin-top: 20px;
`

export const IconGroup = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const MediaQueries = {
  large: '@media (max-width: 768px)',
  small: '@media (max-width: 480px)',
}

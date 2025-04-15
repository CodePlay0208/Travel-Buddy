import styled, { css } from 'styled-components'
import { Button } from '../../styles/Global'
import React from 'react'

const colors = {
  primary: '#0b87ac',
  secondary: 'var(--color-primary)',
  dark: '#040f0f',
  light: '#ffffff',
  hover: '#559c84',
  background: '#f4f4f4',
  black: '#000000',
  shadow: 'rgba(0, 0, 0, 0.1)',
}

const breakpoints = {
  desktop: '1080px',
  tablet: '786px',
  mobile: '456px',
}

const media = {
  desktop: (styles) => css`
    @media (max-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `,
  tablet: (styles) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (styles) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
}

export const PublishTripPage = styled.div`
  position: relative;
  width: 100%;
`
export const Container = styled.div`
  padding: 5%;
  margin: ${(props) => props.margin ?? '0'};
  box-shadow: 0px 0px 8px 0px #0000001a;
  border-radius: 10px;
  @media (max-width: 440px) {
    padding: 10% 5%;
  }
`
export const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 5% 1%;
  align-items: center;
  width: 100%;
  @media (max-width: 440px) {
    margin: 0 3% 5%;
  }
`

export const InputField = styled.input`
  display: block;
  width: 100%;
  height: 51px;
  padding: 1% 5%;
  border: 2.325px solid ${colors.primary};
  border-radius: 9.3px;
  font-family: 'Poppins', sans-serif;
  font-size: 16.275px;
  color: ${colors.dark};

  ${media.desktop`
    font-size: 14px;
  `}

  ${media.tablet`
    border-radius: 3px;
    
  `}
`

export const DescriptionField = styled.textarea`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  padding: 1% 1.25%;
  border: none;
  background-color: ${colors.background};
  border-radius: ${(props) => props.borderRadius ?? '20px'};
  font-size: 1rem;
  color: ${colors.dark};

  ${media.desktop`
    height: 120px;
  `}

  ${media.tablet`
    padding: 1% 2.5%;
    font-size: 2rem;
    border-radius: 20px;
  `}
  ${media.mobile`
    padding: 2% 2.5%;
    font-size: 3rem;
    border-radius: 20px;
    
  `}
`

export const PublishTripContainer = styled.div`
  position: relative;
  padding: 1%;
  width: 95%;
  max-width: 1604px;
  margin: 0 auto;
  background: ${colors.light};
  border-radius: 10px;

  ${media.desktop`
    padding: 5%;
  `}
  ${media.mobile`
   padding:0;
  `}
`

export const PublishTripHeading = styled.div`
  position: relative;
  padding-left: 2%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.8;

  ${media.desktop`
    font-size: 5rem;
    padding-bottom:5%;
    text-align: left;
  `}
  ${media.mobile`
    font-size: 6rem;
    padding:10% 0;
    text-align: left;
  `}
`

export const PublishTripContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 80%;

  ${media.desktop`
    flex-direction: column;
    padding: 0px;
    gap:20px;
  `}
  ${media.desktop`
    padding: 0px;
  `}
`

export const PublishTripLeftSection = styled.div`
  width: calc(95% - 385px);
  margin-right: 5%;
  border-radius: 15px;
  position: relative;

  ${media.desktop`
    width: 100%;
  `}
  ${media.mobile`
    margin-right: 0;
  `}
`

export const DayTab = styled.button`
  cursor: pointer;
  transition: background-color 0.4s ease;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  height: 100%;
  color: ${colors.black};
  padding: 1% 3%;
  border-radius: 12px;
  border: none;

  background: ${colors.background};
  &.active {
    background-color: ${colors.secondary};
  }

  ${media.desktop`
    border-radius: 10px;
  `}

  ${media.tablet`
  `}
  ${media.mobile`
    font-size: 3.5rem;
    line-height: 4rem;
    padding:3%  5%;
    width : 120px;
  
  `}
`

export const AddButton = styled.button`
  cursor: pointer;
  transition: background-color 0.4s ease;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  height: 100%;
  color: ${colors.black};
  padding: 1% 3%;
  border-radius: 12px;
  border: none;
  background: white;

  @media (max-width: 440px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`

export const LeftSection = styled.div`
  position: relative;
  height: calc(100% - 50px);
  background: ${colors.light};
  box-shadow: 0px 0px 8px 0px ${colors.shadow};
  border-radius: 10px;
  padding: 5%;

  ${media.desktop`
    width: 100%;
    padding: 3% 5%;
    height: calc(100% - 30px);
  `}
  ${media.tablet`
    height: calc(100% - 20px);
  `}
`

export const InputGroup = styled.div`
  width: ${(props) => props.width ?? '100%'};
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin ?? '0 2% 2% 2%'};
  position: relative;

  gap: ${(props) => props.gap ?? '0'};
  ${media.desktop`
    margin: 0 0 10px 0;
  `}
  ${media.mobile`
    margin: 0 0 20px 0 ;
  `}
`

export const InputGroupDayName = styled(InputGroup)`
  width: 50%;
  @media (max-width: 440px) {
    width: 150%;
  }
`
export const InputGroupDesc = styled(InputGroup)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 440px) {
    width: 90%;
    flex-direction: column;
    gap: 10px;
  }
`
export const InputGroupList = styled(InputGroup)`
  width: 50%;
  margin: 3% 2% 2%;
  gap: 10px;
  @media (max-width: 440px) {
    width: 90%;
  }
`

export const InputLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${colors.dark};
  margin-bottom: 10px;
`

export const ToggleBetweenTripUser = styled.div`
  position: relative;
  display: flex;
  gap: 3%;
  height: 50px;
  border-radius: 15px 15px 0 0;

  ${media.desktop`
    width: 100%;
    height: 30px;
    border-radius: 10px 10px 0 0;
    
  `}

  ${media.tablet`
    width: 100%;
    height: 20px;
    border-radius: 5px 5px 0 0;
  `}
  ${media.mobile`
    width: 100%;
    height: 20px;
    border-radius: 15px 15px 0 0;
    height: 100%;
  `}
`

export const ToggleTab = styled.div`
  cursor: pointer;
  transition: background-color 0.4s ease;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  height: 100%;
  color: ${colors.black};
  padding: 1%;
  border-radius: 15px 15px 0 0;

  &.active {
    background-color: ${colors.secondary};
  }

  ${media.desktop`
    border-radius: 10px 10px 0 0;
  `}

  ${media.tablet`
    border-radius: 5px 5px 0 0;
  `}
  ${media.mobile`
    font-size: 3.5rem;
  line-height: 4rem;
  padding:2%;
  border-radius: 10px 10px 0 0;
  
  `}
`

export const Divider = styled.div`
  width: 0.5%;
  height: 4rem;
  background: ${colors.light};
  border-radius: 50px;

  ${media.desktop`
    height: 20px;
  `}
`

export const PublishTripButton = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 302px;
  height: 60px;
  margin: 20px auto;
  background: ${colors.light};
  border-radius: 8.90855px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.desktop`
    max-width: 100%;
  `}
`

export const NextButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: ${colors.hover};
  background-color: ${colors.light};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.hover};
    color: ${colors.light};
  }

  ${media.desktop`
    font-size: 14px;
  `}
`

export const SubmitButton = styled(NextButton)`
  background-color: ${colors.secondary};
  color: ${colors.black};
`

export const InputRow = styled.div`
  position: relative;
  display: flex;
  gap: 20px;

  ${media.tablet`
    flex-direction: column;
    gap: 10px;
  `}
`
export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 15%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;

  ${media.mobile`
    width: 33%;
  `}
`

export const InputColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 3%;
  width: ${(props) => props.width || '100%'};
`

export const PublishTripRightSection = styled.div`
  width: 385px;
  max-width: 500px;
  position: relative;
  background: ${colors.light};
  border-radius: 12px;
  margin-top: 3%;

  ${media.desktop`
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
  `}
`

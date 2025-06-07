import React from 'react'
import styled from 'styled-components'
import ClearIcon from '../../assets/svg/clear'

const DayTitle = ({ title, onEditClick, onDelete, idx }) => {
  const trimTitle = title.length > 50 ? title.substring(0, 50) + '...' : title
  //   const Container = styled.div`
  //     display: flex;
  //     justify-content: space-between;
  //     padding: 1% 1.5%;
  //     background: #ddf2eb;
  //     width: 100%;
  //     border-radius: 10px;
  //   `

  //   const Element = styled.span`
  //     font-size: 0.75rem;
  //     line-height: 1rem;
  //     font-weight: 600;
  //     width: ${(props) => props.width};
  //     display: flex;
  //     align-items: center;
  //     justify-content: flex-start;
  //     @media (max-width: 440px) {
  //       font-size: 3rem;
  //       line-height: 3rem;
  //     }
  //   `

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    gap:24px;
    background: #ddf2eb;
    border-radius: 10px;
    width: 100%;
    align-items: center;

    .icon,
    svg {
      width: 10px;
      height: 10px;
    }
    @media (max-width: 440px) {
      padding: 4% 4%;
    }
  `

  const Element = styled.span`
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    width: ${(props) => props.width};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    word-break: break-word;
    white-space: normal;
    @media (max-width: 440px) {
      font-size: 3rem;
      line-height: 3rem;
    }
  `
  return (
    <Container>
      <Element width={'90%'}>{trimTitle}</Element>
      <Element
        width={'2%'}
        onClick={() => {
          onEditClick(idx)
        }}
        className="icon"
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.54024 3.57991C6.1485 4.50706 6.94671 5.29918 7.88399 5.90217L4.52364 9.2635C4.09873 9.68842 3.88626 9.90114 3.6252 10.0408C3.36414 10.1805 3.06905 10.2394 2.4797 10.3573L1.48653 10.5565C1.15395 10.623 0.987395 10.6559 0.892782 10.5614C0.798174 10.4667 0.831143 10.3002 0.897665 9.9676L1.09688 8.97444C1.21475 8.3851 1.27361 8.08999 1.41329 7.82893C1.553 7.56788 1.76572 7.35541 2.19063 6.9305L5.54024 3.57991ZM7.75118 1.36995C8.39552 0.725655 9.43987 0.725629 10.0842 1.36995C10.7285 2.01427 10.7285 3.05863 10.0842 3.70296L9.34395 4.44221C8.35457 3.90466 7.54281 3.09855 6.99727 2.12288L7.75118 1.36995Z"
            fill="#050505"
          />
        </svg>
      </Element>
      <Element
        width={'2%'}
        onClick={() => {
          onDelete(idx)
        }}
        className="icon"
      >
        <ClearIcon width={'2%'}>X</ClearIcon>
      </Element>
    </Container>
  )
}

DayTitle.displayName = 'DayTitle'

export default DayTitle

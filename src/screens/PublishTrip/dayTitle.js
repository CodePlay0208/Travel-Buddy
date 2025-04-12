import React from 'react'
import styled from 'styled-components'

const DayTitle = ({ title, onEditClick, onDelete, idx }) => {
  const trimTitle = title.length > 50 ? title.substring(0, 50) + '...' : title
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    background: #f4f4f4;
    box-shadow: 0px 0px 4px 0px #00000026;
    border-radius: 10px;
  `

  const Element = styled.span`
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    width: ${(props) => props.width};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 768px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  `

  return (
    <Container>
      <Element width={'85%'}>{trimTitle}</Element>
      <Element
        width={'5%'}
        onClick={() => {
          onEditClick(idx)
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3428 5.99122L11.0841 5.24993C11.7284 4.6056 11.7284 3.56093 11.0841 2.9166C10.4397 2.27227 9.39508 2.27227 8.75075 2.9166L7.99524 3.67211C8.54082 4.6474 9.3537 5.45383 10.3428 5.99122ZM6.54015 5.12719L3.19046 8.47689C2.7654 8.90195 2.55287 9.11448 2.41314 9.37557C2.2734 9.63667 2.21446 9.9314 2.09657 10.5208L1.89784 11.5145C1.83131 11.8471 1.79805 12.0134 1.89266 12.108C1.98727 12.2026 2.15357 12.1694 2.48618 12.1028L3.47983 11.9041C4.06928 11.7862 4.36401 11.7273 4.62511 11.5875C4.8862 11.4478 5.09873 11.2353 5.52379 10.8102L8.88389 7.45012C7.94647 6.84715 7.14847 6.05441 6.54015 5.12719Z"
            fill="black"
          />
        </svg>
      </Element>
      <Element
        width={'5%'}
        onClick={() => {
          onDelete(idx)
        }}
      >
        X
      </Element>
    </Container>
  )
}

export default DayTitle

import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 125px;
  margin-bottom: 100px;
  @media (max-width: 440px) {
    gap: 0px;
  }
`

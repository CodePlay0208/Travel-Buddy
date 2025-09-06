import styled from 'styled-components'

const Container = styled.div`
  width: auto;
  margin: 0 2.5%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 440px) {
    gap: 20px;
  }
`

export default Container

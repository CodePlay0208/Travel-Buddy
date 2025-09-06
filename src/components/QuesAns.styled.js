import styled from 'styled-components'

export const QuesAnsContainer = styled.div`
  background: linear-gradient(135deg, #ff6f61 0%, #ffb347 100%);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  color: #fff;
`

export const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px #00000055;
`

export const QuesList = styled.ul`
  list-style: none;
  padding: 0;
`

export const QuesItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 1.2rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03) rotate(-1deg);
    background: rgba(255, 255, 255, 0.18);
  }
  strong {
    color: #ffe082;
    text-shadow: 1px 1px 4px #00000033;
  }
`

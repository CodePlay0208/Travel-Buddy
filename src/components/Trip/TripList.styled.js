import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow-x: auto;

  padding: 0 6%;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  gap: 20px;
  scrollbar-width: none;
  overflow-y: hidden;
  scroll-behavior: smooth;

  p {
    font-size: 1.85rem;
  }
  @media (max-width: 440px) {
    font-size: 3rem;
  }
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const Heading = styled.h1`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  padding: ${(props) => props.padding || '0 6%'};
  font-size: 3.25rem;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  
`

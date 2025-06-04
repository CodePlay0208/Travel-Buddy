import styled from 'styled-components'

export const Container = styled.div`
  margin: ${(props) => props.margin ?? '0'};
  /* box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1); */
  height: ${(props) => props.$height}px;
  border-radius: 0.625rem;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.75rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #050505;
  margin: 1rem 3% 0.5rem 3%;
`

export const Timeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 3% 1rem 3%;
`

export const TimelineItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`

export const BulletWrapper = styled.div`
  position: relative;
  width: 1.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .connector {
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: 0.125rem;
    height: 200%;
    background-color: rgba(5, 5, 5, 0.2);
  }
`

export const BulletSvg = styled.svg`
  flex-shrink: 0;
  width: 1.125rem;
  height: 1.125rem;
`

export const LocationBox = styled.div`
  flex: 1;
  background: #ddf2eb;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 440px) {
    padding: 0.75rem 1rem;
  }
`

export const LocationName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  color: #050505;

  @media (max-width: 440px) {
    font-size: 1.8rem;
  }
`

export const LocationSub = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.2;
  color: #050505;

  @media (max-width: 440px) {
    font-size: 1.6rem;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #050505;
  cursor: pointer;

  &:hover {
    color: #b00;
  }

  @media (max-width: 440px) {
    font-size: 2rem;
  }
`

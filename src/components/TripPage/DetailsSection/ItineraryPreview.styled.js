import styled from 'styled-components'

export const Container = styled.div`
  margin: ${(props) => props.margin ?? '0'};
  box-shadow: 0px 0px 9px 0px #00000036;

  height: ${(props) => props.$height}px;
  border-radius: 35px;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  }
`

export const PreviewTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin: 2%;

  @media (max-width: 440px) {
    font-size: 6rem;
    margin: 5% 3%;
  }
`

export const DayTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin: 2% 2% 0 2%;
  line-height: 100%;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  position: sticky;
  background: white;
  padding: 2%;
  top: 0px;
  overflow-y: auto;
  overflow-x: hidden;

  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 440px) {
    font-size: 6rem;
    padding: 5%;
  }
`

export const Content = styled.div`
  flex: 1;
  margin: 0 3% 2%;
  padding: 0 2%;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.3;
  color: #000;

  overflow-y: auto;
  overflow-x: hidden;

  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 440px) {
    padding: 0 5%;
  }
`

export const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-position: outside;
`

export const ListItem = styled.li`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
  margin: 2% 0;
  word-break: break-word;

  &.short-itinerary{
    cursor: pointer;
    color: #000;
    font-weight: 600;
    text-decoration: underline;
  }
  @media (max-width: 440px) {
    font-size: 3.5rem;
    margin: 5% 0;
  }
`

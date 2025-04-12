import styled from 'styled-components'

export const Container = styled.div`
  padding: 5%;
  margin: ${(props) => props.margin ?? '0'};
  box-shadow: 0px 0px 8px 0px #0000001a;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  overflow-y: scroll;

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

  @media (max-width: 440px) {
    padding: 10% 5%;
  }
`

export const PreviewTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin: 16px;
`

export const DayTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin: 0 16px 8px;
  line-height: 100%;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  overflow-y: auto;
  overflow-x: hidden;

  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
`

export const Content = styled.div`
  flex: 1;
  margin: 0 16px 16px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.3;
  color: #000;

  overflow-y: auto;
  overflow-x: hidden;

  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
`

export const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-position: outside;
`

export const ListItem = styled.li`
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
  margin-bottom: 8px;
  word-break: break-word;
`

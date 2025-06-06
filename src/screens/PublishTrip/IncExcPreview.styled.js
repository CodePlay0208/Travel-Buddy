import styled from 'styled-components'

export const Container = styled.div`
  margin: ${(props) => props.margin ?? '0'};
box-shadow: 0px 1px 6px 0px #00000033;

  height: ${(props) => props.$height}px;
  border-radius: 16px;
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
   @media (max-width: 440px) {
    height: 280px;
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
  font-size: 1.25rem;

  font-weight: 700;
  color: ${(props) => (props.isExclude ? '#C6141C' : 'var(--color-secondary)')};
  margin: 0 2% 1% 0;
  line-height: 100%;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 4%;

  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 440px) {
    font-size: 6rem;
    padding: 7%;
  }
`

export const Content = styled.div`
  flex: 1;
  margin: 0 0% 2%;
  padding: 0 4%;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.3;
  color: #000;

  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 440px) {
    padding: 0 7%;
  }
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 95%;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
  margin: 0 0;
  word-break: break-word;

  @media (max-width: 440px) {
    font-size: 3.5rem;
    margin: 1rem 0;
  }
`

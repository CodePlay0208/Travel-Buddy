import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5%;
  width: 100%;
  @media (max-width: 440px) {
    padding: 0;
  }
`

export const Container = styled.div`
  margin: ${(props) => props.margin ?? '0'};
  box-shadow: 0px 1px 6px 0px #00000033;

  height: 300px;
  border-radius: 16px;
  overflow-y: scroll;
  width: 50%;

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
    font-size: 4.5rem;
    margin: 5% 0%;
  }
`

export const DayTitle = styled.h1`
  font-size: 1.25rem;

  font-weight: 700;
  color: ${(props) => (props.isExclude ? '#C6141C' : 'var(--color-secondary)')};
  margin: 0;
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
    font-size: 4rem;
    padding: 4%;
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
    padding: 0 4%;
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
  align-items: flex-start;
  gap: 10px;
  width: 95%;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.4rem;
  color: #000;
  margin: 0 0;
  word-break: break-word;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
  span {
    width: 90%;
    display: inline-block;
  }

  @media (max-width: 440px) {
    font-size: 3.5rem;
    margin: 1rem 0;
    line-height: 3.5rem;
    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`

export const OuterWrapper = styled.div`
  margin: 5% 0;
`

export const TabButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
`

export const TabButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: ${({ selected, color }) => (selected ? `2px solid ${color}` : '1px solid #ccc')};
  background: ${({ selected, bg }) => (selected ? bg : '#fff')};
  color: ${({ selected, color }) => (selected ? color : '#333')};
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
`

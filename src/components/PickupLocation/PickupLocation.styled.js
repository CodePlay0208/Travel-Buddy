import styled from 'styled-components'

export const ICON_SIZE = 28 // px
export const DEFAULT_GAP = 40 // px gap between items when scrollable

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  background: #ffffff;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  width: 50%;
  @media (max-width: 440px) {
    padding: 0;
    gap: 16px;
    box-shadow: 0px 0 0;
    width: 100%;
  }
`

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #009965;
  margin: 0;
  white-space: nowrap;
  @media (max-width: 440px) {
    font-size: 16px;
    line-height: 16px;
  }
`

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  @media (max-width: 440px) {
    box-shadow: 0px 1px 4px 0px #0000004d;
    border-radius: 8px;
    padding: 8px 16px;
  }
`

export const RowWrapper = styled.div`
  position: relative;
  width: ${({ count }) => (count <= 5 ? '100%' : 'auto')};
  /* margin-top: ${ICON_SIZE}px;
  padding-bottom: 32px; */
  @media (max-width: 440px) {
    width: ${({ count }) => (count > 0 ? '100%' : 'auto')};
    box-shadow: ${({ count }) => (count <= 2 ? '0px 1px 4px 0px #0000004d' : 'none')};
    border-radius: 8px;
    padding: ${({ count }) => (count <= 2 ? '8px 16px' : '0')};
  }
`

export const BackgroundLine = styled.div`
  position: absolute;
  top: ${ICON_SIZE / 2}px;
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  height: 1px;
  background-color: rgba(5, 5, 5, 0.4);
  z-index: 1;
  @media (max-width: 440px) {
    top: ${8 + ICON_SIZE / 2}px;
  }
`

export const ItemsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ count }) => (count <= 5 ? 'space-between' : 'flex-start')};
  width: ${({ count }) => (count <= 5 ? '100%' : 'auto')};
  position: relative;
  z-index: 2;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: ${({ count }) => (count <= 5 ? '1 1 0' : '0 0 auto')};
  white-space: nowrap;

  margin-right: ${({ gap }) => `${gap}px` ?? '0px'};
  @media (max-width: 440px) {
    margin-right: ${({ mobGap }) => `${mobGap}px` ?? '0px'};
  }
`

export const IconWrapper = styled.div`
  width: ${ICON_SIZE + 10}px;
  height: ${ICON_SIZE}px;
  background: #ffffff;
  color: #8dd3bb;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    height: ${ICON_SIZE}px;
  }
`

export const Name = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #050505;
  text-align: center;
  margin-top: 8px;
`

export const Subtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #050505;
  text-align: center;
  margin-top: 4px;
`

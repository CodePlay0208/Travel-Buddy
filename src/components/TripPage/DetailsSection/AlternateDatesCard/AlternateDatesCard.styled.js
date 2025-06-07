import styled from 'styled-components'

export const Card = styled.div`
  /* position: absolute; */
  width: 500px;
  height: 430px;
  /* left: 614px;
  top: 387px; */
  background: #ffffff;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0;
  isolation: isolate;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 37px;
  padding: 0 16px 8px;
  gap: 10px;
  background: #ffffff;
`

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #18191a;
  margin: 0;
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 8px 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  overflow-y: auto;
`

export const DateRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 452px;
  height: 54px;
  padding: 8px 16px;
  gap: 24px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`

export const Label = styled.span`
  font-family: 'Overpass', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  color: #4b4b4b;
`

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Value = styled.span`
  font-family: 'Overpass', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 17px;
  color: #000000;
`

export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

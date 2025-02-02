import { createGlobalStyle, styled } from 'styled-components'
const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 1vw;
  line-height: 1.4;
  margin: 2% 0% 1%;
  color: #252525;
  width: ${(props) => props.width};
  @media (max-width: 786px) {
    font-size: 2.5vw;
  }
`

export const Value = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.5vw;
  color: #112211;
  @media (max-width: 786px) {
    font-size: 3vw;
  }
`
export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 2.5%;
  font-size: ${(props) => props.fontSize ?? '1vw'};
  border: ${(props) => props.border ?? '1px solid #f4f4f4'};
  border-radius: 120px;
  font-weight: 600;
  color: #7c7878;
  background-color: ${(props) => props.backgroundColor ?? '#f4f4f4'};
  cursor: pointer;
  @media (max-width: 786px) {
    padding: 1.5%;
    font-size: ${(props) => 1.5*props.fontSize ?? '1vw'};
    border-radius: 20px;
  }

  ::placeholder {
    color: #787878;
    font-size: ${(props) => props.fontSize ?? '1vw'};
    font-weight: 500;
  }
`
export const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #f4f4f4;
  border: 2px solid #afafaf;
  border-radius: 10px;
  padding: 3% 0;
`
export default GlobalStyles

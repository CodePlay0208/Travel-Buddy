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
  font-size: 1vw;
  border: 2px solid #f4f4f4;
  border-radius: 20px;
  font-weight: 600;
  color: #7c7878;
  background-color: #f4f4f4;

  @media (max-width: 786px) {
    padding: 1.5%;
    font-size: 2vw;
    border-radius: 20px;
    
  }

  ::placeholder {
    color: #787878;
    font-size: 1vw;
    font-weight: 500;
  }
`

export default GlobalStyles

import { createGlobalStyle, styled } from 'styled-components'
const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.5vw;
  line-height: 1.4;
  z-index: 2;
  margin: ${(props) => props.margin ?? '2% 0% 1%'};
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
  padding: ${(props) => props.padding ?? '2.5%'};
  margin: ${(props) => props.margin ?? '0'};
  font-size: ${(props) => props.fontSize ?? '1vw'};
  border: ${(props) => props.border ?? '1px solid #f4f4f4'};
  border-radius: 50px;
  font-weight: 600;
  color: #7c7878;
  background-color: ${(props) => props.backgroundColor ?? '#f4f4f4'};
  cursor: pointer;
  @media (max-width: 786px) {
    font-size: ${(props) => {
      const fontSize = parseFloat(props.fontSize)
      return fontSize ? `${fontSize * 2}vw` : '2vw'
    }};
    border-radius: 20px;

    &&::placeholder {
      color: #787878;
      font-size: ${(props) => {
        const fontSize = parseFloat(props.fontSize)
        return fontSize ? `${fontSize * 2}vw` : '2vw'
      }};
      font-weight: 500;
    }
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
  border: 1px solid #afafaf;
  border-radius: 10px;
  padding: 3% 0;
  @media (max-width: 456px) {
    padding: 0 50%;
  }
`

export const Button = styled.button`
  font-size: 1.25vw;
  font-weight: 600;
  line-height: 1vw;
  color: #000000;
  text-align: center;
  background: #8dd3bb;
  padding: 5% 10%;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #79bca7;
  }
`

export default GlobalStyles

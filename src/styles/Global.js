import { ToastContainer } from 'react-toastify'
import { createGlobalStyle, styled } from 'styled-components'
const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}
`
export const HeadingOne = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
`
export const Label = styled.label`
  font-weight: ${(props) => props.fontWeight ?? '500'};
  font-size: ${(props) => props.fontSize ?? '1.5rem'};
  line-height: ${(props) => (props.fontSize ? `${parseFloat(props.fontSize) * 1.1}rem` : '1.5rem')};
  z-index: 2;
  margin: ${(props) => props.margin ?? '2% 0% 1%'};
  color: #252525;
  width: ${(props) => props.width};
  @media (max-width: 786px) {
    line-height: ${(props) => (props.fontSize ? `${parseFloat(props.fontSize) * 2.6}rem` : '3.8rem')};
    font-size: ${(props) => (props.fontSize ? `${parseFloat(props.fontSize) * 2.5}rem` : '3.5rem')};
  }

  @media (max-width: 440px) {
    line-height: ${(props) => (props.fontSize ? `${parseFloat(props.fontSize) * 3.6}rem` : '4rem')};
    font-size: ${(props) => (props.fontSize ? `${parseFloat(props.fontSize) * 3.5}rem` : '4rem')};
  }
`

export const Value = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.5rem;
  color: #112211;
  @media (max-width: 786px) {
    font-size: 3.5rem;
  }
`
export const Input = styled.input`
  position: relative;
  width: ${(props) => props.width ?? '100%'};
  padding: ${(props) => props.padding ?? '2.5%'};
  margin: ${(props) => props.margin ?? '0'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  border: ${(props) => props.border ?? '1px solid #f2f2f2'};
  border-radius: 50px;
  font-weight: 400;
  color: #232323;
  background-color: ${(props) => props.backgroundColor ?? '#f2f2f2'};
  cursor: pointer;

  &:hover {
    border: ${(props) => props.border ?? ' 1px solid #8DD3BB'};
  }
  @media (max-width: 786px) {
    font-size: ${(props) => {
      const fontSize = parseFloat(props.fontSize)
      return fontSize ? `${fontSize * 2}rem` : '2rem'
    }};
    padding: ${(props) => props.mobPadding ?? '2.5%'};
    border-radius: 20px;

    &&::placeholder {
      color: #787878;
      font-size: ${(props) => {
        const fontSize = parseFloat(props.fontSize)
        return fontSize ? `${fontSize * 2}rem` : '2rem'
      }};
      font-weight: 500;
    }
  }

  @media (max-width: 440px) {
    font-size: ${(props) => {
      const fontSize = parseFloat(props.fontSize)
      return fontSize ? `${fontSize * 3}rem` : '3rem'
    }};

    &&::placeholder {
      color: #787878;
      font-size: ${(props) => {
        const fontSize = parseFloat(props.fontSize)
        return fontSize ? `${fontSize * 3}rem` : '3rem'
      }};
    }
  }
  ::placeholder {
    color: #787878;
    font-size: ${(props) => props.fontSize ?? '1rem'};
    font-weight: 500;
  }
`
export const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #f2f2f2;
  border: 1px solid #afafaf;
  border-radius: 10px;
  padding: 3% 0;
  @media (max-width: 456px) {
    padding: 0 50%;
  }
`

export const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1rem;
  color: #000000;
  text-align: center;
  width: 100%;
  background: white;
  padding: ${(props) => props.padding ?? '5% 10%'};
  border: 1px solid #000000;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
    color: var(--color-primary);
  }

  @media (max-width: 440px) {
    font-size: 2.5rem;
  }
`

export const StyledToastContainer = styled(ToastContainer).attrs({
  // Default props for ToastContainer
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
})`
  .Toastify__toast {
    font-size: 3rem; /* Customize font size */
    font-family: 'Montserrat', sans-serif; /* Optional: Customize font family */
    color: #112211; /* Optional: Customize text color */
  }

  .Toastify__toast-body {
    font-size: 1rem;
    @media (max-width: 440px) {
      font-size: 3rem;
    }
  }

  .Toastify__progress-bar {
    background-color: var(--color-primary); /* Customize progress bar color */
  }
`
export default GlobalStyles

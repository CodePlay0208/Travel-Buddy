import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const LoginFormContainer = styled.div`
  width: 50%;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.125rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    border-color: #42a7c3;
    outline: none;
  }
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: #42a7c3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #339fb5;
  }
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  span {
    padding: 0 1rem;
    font-size: 0.875rem;
    color: #333;
  }
`

export const GoogleSignInButton = styled(Button)`
  background-color: #db4437;
  &:hover {
    background-color: #c63830;
  }
`

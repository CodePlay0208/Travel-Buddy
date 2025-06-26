import React from 'react'
import styled from 'styled-components'

import backgroundImage1 from './secondImage.jpg'
import { Input } from '../../styles/Global'
import { DescriptionField } from '../../screens/PublishTrip/PublishTrip.styled'

const FrameTwo = styled.div`
  width: 100%;
  height: 730px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;

  @media (max-width: 440px) {
    flex-direction: column-reverse;
    gap: 40px;
    height: 100%;
    align-items: flex-end;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 0 0 9%;
  gap: 22px;
  width: 47.5%;

  @media (max-width: 440px) {
    width: 100%;
    padding: 0 16px;
    align-items: center;
    gap: 16px;
  }
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

const SubTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 51px;
  @media (max-width: 440px) {
    width: 100%;
    height: auto;
  }
`

const SubTitle = styled.p`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 150%;
  color: #595959;
  .black {
    color: #000;
  }

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
  }
`

const SubTitleSmall = styled.p`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 150%;
  color: #595959;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
  }
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #848282;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 460px;

  @media (max-width: 440px) {
    height: auto;
    gap: 16px;
  }
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 440px) {
    gap: 12px;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 16px;
  }
`

const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;
  color: #252525;
  .red {
    color: #ff2a2a;
  }

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
  }
`

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  background: #8dd3bb;
  border-radius: 40px;
  cursor: pointer;
  border: none;
`

const ButtonText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #000;
`

const ImageWrapper = styled.div`
  width: 52.5%;
  height: 726px;
  background: url(${backgroundImage1});
  background-position: center;
  border-radius: 0 112.5px 112px 0;
  transform: scaleX(-1);

  @media (max-width: 440px) {
    width: 95%;
    height: 345px;
    padding: 0 0 0 5%;
    border-top-right-radius: 53.17px;
    border-bottom-right-radius: 52.93px;
  }
`

const SignUpSection = () => {
  const [form, setForm] = React.useState({ fullName: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <FrameTwo>
      <Content>
        <TitleGroup>
          <Title>Get In Touch</Title>
        </TitleGroup>
        <SubTitleGroup>
          <SubTitle>
            Customer Support Hours: <span className="black">Monday to Saturday - 10:00 AM to 6:00 PM</span>
          </SubTitle>
          <SubTitleSmall>Fill out the contact form below, and our team will get back to you as soon as possible.</SubTitleSmall>
        </SubTitleGroup>
        <Divider />
        {submitted ? (
          <SubTitle>Thank you for signing up! We'll contact you soon.</SubTitle>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormSection>
              <Label htmlFor="fullName">
                Full Name <span className="red">*</span>
              </Label>

              <Input
                padding={'2%'}
                id="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </FormSection>

            <Container>
              <FormSection>
                <Label htmlFor="phone">
                  Phone Number <span className="red">*</span>
                </Label>

                <Input id="phone" padding={'4%'} placeholder="Enter Phone Number" value={form.phone} onChange={handleChange} required />
              </FormSection>
              <FormSection>
                <Label htmlFor="email">
                  Email <span className="red">*</span>
                </Label>

                <Input id="email" padding={'4%'} placeholder="Enter Email Address" value={form.email} onChange={handleChange} required />
              </FormSection>
            </Container>
            <FormSection>
              <Label htmlFor="message">
                Message <span className="red">*</span>
              </Label>
              <DescriptionField
                padding={'4%'}
                id="message"
                rows={4}
                placeholder="Write a Message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </FormSection>
            <ButtonWrapper type="submit">
              <ButtonText>Submit</ButtonText>
            </ButtonWrapper>
          </Form>
        )}
      </Content>
      <ImageWrapper />
    </FrameTwo>
  )
}

export default SignUpSection

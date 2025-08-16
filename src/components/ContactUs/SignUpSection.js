import React from 'react'
import { toast } from 'react-toastify'

import {
  FrameTwo,
  Content,
  TitleGroup,
  Title,
  SubTitleGroup,
  SubTitle,
  SubTitleSmall,
  Divider,
  Form,
  FormSection,
  Container,
  Label,
  ButtonWrapper,
  ButtonText,
  ImageWrapper,
} from './SignUpSection.styled'
import backgroundImage1 from './secondImage.jpg'
import { Input } from '../../styles/Global'
import { DescriptionField } from '../../screens/PublishTrip/PublishTrip.styled'
import { StyledToastContainer } from '../../styles/Global'
import { useSelector, useDispatch } from 'react-redux'
import { postFeedback } from '../../store/slices/feedback-slice' 

const SignUpSection = () => {
  const dispatch = useDispatch()
  const { loading, error, success } = useSelector((state) => state.feedbackReducer)
  const [form, setForm] = React.useState({ fullName: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(postFeedback(form)).unwrap()
    if (res) {
      setSubmitted(true)
      setForm({ fullName: '', phone: '', email: '', message: '' })
      toast.success('Thank you for your feedback!')
    } else {
      toast.error('There was an error submitting your feedback. Please try again.')
    }
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
          <SubTitle>Thank you for your feedback! We'll contact you soon.</SubTitle>
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
      <StyledToastContainer />
    </FrameTwo>
  )
}

export default SignUpSection

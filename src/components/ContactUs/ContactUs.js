import React, { useState } from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  position: absolute;
  top: 0;
  left: -1rem;
  width: 1726rem;
  height: 900rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 155rem 0 0;
  gap: 72rem;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 1064rem;
  height: 900rem;
  flex: none;
  background: url('/path/to/woman-tourist-taking-photo-doi-luang-chiang-dao-mountains-chiang-mai-thailand.jpg') no-repeat center/cover;
  border-radius: 0 0 112.5rem 0;
  overflow: hidden;
`

const Overlay = styled.div`
  position: absolute;
  top: -30rem;
  left: -114rem;
  width: 1209rem;
  height: 960rem;
  background: rgba(0, 0, 0, 0.4);
`

const Title = styled.h1`
  position: absolute;
  top: 230rem;
  left: 154rem;
  width: 773rem;
  height: 460rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 96rem;
  line-height: 120%;
  color: #fff;
`

const SideFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32rem;
  width: 480rem;
  height: 600rem;
  flex: none;
`

const Subtitle = styled.h2`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 56rem;
  line-height: 120%;
  color: #252525;
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18rem;
  width: 480rem;
  flex: none;
`

const Description = styled.p`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24rem;
  line-height: 150%;
  color: #252525;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16rem;
  width: 100%;
`

const Input = styled.input`
  padding: 12rem;
  font-size: 20rem;
  border: 1rem solid #ccc;
  border-radius: 8rem;
  font-family: 'Montserrat', sans-serif;
`

const Textarea = styled.textarea`
  padding: 12rem;
  font-size: 20rem;
  border: 1rem solid #ccc;
  border-radius: 8rem;
  font-family: 'Montserrat', sans-serif;
  resize: vertical;
`

const Button = styled.button`
  padding: 14rem 32rem;
  font-size: 22rem;
  background: #8dd3bb;
  color: #fff;
  border: none;
  border-radius: 8rem;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
`

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle sending the form data to your backend or email service
    setSubmitted(true)
  }

  return (
    <Frame>
      <ImageWrapper>
        <Overlay />
        <Title>Contact Us</Title>
      </ImageWrapper>
      <SideFrame>
        <Subtitle>We'd love to hear from you!</Subtitle>
        <TextBlock>
          <Description>
            Have questions, need assistance, or want to know more about our services? Fill out the form below and our team will get back to
            you as soon as possible.
          </Description>
        </TextBlock>
        {submitted ? (
          <Description>Thank you for reaching out! We'll get back to you soon.</Description>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <Textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} required />
            <Button type="submit">Send Message</Button>
          </Form>
        )}
      </SideFrame>
    </Frame>
  )
}

export default ContactUs

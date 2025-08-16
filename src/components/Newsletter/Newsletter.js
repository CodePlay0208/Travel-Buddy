import React, { memo, useState } from 'react'
import {
  NewsletterContainer,
  NewsletterWrapper,
  NewsletterHeader,
  NewsletterLeft,
  NewsletterText,
  NewsletterForm,
  NewsletterButton,
  NewsletterRight,
  NewsletterImage,
  NewsletterInput,
  ContentContainer,
} from '../../styles/Newsletter.styles'
import { Input, StyledToastContainer } from '../../styles/Global'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { subscribeNewsletter } from '../../store/slices/newsletter-slice'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  return (
    <NewsletterContainer>
      <NewsletterWrapper>
        <NewsletterHeader>
          <span>Subscribe Newsletter</span>
        </NewsletterHeader>
        <ContentContainer>
          <NewsletterLeft>
            <NewsletterText>
              <h2>The Travel</h2>
              <p>Get inspired! Receive travel tips and behind the scenes stories.</p>
            </NewsletterText>
            <NewsletterForm>
              <NewsletterInput
                value={email}
                type="email"
                placeholder="Your email address"
                onChange={(e) => {
                  const { value } = e.target
                  setEmail(value)
                }}
              />
              <NewsletterButton
                onClick={() => {
                  const res = dispatch(subscribeNewsletter({ emailId: email }))
                  setEmail('')
                  if (res) {
                    toast.success('Subscribed to Newsletter', { autoClose: 1500 })
                  } else {
                    toast.error('Please try again', { autoClose: 1500 })
                  }
                }}
              >
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterLeft>
          <NewsletterRight>
            <NewsletterImage />
          </NewsletterRight>
        </ContentContainer>
      </NewsletterWrapper>
      <StyledToastContainer />
    </NewsletterContainer>
  )
}

Newsletter.displayName = 'Newsletter'

export default memo(Newsletter)

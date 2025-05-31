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
import { subscribeNewsletter } from '../../actions/newsletter.action'
import { connect } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const Newsletter = ({ subscribeNewsletter }) => {
  const [email, setEmail] = useState('')
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
                  const res = subscribeNewsletter({ emailId: email })
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

export default connect(mapStateToProps, { subscribeNewsletter })(memo(Newsletter))

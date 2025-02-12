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
} from '../../styles/Newsletter.styles'
import { Input } from '../../styles/Global'
import { subscribeNewsletter } from '../../actions/newsletter.action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const Newsletter = ({ subscribeNewsletter }) => {
  const [email, setEmail] = useState('')
  return (
    <NewsletterContainer>
      <NewsletterWrapper>
        <NewsletterLeft>
          <NewsletterHeader>
            <div>Subscribe</div>
            <div>Newsletter</div>
          </NewsletterHeader>
          <NewsletterText>
            <h2>The Travel</h2>
            <p>Get inspired! Receive travel tips and behind the scenes stories.</p>
          </NewsletterText>
          <NewsletterForm>
            <Input
              value={email}
              type="email"
              placeholder="Your email address"
              onChange={(e) => {
                const { value } = e.target
                setEmail(value)
              }}
              margin='2%'
            />
            <NewsletterButton
              onClick={() => {
                subscribeNewsletter({ emailId: email })
              }}
            >
              Subscribe
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterLeft>
        <NewsletterRight>
          <NewsletterImage />
        </NewsletterRight>
      </NewsletterWrapper>
    </NewsletterContainer>
  )
}

export default connect(mapStateToProps, { subscribeNewsletter })(memo(Newsletter))

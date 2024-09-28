import React from 'react'
import {
  NewsletterContainer,
  NewsletterWrapper,
  NewsletterContent,
  NewsletterHeader,
  NewsletterLeft,
  NewsletterText,
  NewsletterForm,
  TextField,
  EmailInput,
  NewsletterButton,
  NewsletterRight,
  NewsletterImage,
} from '../../Styles/Newsletter.styles'

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterWrapper>
        <NewsletterContent>
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
              <TextField>
                <EmailInput type="email" placeholder="Your email address" />
              </TextField>
              <NewsletterButton>
                <span className="button-text">Subscribe</span>
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterLeft>
          <NewsletterRight>
            <NewsletterImage />
          </NewsletterRight>
        </NewsletterContent>
      </NewsletterWrapper>
    </NewsletterContainer>
  )
}

export default Newsletter

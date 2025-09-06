import React from 'react'
import { QuesAnsContainer, Heading, QuesList, QuesItem, Answer, Question, IconWrapper } from './QuesAns.styled'
import CheckIcon from './SeoPagesTemplate/CheckIcon'

const QuesAns = ({ heading, data }) => {
  return (
    <QuesAnsContainer>
      <Heading>{heading}</Heading>
      <QuesList>
        {data?.map((q, idx) => (
          <QuesItem key={idx}>
            <Question>
              <IconWrapper>
                <CheckIcon />
              </IconWrapper>{' '}
              {q.ques}
            </Question>

            <Answer>{q.ans}</Answer>
          </QuesItem>
        ))}
      </QuesList>
    </QuesAnsContainer>
  )
}

export default QuesAns

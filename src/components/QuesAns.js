import React from 'react'
import { QuesAnsContainer, Heading, QuesList, QuesItem } from './QuesAns.styled'

const QuesAns = ({ heading, questions }) => {
  return (
    <QuesAnsContainer>
      <Heading>{heading}</Heading>
      <QuesList>
        {questions.map((q, idx) => (
          <QuesItem key={idx}>
            <strong>Q:</strong> {q.question}
            <br />
            <strong>A:</strong> {q.answer}
          </QuesItem>
        ))}
      </QuesList>
    </QuesAnsContainer>
  )
}

export default QuesAns

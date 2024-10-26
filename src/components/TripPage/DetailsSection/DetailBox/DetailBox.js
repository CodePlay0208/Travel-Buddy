import React from 'react'
import { BoxContainer, BoxContent, ProfileImage, Heading, BodyText } from './DetailBox.styled'

const DetailBox = ({ heading, body }) => {
  return (
    <BoxContainer>
      <BoxContent>
        <ProfileImage
          src="https://s3-alpha-sig.figma.com/img/6758/3223/1663a67cc465cbf38bc761107366ab8f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=obRE-TYeWb22B0lU4dTOlGN7lFVn~gDz7FMXZNXKVlxvOCPyTb5Zdpou8KD85qzaMyTP1sHFRBRD3QAJd9iEOI4BSyJD0~V70soIKT~GTMHjJLoPT4wGSNil9b8MUWJvcOHYTE4Uyy5WwxkZ4pYuTMHzjLq2UGnN5dETFuPwo9p0U2qrTAooRrGt0mub5H0OBULt0JLxwFV2mJFvjH4wiXU4PhneXa9WeyMnePxhjX9y5axFkndpFvhiQvYJPFqnAk~BZLRllUQVSHdB041Hc~k5xRR4XPudpsWMtgzurPbLQOyh-WoXxbHQ~lhS2ELEYVPgG5oGETcK0BU64LMIUg__"
          alt=""
        />
        <Heading>{heading}</Heading>
        <BodyText>{body}</BodyText>
      </BoxContent>
    </BoxContainer>
  )
}

export default DetailBox

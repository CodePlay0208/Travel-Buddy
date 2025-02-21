import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  border-bottom: 1px solid #afafaf;
  width: 96%;
`

const LineBorder = ({ margin = '2% 2% 0', className }) => {
  return <Line style={{ margin }} className={className} />
}

export default LineBorder

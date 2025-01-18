import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  border-bottom: 1px solid #afafaf;
  width: 100%;
`

const LineBorder = ({ width = '100%', margin = '0', className }) => {
  return <Line style={{ width, margin }} className={className} />
}

export default LineBorder

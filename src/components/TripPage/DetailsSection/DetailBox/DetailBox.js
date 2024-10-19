import React from 'react'
import './DetailBox.css'

const DetailBox = ({ heading, body}) => {
  return (
    <div className="detail-box">
      <div className="detail-box-content">
        <img className="detail-box-profile-page" src="#" alt=""></img>
        <div className="detail-box-heading">{heading}</div>
        <div className="detail-box-body">{body}</div>
      </div>
    </div>
  )
}

export default DetailBox

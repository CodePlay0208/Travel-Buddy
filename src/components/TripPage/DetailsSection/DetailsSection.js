import React, { useState } from 'react'
import firstImage from '../../../data/Images/aeroPlaneTripPage.png'
import secondImage from '../../../data/Images/MapImage.png'
import DetailBox from './DetailBox/DetailBox'
import { SVG } from '../../../assets/svg'
import './DetailsSection.css'
import AddMembers from './AddMembers/AddMembers'

const DetailsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ...`

  const words = content.split(' ')
  const displayedContent = isExpanded ? content : words.slice(0, 50).join(' ') + '...'

  return (
    <div className="trippage_details-section">
      <div className="trippage_des-chat-section">
        <div className="trippage_des">
          <div className="trippage_title">Add Title Here</div>
          <div className="trippage_des-title">Description</div>
          <div className="grey-line2"></div>
          <div className="trippage_des-content">
            {displayedContent}
            {words.length > 50 && (
              <span onClick={toggleExpand} className="trippage_toggle-button">
                {isExpanded ? ' Show Less' : ' Show More'}
              </span>
            )}
          </div>
        </div>
        <div className="trippage_chat-section">
          <div className="trippage_profile-image">
            <div className="trippage_profile-picture">
              <img src="" alt="" />
            </div>
            <div className="trippage_profileName">User</div>
          </div>
          <div className="grey-line2"></div>
          <div className='trippage_date-container'>
            <div className="trippage_date-section">
              <div className="trippage_startdate trippage_details">
                <div className="trippage_box_heading">Start Date</div>
                <div className="trippage_box_content">DD/MM/YYYY</div>
              </div>
              <div className="trippage_enddate trippage_details">
                <div className="trippage_box_heading">End Date</div>
                <div className="trippage_box_content">DD/MM/YYYY</div>
              </div>
            </div>
            <div className="trippage_info-section">
              <div className="trippage_budget trippage_details">
                <div className="trippage_box_heading">Budget</div>
                <div className="trippage_box_content">6000</div>
              </div>
              <div className="trippage_totalMember trippage_details">
                <div className="trippage_box_heading">Members</div>
                <div className="trippage_box_content">10</div>
              </div>
            </div>
            <div className="trippage_chat-now-button">Chat Now</div>
          </div>
        </div>
      </div>

      <div className="trippage_details-upper-section">
        <div className="trippage_title map-title">Add Title Here</div>
        <div className="grey-line"></div>
        <div className="trippage_map-image"></div>
        <div className="grey-line"></div>
      </div>
      <AddMembers />
    </div>
  )
}

export default DetailsSection

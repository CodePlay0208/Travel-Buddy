import React, { useState } from 'react';
import firstImage from "../../../data/Images/aeroPlaneTripPage.png";
import secondImage from "../../../data/Images/MapImage.png";
import DetailBox from './DetailBox/DetailBox';
import { SVG } from "../../../assets/svg";
import "./DetailsSection.css";

const DetailsSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const content = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis id voluptatem accusamus ad mollitia iure aspernatur doloribus cum odio voluptatum, quibusdam quaerat porro eos, ipsam libero beatae sequi, odit dolore. Aut sint, ipsa iure inventore deleniti a voluptates repellat vitae, alias corporis illo! Corrupti impedit vitae maiores corporis neque ipsum iusto iste odit repellendus totam nihil, omnis incidunt ad rerum porro laboriosam repellat temporibus soluta minima quasi doloribus quae quam fugiat. Sapiente quidem minus nihil ex, voluptatibus totam consectetur laboriosam facilis fugiat iste. Tempora molestias qui, expedita pariatur eum commodi illum nihil veniam architecto in suscipit, accusantium corrupti nam fugit impedit doloribus assumenda ratione quod cumque dicta maxime error veritatis! Itaque placeat a nesciunt nostrum repudiandae esse sunt voluptate error. Modi molestias nobis explicabo tempore incidunt eum! Quo, accusantium quae! Vero qui maxime nostrum expedita unde? Quis at ipsam, magni nihil, dolore tempora minima voluptatem hic quaerat, porro cumque eligendi maxime! Nemo provident alias, fugit eius quis delectus voluptas est fugiat error iusto fuga laudantium dolore dolor nihil architecto natus tempora aut unde porro. Earum temporibus quae reprehenderit eaque similique voluptas facere repellat eius explicabo quod! Obcaecati iure est provident quae, officiis reprehenderit cumque quas cupiditate, pariatur perspiciatis eum deserunt adipisci corrupti ipsam. In illum optio nobis fugit assumenda error eum! Alias molestias doloribus sint voluptate nostrum quaerat hic corporis quibusdam sed labore, impedit sequi placeat, eveniet, sunt rerum nulla maiores? Omnis corrupti incidunt minima, quisquam quo nostrum sapiente dolores quis aspernatur veritatis, cupiditate mollitia nam iusto est? Laudantium fugit mollitia nam placeat fugiat, sed quidem alias impedit optio excepturi? Nisi doloremque ex necessitatibus quae fuga quibusdam, id soluta? Repellendus officiis optio, sed blanditiis iure aperiam dolore magnam. Expedita possimus optio quae a sed? Sint dolorem, sunt quam minima illum explicabo perspiciatis eligendi non ratione repellat atque pariatur facilis expedita voluptates ipsam ipsa nemo velit corrupti architecto dicta quia. Tempore sit id similique odit tempora nobis sint, aut natus consequuntur? Porro recusandae quod velit saepe repudiandae ipsa itaque voluptatem, dolores deserunt ducimus corporis natus soluta quia doloribus ab dicta pariatur tenetur tempora nihil, autem ea corrupti eum? Provident neque quasi eveniet earum? Iusto enim illum qui harum, tempore consectetur exercitationem reprehenderit a voluptates itaque animi tenetur neque ipsa fugiat quam aperiam optio expedita excepturi laudantium? A consequatur quo maxime minus cumque. Pariatur nemo tempora porro harum quia expedita, cumque nostrum, facere consequuntur distinctio optio natus beatae, obcaecati aliquid? Dolore, impedit.`;

    const words = content.split(' ');
    const displayedContent = isExpanded ? content : words.slice(0, 50).join(' ') + '...';

    return (
        <div className="trippage_details-section">
            <div className="trippage_chat-bar">
                <div className="trippage_title">Add Title Here</div>
                <div className="trippage_des-chat-section">
                    <div className="trippage_des">
                        <div className="trippage_des-title">
                            Description
                        </div>
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
                            <div className="trippage_profile-picture"><img src="" alt="" /></div>
                            <div className="trippage_profileName">User</div>
                        </div>
                        <div className="grey-line"></div>
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
            <div className="grey-line"></div>
            <div className="trippage_details-upper-section">
                <div className="trippage_title map-title">Add Title Here</div>
                <div className="trippage_map-image"></div>
            </div>
            <div className="trippage_details-lower-section">
                <div className="trippage_heading-container">
                    <div className="trippage_head-title">
                        Meet Your Travmigoz
                    </div>
                    <div className="trippage_create-more-button">
                        Create More
                    </div>
                    <div className="trippage_profile-cards">
                        <DetailBox heading={"Username"} body={"Username"} svg={""}></DetailBox>
                        <DetailBox heading={"Username"} body={"Username"} svg={""}></DetailBox>
                        <DetailBox heading={"Username"} body={"Username"} svg={""}></DetailBox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSection;

import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
    return (
        <>
            <div className="image-container">
                <div className="backgroundImage"><img className='backgroundImage' src="https://s3-alpha-sig.figma.com/img/04aa/b0c2/af63e471ad6e8893e0055179442738fc?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JH78agxc8kFWuZrH-7XFllzuV-QNoolPIXGoT~2llNqm~VWwqnJbkXslZm~Fn5DYxd7WTMKQSrOuMTFirTmZ5eSEx5L5F6MYbh06HQ1SaRFvfbbfZGPo1wfrN5H-BYWExQMG7PgwPz~mIzQ5GJf2I6wIbNIm4Du7pUHKEdO6D9uhR4700l6fw4Mrdb0YD7w5WAzUqCvcJ4H5lBJsgw7tKZdk6fPBbuOXin03cabNEu3RQ76kKNszbmlkDwFoG3dPFavf-amgZAIeZ9gk6Zp-gCUKjk307FvbHgy78eFIC9sc7gz-YpRUP1JtylWB0ZBjtyXGkLfjpjhtXvjKm81NCQ__" alt="" /></div>
                <div className="profilePic"><img className='imgProfile' src="https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LQR~oyiUxJqdZlDrmr-eZYQQ3ejLlTeMZZjqnLIeWKJWGUCnYOx8Wyv-raqCYZDQQ-VfLCYd8YFNBFrwGY-k7NsSXju250P5QVzozRYvLZp802AviMIaXRjxTRuKy50j-ufejbBUj2UiLh0rDVBn2KPH1o1bWvSwXbUqYBUEl71FSX3xiIIUYymtpKwLTbrooYayjjgULHMjir0Cr5B1UUGoCCJ7YooN83IFq21-YtX5MaDUfUjQwnbFo3~DgvrzLBXv3SCrayteJ5vpSfpkVSR2CfobyMeLJzYtJPTdCRlTfWZhbbwo97Hl4z8dX-JbEJ1E5-cGD5V1ucPhABlvMw__" alt="" /></div>
            </div>
            <div className="dashboard-container">

                <div className="dashboard-header">
                    <h1 className="header-title">Account</h1>
                </div>
                <div className="dashboard-content">
                    <div className="user-info-columns">
                        <div className="user-info-column">
                            <div className="user-info-item">
                                <span className="label">Name</span>
                                <span className="value">Your Name</span>
                            </div>
                            <div className="user-info-item">
                                <span className="label">Phone Number</span>
                                <span className="value">+91 000-000-0000</span>
                            </div>
                            <div className="user-info-item">
                                <span className="label">Date of Birth</span>
                                <span className="value">01-01-1992</span>
                            </div>
                        </div>
                        <div className="user-info-column">
                            <div className="user-info-item">
                                <span className="label">Email</span>
                                <span className="value">xyz@gmail.com</span>
                            </div>
                            <div className="user-info-item">
                                <span className="label">Address</span>
                                <span className="value">Sambalpur, Odisha</span>
                            </div>
                            <div className="user-info-item">
                                <span className="label">Persona</span>
                                <span className="value">Traveller</span>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-actions">


                        <button className="edit-button">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.2751 3.61233L29.2751 3.61226C29.1874 3.51592 29.0811 3.43835 28.9626 3.38425C28.844 3.33014 28.7158 3.30063 28.5856 3.29749C28.4553 3.29435 28.3258 3.31765 28.2048 3.36597C28.0838 3.4143 27.9739 3.48665 27.8817 3.57866L27.8817 3.5787L27.1031 4.35348C27.0176 4.43906 26.9695 4.55509 26.9695 4.67607C26.9695 4.79705 27.0176 4.91308 27.1031 4.99866L27.8169 5.71117L27.817 5.71128C27.8594 5.75388 27.9098 5.78769 27.9653 5.81076C28.0208 5.83382 28.0803 5.8457 28.1404 5.8457C28.2005 5.8457 28.2601 5.83382 28.3156 5.81076C28.3711 5.78769 28.4215 5.75388 28.4639 5.71128L28.464 5.71112L29.2231 4.95582L29.2232 4.95576M29.2751 3.61233L29.31 3.58049C29.6763 3.98146 29.6404 4.60588 29.2565 4.98923L29.2232 4.95576M29.2751 3.61233C29.6232 3.9933 29.5905 4.58896 29.2232 4.95576M29.2751 3.61233L29.2232 4.95576M14.1656 17.2702L14.1657 17.2701L25.5288 5.9272C25.6261 5.83012 25.758 5.77561 25.8954 5.77561C26.0329 5.77561 26.1647 5.83009 26.262 5.92712C26.2621 5.92714 26.2621 5.92717 26.2621 5.9272L26.8882 6.55644C26.8883 6.55646 26.8883 6.55649 26.8883 6.55652C26.9845 6.65374 27.0384 6.78495 27.0384 6.92168C27.0384 7.05842 26.9844 7.18964 26.8883 7.28685C26.8883 7.28688 26.8882 7.28691 26.8882 7.28693L15.5454 18.6511L15.5454 18.6512C15.4825 18.7143 15.4044 18.7602 15.3186 18.7845L15.3186 18.7844L15.3164 18.7851L13.7531 19.3105C13.719 19.3204 13.6828 19.3211 13.6483 19.3123L13.6367 19.3581L13.6483 19.3123C13.6136 19.3035 13.582 19.2855 13.5566 19.2602C13.5313 19.2349 13.5133 19.2032 13.5045 19.1685C13.4958 19.134 13.4964 19.0979 13.5064 19.0638L14.0317 17.4991L14.0317 17.4991L14.0324 17.4969C14.0566 17.4112 14.1025 17.3331 14.1656 17.2702Z" fill="black" stroke="#4C4850" stroke-width="0.0944196" />
                                <path d="M24.6762 12.4188L17.0037 20.1064C16.7071 20.4037 16.3427 20.6243 15.9418 20.7491L14.3114 21.2948C13.9245 21.4041 13.5155 21.4082 13.1264 21.3068C12.7374 21.2053 12.3825 21.002 12.0982 20.7177C11.8139 20.4334 11.6105 20.0785 11.5091 19.6894C11.4076 19.3004 11.4118 18.8913 11.521 18.5044L12.0668 16.8741C12.1912 16.4733 12.4114 16.1089 12.7082 15.8122L20.3958 8.13841C20.4663 8.06802 20.5143 7.97832 20.5338 7.88064C20.5533 7.78296 20.5434 7.6817 20.5053 7.58966C20.4672 7.49763 20.4027 7.41894 20.3199 7.36357C20.2371 7.30819 20.1398 7.27861 20.0402 7.27856H6.90391C5.96902 7.27856 5.07242 7.64995 4.41136 8.31101C3.75029 8.97208 3.37891 9.86868 3.37891 10.8036V25.9107C3.37891 26.8456 3.75029 27.7422 4.41136 28.4033C5.07242 29.0643 5.96902 29.4357 6.90391 29.4357H22.011C22.9459 29.4357 23.8425 29.0643 24.5036 28.4033C25.1647 27.7422 25.536 26.8456 25.536 25.9107V12.7744C25.536 12.6748 25.5064 12.5775 25.451 12.4947C25.3957 12.4119 25.317 12.3474 25.2249 12.3093C25.1329 12.2712 25.0316 12.2613 24.934 12.2808C24.8363 12.3003 24.7466 12.3483 24.6762 12.4188Z" fill="black" />
                            </svg>
                            Edit You Profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;

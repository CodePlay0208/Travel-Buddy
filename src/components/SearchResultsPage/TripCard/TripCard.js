import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TripCard.css'; // Import your styles

const TripCard = ({ name, profileImg, startDate, endDate, startLocation, endLocation, totalMembers, age, gender, description, destinationImages }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand' // Enable lazy loading
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="tripCard__container">
      <div className="tripCard__leftContainer">
        <Slider {...settings}>
          {destinationImages.map((img, index) => (
            <div key={index} className="tripCard__carouselItem">
              <img src={img} alt={`Destination ${index + 1}`} className="tripCard__destinationImg" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="tripCard__rightContainer">
        <div className="tripCard__profileSection">
          <img src={profileImg} alt={`${name}'s profile`} className="tripCard__profileImg" />
          <h3 className="tripCard__username">{name}</h3>
        </div>
        <div className="tripCard__details">
          <div className="tripCard__separatorLine"></div>
          <div className="tripCard__locations">
            <div className="tripCard__detailsLeft">
              <div className="tripCard__dateLabel">Start date: {startDate}</div>
              <div className="tripCard__separatorLine"></div>
              <div className="tripCard__dateLabel">End date: {endDate}</div>
            </div>
            <div className="tripCard-details">
            <div><svg width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="39" cy="20" rx="9" ry="3" fill="#D9D9D9"/>
<path d="M39.5005 19.5C39.5005 19.5 28.9591 26.7081 23.0004 29C16.5005 31.5001 7.48402 32.7742 2.50047 29C-0.394968 26.8072 0.608648 16.2334 3.00042 13.5C9.1256 6.49995 8.00051 8.50014 12.0004 6.5C17.5005 3.74971 21.7234 2.66112 25.0003 5.5C27.5776 7.73292 30.7963 12.5564 26.5005 19.0001C22.2047 25.4437 33.0005 31 29.0005 38C25.0005 45 19.3695 38.819 15.0005 43.5001C8.00049 51.0001 14.0192 55.9037 16.5005 57.0001C20.0095 58.5506 28.1805 58.147 32.0005 58.5001C34.1392 58.6978 35.8617 58.6978 38.0005 58.5001" stroke="black" stroke-dasharray="2 2"/>
<path d="M39.3695 66.0502L41.3795 61.3802L41.8195 60.3402C41.8995 60.1802 42.1095 60.0402 42.2895 60.0402L45.3495 60.0402C46.3095 60.0402 47.4495 59.3302 47.8895 58.4702C48.0395 58.1702 48.0395 57.8102 47.8895 57.5102C47.4495 56.6602 46.2995 55.9502 45.3395 55.9502L42.2795 55.9502C42.0995 55.9502 41.8895 55.8102 41.8095 55.6502L39.3595 49.9502C39.0995 49.3202 38.3095 48.8102 37.6295 48.8102L36.3095 48.8102C35.4595 48.8102 35.0395 49.4502 35.3795 50.2402L37.5395 55.2502C37.7095 55.6402 37.4995 55.9602 37.0695 55.9602L35.9595 55.9602L34.1595 55.9602C33.9295 55.9602 33.5995 55.8302 33.4395 55.6702L31.1095 53.3502C30.8695 53.1102 30.3995 53.0002 30.0594 53.1102L28.6995 53.5602C28.1095 53.7402 27.8295 54.4102 28.1095 54.9602L30.1095 57.3402C30.4195 57.7002 30.4195 58.2902 30.1095 58.6502L28.1095 61.0302C27.8395 61.5802 28.1095 62.2502 28.6995 62.4502L30.0594 62.9002C30.3894 63.0102 30.8695 62.9002 31.1095 62.6602L33.4395 60.3402C33.5995 60.1702 33.9295 60.0402 34.1595 60.0402L37.0695 60.0402C37.4995 60.0402 37.6995 60.3502 37.5395 60.7502L35.3795 65.7602C35.0395 66.5502 35.4595 67.1902 36.3095 67.1902L37.6295 67.1902C38.3095 67.1902 39.0995 66.6802 39.3695 66.0502Z" fill="#0AE0E0"/>
<path d="M39.2232 0C35.2338 0 32 3.11852 32 6.96981C32 10.8211 39.2232 20.0199 39.2232 20.0199C39.2232 20.0199 46.4429 10.8211 46.4429 6.96981C46.4429 3.11852 43.2125 0 39.2232 0ZM39.2232 11.5845C36.5825 11.5845 34.443 9.51916 34.443 6.96981C34.443 4.42046 36.5825 2.35508 39.2232 2.35508C41.8639 2.35508 44.0033 4.42046 44.0033 6.96981C44.0033 9.51916 41.8639 11.5845 39.2232 11.5845Z" fill="#E82327"/>
</svg>
</div>
            <div className='tripCard__detailsRight'>
              
              <div className="tripCard__dateLabel">Start Location: {startLocation}</div>
              <div className="tripCard__separatorLine"></div>
              <div className="tripCard__dateLabel">End Location: {endLocation}</div>
              <div className="tripCard__separatorLine"></div>
            </div>
            </div>
          </div>
          <div className="tripCard__description">Desc. {truncateDescription(description, 50)}</div>
        </div>
        <div className="tripCard__chatNow">
          <button className="tripCard__chatButton">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.558 7.10815C20.8891 6.43923 20.2202 5.77031 19.3729 5.36897C18.3472 4.92302 17.1877 5.01221 16.1621 5.32437C15.0918 5.63653 14.1553 6.21626 13.1742 6.75139C10.454 8.3122 7.73372 9.9176 4.96886 11.4784C4.38913 11.8352 3.76481 12.1919 3.36346 12.727C2.56076 13.7527 2.60536 15.2243 3.14049 16.3838C3.67562 17.5432 4.6567 18.4351 5.68237 19.1932C6.70804 19.9513 7.77831 20.6648 8.71479 21.5567C9.56209 22.404 10.231 23.4297 11.0783 24.277C13.6202 26.8189 17.8566 27.5324 21.0674 25.927C23.4309 24.7675 25.0809 22.5824 26.6863 20.4865C27.8458 18.9703 29.0498 17.2757 29.0498 15.3581C29.0498 13.4851 27.8458 11.8797 26.1512 11.1662C24.3228 10.4973 22.9404 8.53517 21.558 7.10815Z" fill="url(#paint0_linear_167_296)" />
              <path d="M17.7234 11.9688V14.6891C17.7234 15.581 16.9653 16.2945 16.0734 16.2945H10.187L7.33293 18.3458L7.24374 16.2945C6.35185 16.2945 5.59375 15.5364 5.59375 14.6445V9.47153C5.59375 8.53504 6.30726 7.82153 7.24374 7.82153H13.7099" stroke="black" stroke-width="0.632349" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.7237 14.7338H20.9345C21.6926 14.7338 22.2724 15.3581 22.2724 16.1162V20.3973C22.2724 21.1554 21.648 21.7797 20.9345 21.7797L20.8453 23.4297L18.4818 21.7351H13.621C12.8629 21.7351 12.2832 21.1108 12.2832 20.3527V16.2946M24.1453 11.9689L24.0561 14.0203L21.2021 11.9689H15.3156C14.4237 11.9689 13.6656 11.2108 13.6656 10.3189V5.14596C13.6656 4.20948 14.3791 3.49597 15.3156 3.49597H24.1899C25.0818 3.49597 25.8399 4.25408 25.8399 5.14596V10.3189C25.8399 11.2554 25.0818 11.9689 24.1453 11.9689Z" stroke="black" stroke-width="0.632349" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.7237 14.7338H20.9345C21.6926 14.7338 22.2724 15.3581 22.2724 16.1162V20.3973C22.2724 21.1554 21.648 21.7797 20.9345 21.7797L20.8453 23.4297L18.4818 21.7351H13.621C12.8629 21.7351 12.2832 21.1108 12.2832 20.3527V16.2946L17.7237 14.7338Z" fill="#FF9D23" stroke="#0000DB" stroke-width="0.539592" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.2715 17.677H19.285M15.2715 19.4162H19.285" stroke="white" stroke-width="0.539592" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.7234 11.9688V14.6891C17.7234 15.581 16.9653 16.2945 16.0734 16.2945H10.187L7.33293 18.3458L7.24374 16.2945C6.35185 16.2945 5.59375 15.5364 5.59375 14.6445V9.47153C5.59375 8.53504 6.30726 7.82153 7.24374 7.82153H13.7099L17.7234 11.9688Z" fill="#9495FA" stroke="#0000DB" stroke-width="0.539592" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24.1457 11.9689L24.0565 14.0203L21.2025 11.9689H15.316C14.4241 11.9689 13.666 11.2108 13.666 10.3189V5.14596C13.666 4.20948 14.3795 3.49597 15.316 3.49597H24.1903C25.0822 3.49597 25.8403 4.25408 25.8403 5.14596V10.3189C25.8403 11.2554 25.0822 11.9689 24.1457 11.9689Z" fill="#F86C66" stroke="#0000DB" stroke-width="0.539592" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.1895 6.7959H22.3178M17.1895 8.71346H22.3178" stroke="white" stroke-width="0.539592" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.9989 1.35543L26.0625 0.418945L25.2598 1.22164" stroke="#FF9D23" stroke-width="0.669362" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.74016 11.9243L1.89287 11.077L1.13477 11.8351" stroke="#0000DB" stroke-width="0.611835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28.4258 5.01221L29.6744 6.21626" stroke="#9495FA" stroke-width="0.669362" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.18555 4.96753L4.52338 6.26077M27.7571 22.4485L29.0949 23.7864" stroke="#FF4B4D" stroke-width="0.611835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.85547 21.7797L5.1933 23.1175" stroke="#FF9D23" stroke-width="0.611835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_167_296" x1="15.8847" y1="5.08891" x2="15.8847" y2="26.822" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.25" />
                  <stop offset="1" stop-color="#FED3BE" />
                </linearGradient>
              </defs>
            </svg>

            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;

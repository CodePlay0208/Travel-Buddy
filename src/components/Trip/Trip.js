import React from 'react'
import "./Trip.css";

const Trip = ({trip})=>{
   
  return (
    <div className="cards">

    <a href="" className="card">
      <img src={trip.destinationImages} className="card__image" alt={trip.startLocation} />
      <div className="card__overlay">
        <div className="card__header">
          
          <div className="card__header-text">

          
          <p><strong>From:</strong>{trip.startLocation}</p>
          <p><strong>To:</strong> {trip.endLocation}</p>
          </div>
          <div className='card__user'>
            
            <div className='card__profile'>
              <img src={trip.profileImg} alt="" />
            </div>
            <p>{trip.name}</p>
          </div>
        </div>
        <div className="card__description"><p><strong>No. of Members:</strong>{trip.totalMembers}</p>
          <p><strong>Age:</strong>{trip.age}</p>
          <p><strong>Sex:</strong> {trip.sex}</p>
          <p className='description'><strong>Description:</strong>{trip.description} </p>
          <button className="chat-now-btn" role="button">Chat Now</button>
          </div>
      </div>
    </a>      
  
  
</div>

  )
}

export default Trip

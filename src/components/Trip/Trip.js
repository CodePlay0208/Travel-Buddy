import React from 'react'
import "./Trip.css";

const Trip = ({trip})=>{
   
  return (
    <div className="cards">

    <a href="" class="card">
      <img src={trip.image} class="card__image" alt={trip.startLocation} />
      <div class="card__overlay">
        <div class="card__header">
          
          <div class="card__header-text">
          <p><strong>From:</strong>{trip.startLocation}</p>
          <p><strong>To:</strong> {trip.endLocation}</p>
          </div>
        </div>
        <p class="card__description"><p><strong>No. of Members:</strong>{trip.totalMembers}</p>
          <p><strong>Age:</strong>{trip.age}</p>
          <p><strong>Sex:</strong> {trip.sex}</p>
          <p className='description'><strong>Description:</strong>{trip.description} </p>
          <button className="chat-now-btn" role="button">Chat Now</button>
          </p>
      </div>
    </a>      
  
  
</div>

  )
}

export default Trip


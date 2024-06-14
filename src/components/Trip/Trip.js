import React from 'react'
import "./Trip.css";

const Trip = ({trip})=>{
   
  return (
    <div className="card">
  <div className="card-header">
    <h3>Travel Details</h3>
  </div>
  <div className="card-body">
    <p><strong>From:</strong>{trip.startLocation}</p>
    <p><strong>To:</strong> {trip.endLocation}</p>
    <p><strong>No. of Members:</strong>{trip.totalMembers}</p>
    <p><strong>Age:</strong>{trip.age}</p>
    <p><strong>Sex:</strong> {trip.sex}</p>
    <p className='description'><strong>Description:</strong>{trip.description} </p>
    <button className="chat-now-btn" role="button">Chat Now</button>
  </div>
</div>

  )
}

export default Trip


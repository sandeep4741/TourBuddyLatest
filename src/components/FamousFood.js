import React from 'react';
import './place.css';

const FamousFood = ({ famousFood, onBackButtonClick }) => {
  return (
    <center className="place-container">
      <div className="place-card">
        <div className="place-image">
          <img src={famousFood.image} alt={famousFood.name} />
        </div>
        <div className="place-details">
          <h2>{famousFood.name}</h2>
          <p style={{textAlign:'justify'}}>{famousFood.description}</p>
        </div>
      </div>
      <div className='center'>
        <button onClick={onBackButtonClick} style={{borderRadius:'10px'}}>
            Back
        </button>
      </div>
    </center>
  );
};

export default FamousFood;
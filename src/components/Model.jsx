import React from 'react'
import MapImg from '../assets/map.jpeg'
import StarIcon from '../assets/star.png'

const Model = ({hideModal}) => {
  return (
    <div className='modal-container'>
        <div className="model-wrapper">
            <div className="model-header">
                <h2>WeatherApp</h2>
                <p>Version 1.5.0</p>
            </div>
            <div className="model-content">
                <div className="model-body">
                    <h3>App Features</h3>
                    <ul>
                    <li>Get real time weather with Geolocation.</li>
                    <li>Search weather by city.</li>
                    <li>Forecast 5 days / 3 hours.</li>
                    <li>Air Pollution from Geolocation.</li>
                    <li>Share current location weather with friends.</li>
                    </ul>
                </div>
                <img src={MapImg} alt="map" />
            </div>

            <div className="modal-enphasis">
                <img src={StarIcon} alt="star icon" />
                <p>Hope you enjoy this version.</p>
            </div>

            <div className="model-button">
                <button onClick={hideModal}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Model
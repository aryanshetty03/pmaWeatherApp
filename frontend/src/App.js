import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  // Fetch weather for city
  const getWeather = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/weather?city=${city}`);
      setWeather(res.data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  // Fetch 5-day forecast for city
  const getForecast = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/forecast?city=${city}`);
      setForecast(res.data);
      setError('');
    } catch (err) {
      setError('City not found');
      setForecast(null);
    }
  };

  // Fetch weather for current location using Geolocation API
  const getLocationWeather = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const res = await axios.get(`http://127.0.0.1:5000/weather_by_coords?lat=${lat}&lon=${lon}`);
          setWeather(res.data);
          setError('');
        } catch (err) {
          setError('Unable to get weather for your location');
        }
      });
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Format date for 5-day forecast
  const formatDate = (dt_txt) => {
    const date = new Date(dt_txt);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  // Function to open and close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <h1>Weather App by Aryan Shetty</h1>
      <button className="info-button" onClick={toggleModal}>Info</button>
      
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
      />
      <div className="button-group">
        <button onClick={getWeather}>Get Weather</button>
        <button onClick={getForecast}>Get 5-Day Forecast</button>
        <button onClick={getLocationWeather}>Get Weather for My Location</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>Current Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Conditions: {weather.weather[0].description}</p>
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
            alt={weather.weather[0].description}
          />
        </div>
      )}

      {forecast && (
        <div className="forecast-container">
          <h2>5-Day Forecast</h2>
          <div className="forecast-list">
            {forecast.list.filter((item, index) => index % 8 === 0).map((item, index) => (
              <div key={index} className="forecast-item">
                <h3>{formatDate(item.dt_txt)}</h3>
                <p>Temperature: {item.main.temp} °C</p>
                <p>Humidity: {item.main.humidity} %</p>
                <p>Conditions: {item.weather[0].description}</p>
                <img 
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                  alt={item.weather[0].description}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>X</button>
            <h2>Product Manager Accelerator - Overview</h2>
            <p>The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career...</p>
            <p>
              Learn product management for free today on our YouTube channel: 
              <a href="https://www.youtube.com/c/drnancyli?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
            </p>
            <h3>Interested in PM Accelerator Pro?</h3>
            <p>
              Step 1️⃣: Attend the Product Masterclass to learn more about the program details, price, different packages, and stay until the end to get FREE AI Course. <br />
              <a href="https://www.drnancyli.com/masterclass" target="_blank" rel="noopener noreferrer">Masterclass Link</a>
            </p>
            <p>
              Step 2️⃣: Reserve your early bird ticket and submit an application to talk to our Head of Admission. <br />
              Step 3️⃣: Successful applicants join our PMA Pro community to receive customized coaching!
            </p>
            <p>
              Website: <a href="http://www.drnancyli.com" target="_blank" rel="noopener noreferrer">www.drnancyli.com</a> <br />
              Phone: +1 6176106855 <br />
              Industry: E-Learning Providers <br />
              Company size: 2-10 employees <br />
              Headquarters: Boston, MA
            </p>
            <p>Founded: 2020</p>
            <h3>Specialties:</h3>
            <ul>
              <li>Product Management</li>
              <li>Product Manager</li>
              <li>Product Management Training</li>
              <li>Product Management Certification</li>
              <li>Product Lead</li>
              <li>Product Executive</li>
              <li>Associate Product Manager</li>
              <li>Product Management Coaching</li>
              <li>Product Manager Resume</li>
              <li>Product Management Interview</li>
              <li>VP of Product</li>
              <li>Director of Product</li>
              <li>Chief Product Officer</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

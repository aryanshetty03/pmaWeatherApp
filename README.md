# Weather App for PM Accelerator

This project is a full-stack weather application providing real-time weather details for any city, a 5 day forecast and a geolocation-based feature to inform you of the weather at your location. The app was built using a Python, OpenWeather APIs and Geolocation API for the backend, React.js, HTML and CSS for the front end, and Flask connecting the 2. 

## Features

 - **Real Time Weather**: Displays current weather data such as temperature, humidity, wind speed, and conditions (e.g., clear sky, rain, clouds).
 - **5-Day Forecast**: Provides a forecast for the next 5 days, showing daily weather trends.
 - **Geolocation**: Fetches weather data based on the user's current location.
 - **Interactive UI**: Displays weather icons and an info modal for better user experience.
 - **Responsive Design**: The app adapts well across different screen sizes (desktop, tablet, mobile).

## Tech Stack

### Frontend
 - **React.js**: For building a dynamic and responsive user interface.
 - **Axios**: For making HTTP requests to the backend and third-party APIs.
 - **CSS**: For styling the layout, making the app visually appealing.
 - **HTML**: For structuring the frontend components.

### Backend
 - **Flask**: As a lightweight Python-based web framework to handle API requests.
 - **Flask-CORS**: For handling cross-origin requests between the frontend and backend.
 - **OpenWeatherMap API**: To fetch real-time weather data and forecasts.
  

## Project Installation Requirements

In the project directory, you can run:

### `npm install axios`

To install Axios to run http requests,
and then head into the backend folder.
### `cd backend`
Here you can create a virtual environment and install dependencies:
### `python3 -m venv venv`
### `source venv/bin/activate`
### `pip install -r requirements.txt`
### `python app.py`
This will run the backend at http://127.0.0.1:5000.


Then you can head into the frontend either in another terminal or any way of your choice
### `cd frontend`
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

The following step should not be necessary but just to ensure that axios is set up or in case it was not
you can run 
### `npm install axios` 
in the front end folder in case there are any issues.

## Demo - [My Demo](https://drive.google.com/file/d/1y70INN0hMAdb2s6g1lExZrG2ryBmdSF0/view?usp=sharing)
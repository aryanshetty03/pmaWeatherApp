from flask import Flask, jsonify, request
import requests
import geocoder
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = '98b90f1171a274572387fa3c4a8d6c3f'

# Get weather by city
@app.route('/weather', methods=['GET'])
def weather_by_city():
    city = request.args.get('city')
    print(f"City parameter received: {city}")
    
    if not city:
        return jsonify({'error': 'City parameter is missing'}), 400
    
    weather_data = get_weather(city)
    
    if weather_data:
        return jsonify(weather_data)  # Sending the data as JSON
    else:
        print(f"No weather data found for city: {city}")
        return jsonify({'error': 'City not found'}), 404



def get_weather(city):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric'
    response = requests.get(url)
    
    print(f"Requesting weather for: {city}")
    print(f"URL: {url}")
    print(f"API Response Status Code: {response.status_code}")
    print(f"API Response Data: {response.text}")

    if response.status_code == 200:
        return response.json()
    else:
        return None

@app.route('/forecast', methods=['GET'])
def forecast_by_city():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is missing'}), 400
    
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    
    if response.status_code == 200:
        forecast_data = response.json()
        return jsonify(forecast_data)
    else:
        return jsonify({'error': 'City not found'}), 404


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS for handling cross-origin requests
import requests

app = Flask(__name__)
CORS(app)  # Enabling CORS for all routes/browser satisfaction

API_KEY = '98b90f1171a274572387fa3c4a8d6c3f'

#Input location Weather
@app.route('/weather', methods=['GET'])
def weather_by_city():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is missing'}), 400

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)

    if response.status_code == 200: # success 
        weather_data = response.json()
        return jsonify(weather_data)
    else:
        return jsonify({'error': 'City not found'}), 404

#5 day forecast 
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

#User Geolocation Weather
@app.route('/weather_by_coords', methods=['GET'])
def weather_by_coords():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if not lat or not lon:
        return jsonify({'error': 'Coordinates are missing'}), 400

    url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    response = requests.get(url)

    if response.status_code == 200:
        weather_data = response.json()
        return jsonify(weather_data)
    else:
        return jsonify({'error': 'Weather data not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)


# Weather App Project

This project is a weather app built using React and Redux that provides real-time weather information, including current weather, 5-day forecast, and air pollution data. The app utilizes the OpenWeatherMap API to fetch weather data based on geolocation or city search.
<img width="1434" alt="image1" src="https://github.com/DevShahmeer/weather-app/assets/108333592/683dea37-6c67-4c75-a6a7-12bc194cf0c6">

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)

## Features

- Get real-time weather data based on geolocation or city search.
- View current weather conditions, 5-day forecast, and air pollution information.
- Share current location weather with friends through a shareable link.
- Informative welcome modal with app features.
- Search weather by city name.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/DeShahmeer/weather-app.git
   cd weather-app
   ```

2. Install the required dependencies using Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the project root and add your OpenWeatherMap API key:

   ```env
   VITE_REACT_APP_API_KEY=your-api-key
   ```

## Usage

1. Run the development server using Yarn:

   ```bash
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the app.

3. Use the search bar to enter a city name and view its weather information.

## API Key

To use the OpenWeatherMap API, you need an API key. You can obtain a free API key by following these steps:

1. Visit the [OpenWeatherMap website](https://openweathermap.org/) and sign up for an account.
2. Once logged in, navigate to the [API Keys](https://home.openweathermap.org/api_keys) section.
3. Create a new API key and copy it.
4. Paste the API key into the `.env` file as shown in the [Installation](#installation) section.

## Contributing

Contributions to this project are welcome! If you find any bugs or want to add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please make sure to follow the [code of conduct](CODE_OF_CONDUCT.md) and [contribution guidelines](CONTRIBUTING.md) when contributing.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy exploring the weather app! If you have any questions or need assistance, please don't hesitate to reach out.

[Live Demo](https://your-weather-app-demo-link.com) | [GitHub Repository](https://github.com/your-username/weather-app)

---

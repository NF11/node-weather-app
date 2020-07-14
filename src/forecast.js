const KEYWEATHER = "bcc93563dc8bf54437d6996d861d876c";
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  request(
    {
      url:
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        encodeURIComponent(latitude) +
        "&lon=" +
        encodeURIComponent(longitude) +
        "&units=metric" +
        "&appid=" +
        KEYWEATHER,
      json: true,
    },
    (error, response) => {
      if (error) {
        callback("connection impossible au service ");
      } else if (response.body.error) {
        callback("impossible de trouver votre region ");
      } else {
        callback(undefined, {
          temp: response.body.current.temp,
          humidity: response.body.current.humidity,
          description: response.body.current.weather[0].description,
        });
      }
    }
  );
};

module.exports = forecast;

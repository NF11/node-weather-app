const request = require("request");
const KEYGOE =
  "pk.eyJ1IjoibmZkeiIsImEiOiJja2NpdTRlMjYwcXB4MnRvM3k5ZnJuM2puIn0.abz4w491poBPoH3TgaUlMA";

const geoCode = (address, callback) => {
  const urlGeo =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=" +
    KEYGOE;
  request(
    {
      url: urlGeo,
      json: true,
    },
    (error, response) => {
      if (error) {
        callback("connection impossible au service");
      } else if (response.body.features.length === 0) {
        callback("impossible de trouver votre region");
      } else {
        callback(undefined, {
          location: response.body.features[0].place_name,
          longitude: response.body.features[0].center[0],
          latitude: response.body.features[0].center[1],
        });
      }
    }
  );
};

module.exports = geoCode;

import {createServer} from "http";
import _lodash from "lodash";
import {ALLOWED_APIS} from "./constants/endpoint.js";
import {getMultipleCities, getForecast, getCurrentWeather} from "./service.js";
const {GET_CURRENT_WEATHER, GET_FORECAST, GET_MULTIPLE_WEATHER} = ALLOWED_APIS;
const {toLower, isEmpty} = _lodash;

const requestHandler = ({req, res, requestUrl, requestObject}) => {
  const {cities = [], city = "", days = 1} = requestObject;
  switch (requestUrl) {
    case GET_MULTIPLE_WEATHER:
      if (cities.length > 0) {
        getMultipleCities({res, cities});
      } else {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "atleast one city is required"}));
      }
      break;

    case GET_FORECAST:
      if (isEmpty(city)) {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "city cannot be empty"}));
      } else if (days < 1 || days > 10) {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "days should be between 1-10"}));
      } else {
        getForecast({res, city, days});
      }
      break;

    case GET_CURRENT_WEATHER:
      if (isEmpty(city)) {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "city cannot be empty"}));
      } else {
        getCurrentWeather({res, city});
      }
      break;
  }
};

const server = createServer((req, res) => {
  const requestUrl = toLower(req.url);
  if (
    [GET_CURRENT_WEATHER, GET_FORECAST, GET_MULTIPLE_WEATHER].includes(
      requestUrl
    )
  ) {
    if (req.method == "POST") {
      const chunks = [];
      req.on("data", function (data) {
        chunks.push(data);
      });
      req.on("end", async function () {
        const data = Buffer.concat(chunks);
        const stringData = data.toString();
        const requestObject = JSON.parse(stringData);
        requestHandler({req, res, requestUrl, requestObject});
      });
    }
  } else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Invalid Url"}));
  }
});

server.listen(8080);
console.log("server running on port 8080");

const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=0d397640-a64b-11ec-85c7-cf3afe0c863e`)
};

const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
}

const nextIssTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes, nextIssTimesForMyLocation}
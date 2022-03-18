const {fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes, nextIssTimesForMyLocation} = require('./iss_promised');

const printFlyTimes = function(flyTimes) {
  for (const time of flyTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${date} and it will last ${duration}`);
  }
}

nextIssTimesForMyLocation()
  .then((flyTimes) => {
    printFlyTimes(flyTimes)
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message)
  });
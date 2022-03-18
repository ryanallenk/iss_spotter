const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("1234", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   } else {
//     console.log("It worked! Returned coordinates:", data);
//   }
// });
// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' }

// fetchISSFlyOverTimes(exampleCoords, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error)
//     return;
//   }
//   console.log("It worked! Returned fly over times:", data)
// })
const printFlyTimes = function(flyTimes) {
  for (const time of flyTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${date} and it will last ${duration} seconds`);
  }
}


nextISSTimesForMyLocation((error, flyTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printFlyTimes(flyTimes)
});

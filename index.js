const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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
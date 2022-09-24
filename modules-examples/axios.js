const axios = require('axios');

// Make a request for the best Space site out there
axios.get('https://rocketdownrange.com')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log("\n Hooplah")
  });

/*
Axios is a simple promise based HTTP client for the browser and node.js. 
Axios provides a simple to use library in a small package with a very extensible interface.

*/
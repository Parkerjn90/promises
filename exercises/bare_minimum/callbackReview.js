/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // readfile at filepath, pass in callback function that accepts error and content
  fs.readFile(filePath, function (err, content) {
    //call back is a function that logs the error or logs the success and content requested
    if (err) {
      console.log(`fs.readFile failed: \n ${err}`);
      callback(err, null);
    } else {
      let arr = content.toString().replace(/\r\n/g, '\n').split('\n')[0];
      console.log(`fs.readFile successfully completed: \n ${arr}`);
      callback(null, arr);
    }
  });
};
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  console.log(url);
  request.get(url, function (err, response) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

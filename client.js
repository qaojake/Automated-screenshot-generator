var screenshotmachine = require('screenshotmachine');


var customerKey = '1ebfb4';
    secretPhrase = ''; //leave secret phrase empty, if not needed
    options = {
      //mandatory parameter
      url : 'https://www.google.com',
      // all next parameters are optional, see our website screenshot API guide for more details
      dimension : '1080xfull', // or "1366xfull" for full length screenshot
      device : 'desktop',
      format: 'png',
      cacheLimit: '0',
      delay: '200',
      zoom: '100'
    }


var apiUrl = screenshotmachine.generateScreenshotApiUrl(customerKey, secretPhrase, options);

//save screenshot as an image
var fs = require('fs');
var output = 'output.png';
screenshotmachine.readScreenshot(apiUrl).pipe(fs.createWriteStream(output).on('close', function() {
  console.log('Screenshot saved as ' + output);
}));


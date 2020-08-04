// homePageSpec.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '../tests/homePageSpec.js', 
        '../tests/scheduleFlightSpec.js'],
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            args: ['start-maximized'] 
        }
      }
  }
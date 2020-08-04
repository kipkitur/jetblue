// homePageSpec.js

//describe contains your scenario
describe('JetBlue Home Page', function() {

    var homePageTitle = 'Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue'
    var homePageUrl = 'https://www.jetblue.com/'


    // the it block contains a test case to check the page title
    it('should have a title', function() {
      browser.get(homePageUrl);
  
      expect(browser.getTitle()).toEqual(homePageTitle);
    });
  });
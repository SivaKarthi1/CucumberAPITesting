Feature: API Testing with Axios and Cucumber

  
  @smoke
  Scenario: Successfully get the of postalcode from the API
    Given I make a GET request to "https://api.zippopotam.us/us/98121"
    Then the response status code should be 200
    Then the response body have
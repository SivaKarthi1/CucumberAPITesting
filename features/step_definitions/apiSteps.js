const { Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
const postlData = require('../../support/data');
let response;


Given('I make a GET request to {string}', async function (url) {
  // Make the GET request using Axios
  response = await axios.get(url);
});

Then('the response status code should be {int}', function (statusCode) {

  // Assert that the response status code matches
  expect(response.status).to.equal(statusCode);
  
});

Then('the response body have', async function () {
  expect(response.data['post code']).to.equal(postlData['post code'])
  expect(response.data.country).to.equal(postlData.country);
  expect(response.data['country abbreviation']).to.equal(postlData['country abbreviation']);
  expect(response.data.places[0]['place name']).to.equal(postlData.places[0]['place name']);
  expect(response.data.places[0].longitude).to.equal(postlData.places[0].longitude);
  expect(response.data.places[0].state).to.equal(postlData.places[0].state);
  expect(response.data.places[0]['state abbreviation']).to.equal(postlData.places[0]['state abbreviation']);
  expect(response.data.places[0].latitude).to.equal(postlData.places[0].latitude);
  console.log(response.data);
});

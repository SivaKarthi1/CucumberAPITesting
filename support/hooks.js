const { Before, After } = require('@cucumber/cucumber');

// Run before each scenario
Before(() => {
  console.log('Before each test');
});

// Run after each scenario
After(() => {
  console.log('After each test');
});

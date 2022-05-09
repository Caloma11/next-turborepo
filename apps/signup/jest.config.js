const commons = require('config/commons/jest.config');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  ...commons
};

module.exports = createJestConfig(customJestConfig);

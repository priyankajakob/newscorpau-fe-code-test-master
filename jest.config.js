module.exports = {
  "testEnvironment": "jsdom",
   moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
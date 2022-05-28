module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/setupTest.js"
  ],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(styl|scss|css)$": "<rootDir>__mocks__/styleMock.js"
  },
};

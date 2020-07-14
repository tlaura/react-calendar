module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: ["<rootDir>/tests/setup.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupAfterEnv.js"],
  testMatch: ["**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["/.next/", "/node_modules/", "/coverage/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};

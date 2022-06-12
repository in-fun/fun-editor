/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  /*
  transform: {
    "^.+\\.[tj]s$": "ts-jest"
  },
  */
  "globals": {
    "ts-jest": {
      "tsconfig": '<rootDir>/tsconfig.json'
    }
  }
};
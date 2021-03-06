module.exports = {
  globalSetup: './tests/jest.setup.js',
  globalTeardown: './tests/jest.teardown.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/tests/__helpers'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['src/**/*.js'],
  watchPathIgnorePatterns: [
    '<rootDir>/node_nodules/',
    '<rootDir>/lib/',
    '<rootDir>/coverage/',
  ],
};

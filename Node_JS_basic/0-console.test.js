// 0-console.test.js
const displayMessage = require('./0-console');

test('logs the correct message', () => {
  // mock console.log
  console.log = jest.fn();

  displayMessage("Hello NodeJS!");

  expect(console.log).toHaveBeenCalledWith("Hello NodeJS!");
});

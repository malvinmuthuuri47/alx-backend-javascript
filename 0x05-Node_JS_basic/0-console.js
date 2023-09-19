function displayMessage(...messages) {
  const message = messages.join(' ');
  console.log(message);
}

module.exports = displayMessage;

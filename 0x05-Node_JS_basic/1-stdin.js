process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is ${name}\n`);

  // Check that input isn't coming from the terminal
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
  process.exit(0);
});

process.on('exit', () => {});

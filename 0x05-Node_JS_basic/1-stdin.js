const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

if (!process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is ${name}`);
    console.log('This important software is now closing');
    process.exit(0);
  });
} else {
  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
}

process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Starting interactive mode
process.stdin.on('readable', () => {
  const msg = process.stdin.read();

  if (msg) {
    process.stdout.write(`Your name is: ${msg}`);
  }
});
// Closing interactive mode
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

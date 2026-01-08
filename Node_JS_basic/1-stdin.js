process.stdout.write('Welcome to Holberton School, what is your name?\n')

process.stdin.on('data', (data) => {
    let name = data.toString().trim();
    console.log(`Your name is: ${name}`);
});

process.stdin.on('end' , () => {
    console.log('This important software is now closing');
});

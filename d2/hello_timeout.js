const sentence = 'hello there from lighthouse labs';

const typeWrite = (string) => {
  let timer = 0;

  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 50;
  }
  console.log("   ");
}
typeWrite(sentence);
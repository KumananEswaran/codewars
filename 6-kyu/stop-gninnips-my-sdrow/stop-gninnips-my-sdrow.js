function spinWords(string) {
  let arr = string.split(' ');
  let text = [];
  //TODO Have fun :)
​
  for (const word of arr) {
    if (word.length >= 5) {
      text.push(word.split('').reverse().join(''));
    } else {
      text.push(word);
    }
  }
​
  return text.join(' ');
}
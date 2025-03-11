function getMiddle(s) {
  //Code goes here!
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 === 0) {
      return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
    } else {
      return `${s[(s.length + 1) / 2 - 1]}`;
    }
  }
}
function accum(s) {
  return s
    .split('')
    .map((letter, index) => {
      return letter.toUpperCase() + letter.repeat(index).toLowerCase();
    })
    .join('-');
}
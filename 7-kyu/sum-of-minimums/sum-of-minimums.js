function sumOfMinimums(arr) {
  // your code here
  return arr.reduce(
    (accumulator, currentValue) => accumulator + Math.min(...currentValue),
    0
  );
}
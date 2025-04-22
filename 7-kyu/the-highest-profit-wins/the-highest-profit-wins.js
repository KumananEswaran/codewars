// sort the array
// return the first element and last element
​
function minMax(arr) {
  let array = arr.sort((a, b) => a - b);
  return [array[0], array[arr.length - 1]];
}
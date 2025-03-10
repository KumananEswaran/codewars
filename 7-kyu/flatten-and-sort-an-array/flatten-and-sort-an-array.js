"use strict";
​
function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let flatArray = [].concat(...array);
  return flatArray.sort((a, b) => a - b);
}
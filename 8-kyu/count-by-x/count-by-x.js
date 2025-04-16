// assign counter to start with 1
// let the counter add by 1
// run the counter until reaches n
// x multiply with counter
​
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
​
  return z;
}
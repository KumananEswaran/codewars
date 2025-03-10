function distinct(a) {
  let a1 = []
  for (const num of a) {
    if(!a1.includes(num)) {
      a1.push(num)
    }
  }
  return a1
}
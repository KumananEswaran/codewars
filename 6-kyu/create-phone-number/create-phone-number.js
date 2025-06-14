function createPhoneNumber(numbers) {
  let phone = '(';
​
  for (let i = 0; i < 3; i++) {
    phone += numbers[i];
  }
  phone += ') ';
​
  for (let i = 3; i < 6; i++) {
    phone += numbers[i];
  }
  phone += '-';
​
  for (let i = 6; i < 10; i++) {
    phone += numbers[i];
  }
​
  return phone;
}
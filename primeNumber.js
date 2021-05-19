const numb = 17;
function isPrime(number) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
let count = 0;
for (i = 2; ; i++) {
  const data = isPrime(i);
  if (data) {
    console.log(i);
    count += 1;
  }
  if (count === 10) {
    break;
  }
}

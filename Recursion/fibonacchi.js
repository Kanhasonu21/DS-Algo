function fib(l, r, n) {
  if (n < 1) {
    string += 'done';
    return;
  }
  string += `${l + r}->`;
  fib(r, l + r, n - 1);
  return string;
}
const [first, second] = [0, 1];
let string = `${first}->${second}->`;
console.log(fib(0, 1, 10));

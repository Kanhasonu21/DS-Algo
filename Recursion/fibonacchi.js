// function fib(l, r, n) {
//   if (n < 1) {
//     string += 'done';
//     return;
//   }
//   string += `${l + r}->`;
//   fib(r, l + r, n - 1);
//   return string;
// }
// const [first, second] = [0, 1];
// let string = `${first}->${second}->`;
// // console.log(fib(0, 1, 10));

// function run(fn, timer) {
//   setTimeout(fn, timer)();
// }
// function hello() {
//   console.log('hello');
// }
// 0 1 1 2 3
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));

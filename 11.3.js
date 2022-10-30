

function func1 (y) {
    return 2;
};
function sum (func, y) {
  return func(y) + y;
};
console.log(sum(func1, 5));


function iterativeFibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let nextIteration;
  let arr = [];

  nextIteration = n1 + n2;
  arr.push(nextIteration);

  while (nextIteration <= n) {
    n1 = n2;
    n2 = nextIteration;
    nextIteration = n1 + n2;
    arr.push(nextIteration);
  }
  console.log(arr);
}

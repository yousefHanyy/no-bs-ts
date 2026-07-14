const arr: number[] = [1, 2, 3];
const res = arr.forEach((element) => {
  console.log(element + 1);
});

type genericCallback = <T>(input: T) => T;
function forEachUsingReduce<genericCallback>(callback: genericCallback) {}

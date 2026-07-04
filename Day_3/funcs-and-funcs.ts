type AddType = (val: number) => number;

function createAdder(num: number): AddType {
  return (val: number) => val + num;
}

const addTwo = createAdder(2);
console.log(addTwo(50));
console.log(addTwo(52));
console.log(addTwo(54));

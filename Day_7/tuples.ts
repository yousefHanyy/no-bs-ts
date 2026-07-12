type coord = [x: number, y: number, z: number];

function addCoord(ar1: coord, ar2: coord, ar3: coord): coord {
  return [
    ar1[0] + ar2[0] + ar3[0],
    ar1[1] + ar2[1] + ar3[1],
    ar1[2] + ar2[2] + ar3[2],
  ];
}

console.log(addCoord([1, 2, 3], [1, 2, 3], [1, 2, 3]));

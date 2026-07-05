//! Interview question about function overloading:

interface Coordinate {
  x: number;
  y: number;
}

function parseCoord(obj: Coordinate): Coordinate;
function parseCoord(x: number, y: number): Coordinate;
function parseCoord(str: string): Coordinate;
function parseCoord(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object" && arg1 !== null) {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    arg1.split(",").forEach((str) => {
      const [key, value] = str.split(":");
      if (key === "x" || key === "y") {
        coord[key] = parseInt(value ?? "0", 10);
      }
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoord({ x: 10, y: 20 }));
console.log(parseCoord(10, 20));
console.log(parseCoord("x:10,y:22"));

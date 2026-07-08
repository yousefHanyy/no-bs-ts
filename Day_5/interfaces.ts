import houses from "./houses.ts";
// console.log(houses);
interface House {
  name: string;
  planets: string | string[];
  //! wrong(1): either a string or a string[]
}

interface HouseWithID extends House {
  id: number;
}
//?---------My Try-----------------
//* sliced to be split next ():
//   const stringifiedHouse: string = JSON.stringify(houses);
//   const stringifiesHouseArray: string = stringifiedHouse.slice(
//     1,
//     stringifiedHouse.length - 2,
//*    stringifiedHouse.length-2 here because of the last curly braces leadaing to an empty string being counted later in the split
//   );

//* splitting on '}':
//   const splitHouseArray: string[] = stringifiesHouseArray.split("}");
//   let id = 1;
//   let arrayed = splitHouseArray.forEach((h) => Array(h));
//   console.log(arrayed);
//   const foundHouse = houses.find((elm) => elm.name === house);
//   return foundHouse?.planets;
//?----------------------------------------------------
//! wrong(2): could''ve used JSON.parse(houses) to change it to an array of houses
//! diff approach(1): Changed the house param to an input name to check on it to check if JSON parsing is needed
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean,
): HouseWithID[] {
  const house: House[] = typeof input === "string" ? JSON.parse(input) : input;
  //! NOTE TO SELF: If a callback function "body" is given as a param while calling it(like in the filter case we have down there in the console log), then use it in the body of the array method(like using array method filter with the body of the 'filter' param)
  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Corrino"),
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

// * ctrl+k then ctrl+i shows what a variable should be as a type if it isn't written:
let userName: string = "Yousef Hany";
let hasLoggedIn: boolean = true;
let myNumber: number = 10;
let regEx: RegExp = /foo/;

const names: string[] = userName.split(" ");
// generic types:
const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const person: Person = {
  first: "Yousef",
  last: "Hany",
};

// * Records<'key','value'>:
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

// * conditionals and for loops don't have a special syntax since typescript infers most of the variable declarations.

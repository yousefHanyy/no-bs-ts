let hasLoggedIn: boolean = true;
let userName: string = "yousef";
let myRegex: RegExp = /foo/;
// ---
const names: string[] = userName.split(" ");

interface Person {
  firstName: string;
  lastName: string;
}

const myObject: Person = {
  firstName: "Yousef",
  lastName: "Hany",
};

const ids: Record<number, string> = {
  10: "Y",
  20: "O",
};
ids[30] = "U";

const out = [1, 2, 3].map((n) => n * 10);

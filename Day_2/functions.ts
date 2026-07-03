function addNums(a: number, b: number): number {
  return a + b;
}

export default addNums;

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data has been fetched from ${url} !`);

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join("-")}`;
}

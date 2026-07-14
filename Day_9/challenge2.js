const arr = [1, 2, 3];
const res = arr.forEach((element) => {
  //!(second discovery) We loop around the reduce first then:
  //!1- Taking the element and making it an array to be able to use reduce.
  //!2- Then doing the operation on the current value starting from 0 as an initial, since the whole play is performing the operations on 'current'.

  Array.of(element).reduce(
    (acc, current) => console.log(current + "yousef"),
    0,
  );
  //   Array(element).reduce((acc, current) => console.log(current));
  //   element.reduce((acc, current) => console.log(current));
});
// 2 ,3 ,4
// for (i = 0; i <= arr.length; i++) {
//   arr.reduce((acc, current) => console.log(current));
// }
//*(first note to self) should perform the operation on the 'current' value.
// arr.reduce((acc, current) => console.log(current), 0);
// ? My thought process of what should happen (till now):
// ?    1- Find a way to get from the callback function accepted as a param the input to it.
// ?    2- Change that input to an Array to be able to use the reduce function.
// ?    2- Then when making the reduce function. Any operations you do, do it on the 'current' value.

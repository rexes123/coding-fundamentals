// const array = ['a','b','c']

// array.forEach(el => console.log(el));
// const names = ['A', 'B', 'C']
// names.forEach(el => console.log(el))

// const numbers = [5, 4, 5];
// let sum = 0;

// const sumfunction = async (a, b) => a + b;

// numbers.forEach(async (numbers) => {
//     sum = await sumfunction(sum, numbers);
// });

// console.log(sum)

// const names = ["A", "B", "C"];
// const copyItem = [];

// //Before
// for (let i = 0; i < copyItem.length; i++){
//     copyItem.push(items[i]);
// }

// //After 
// names.forEach((name) =>{
//     copyItem.push(name);
// })


const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']

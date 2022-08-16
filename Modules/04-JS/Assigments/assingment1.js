// const jumpstarter = ['JIng Yong', 'Jun Hao', ' Nelson', 'CLifford', 'Chin Hong'];
// jumpstarter[5] = 'tahini'
// console.log(jumpstarter)

//Assigment 1
// function sum(numberArray){

// }

// console.log(sum([1, 2, 3, 4]) === 10)
// console.log(sum([-3, 5, 19, -6]) === 15)

// const array = [1,2,3,4,5,6];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array [i];
// }


//Assignement
const set1 = new Set([1,2,3,4]);//10
const set2 = new Set([-3, 5, 19, -6]);//15

let sum = 0;
set1.forEach(num => { 
    sum += num;
});

let sum1 = 0;
set2.forEach(num => {
    sum1 += num;
})

console.log(sum); 
console.log(sum1);

//Array length
// const name1 = ['JY', 'CH', 'CLI', 'Nel'];

// console.log(name1.length);

// const food = [NasiLemah, Friedchicken]
// console.log(food.length)

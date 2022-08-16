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


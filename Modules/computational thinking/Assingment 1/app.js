function possibleBonus(a, b){
    let x = a;
    let y = b;

    for (let i=0; i<=6; i++){
        x+=1

        if (x=== y){
            return true;
        }
    }
    return false;
}
console.log(possibleBonus(3,7));
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3))
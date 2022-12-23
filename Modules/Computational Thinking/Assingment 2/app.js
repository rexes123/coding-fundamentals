function perimenter(l, num){
    return 4*num*(l=='s') || 6.28*num*(l=='c');
}
console.log(perimenter("s", 7))
console.log(perimenter("c", 4))
console.log(perimenter("c",9))
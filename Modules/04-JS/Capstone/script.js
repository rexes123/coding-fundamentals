function fearNotLetter(str) {
    var i, j = 0, m = 122;
    if (str) {
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return undefined;
}

console.log(fearNotLetter('abce')); //d
console.log(fearNotLetter('abcdefghjklmno')); //i
console.log(fearNotLetter('stvwx')); // u
console.log(fearNotLetter('bcdf')); //e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) //undefined 


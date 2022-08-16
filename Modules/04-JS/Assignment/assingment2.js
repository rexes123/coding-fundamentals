function calculateAge(date) { 
    var diff_ms = Date.now() - date.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
console.log(calculateAge(new Date(1979, 1, 1)));

console.log(calculateAge(new Date(1979, 1, 1)));
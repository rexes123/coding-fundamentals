

function factorial(anyNumber) {
    if (anyNumber == 0) return 1;
    return anyNumber * factorial(anyNumber - 1);
  }

  let num = 5;
  console.log(factorial(5))
  console.log(factorial(4))
  console.log(factorial(1))

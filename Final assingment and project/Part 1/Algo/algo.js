
// 1)
//  function reverse(str){
//      var newString = "";
//      for (var i = str.length -1; i >= 0; i--){
//          newString += str[i]; 
//      }
//      return newString;
//  }
//  console.log(reverse('abcde') == 'edcba')
//  console.log(reverse('hello') == 'olleh')
//  console.log(reverse('Greetings from The Hacker Collective') == 'evitcelloC rekcaH ehT morf sgniteerG')

// 2)
// function sameBackAndForth(string){

//   const newArray = string.split('')
//   const reverseArray = newArray.reverse('')
//   const newString = reverseArray.join('')

//   if (string == newString){
//     return 'true'
//    }
//    else {
//     return 'false'
//    }
// }
// console.log(sameBackAndForth('abba'))
// console.log(sameBackAndForth("abcdefg"))

// 3)
    // const newArray = string.split('')
    // const reverseArray = newArray.reverse('')
    // const newString = reverseArray.join('')

    // let num = -15
    // console.log(num.toString())

//  function reverseInt(num){
//          const string = num.toString()
//          const split = string.split('')
//          const reverse = split.reverse('')
//          const join = reverse.join('')
//          return parseInt(join) * Math.sign(num)
//  }
//      console.log(reverseInt(15))
//      console.log(reverseInt(981))
//      console.log(reverseInt(5))
//      console.log(reverseInt(-15))
//      console.log(reverseInt(-90))

// 4)
// function sumArr(arr){
//     var sum = 0;
//     for (i=0; i < arr.length; i++) {
//          sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArr([1,2,3,4,5]))
// console.log(sumArr([1000,2000,44,55,22]))
// console.log(sumArr([123,456,789]))

// 5)
//  function deafGrandma(sentence){
//      const uppercase = sentence.toUpperCase()
//      return uppercase
//  }
//  console.log(deafGrandma('I have a bad feeling about this'))

// 6)
// function whatIsMissing(alphabet){
//     let missingElement = undefined;
//     let firstCharCode = alphabet.charCodeAt(0);

//       alphabet
//       .split("")
//       .forEach(element => {
//           if (element.charCodeAt(0) === firstCharCode){
//             firstCharCode++; //so 0,1,2,3 ...
//           } else {
//             missingElement = String.fromCharCode(firstCharCode);
//           }
//       });
//       return missingElement;
// }
//   console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz")== undefined)
//   console.log(whatIsMissing("bcdf") == 'e')
//   console.log(whatIsMissing("abcdefghjklmno") == 'i')

// 7)
// function swap(str, before, after) {
//     if (before == str.split(" ").slice(-1)) {
//       const split = str.split(" ");
//       const lastElement = split[split.length - 1];
//       let word = after.charAt(0).toUpperCase("") + after.slice(1);
//       const result = str.replace(lastElement, word);
//       return result;
//     } else {
//       let indexOfthreeInStr = str.split(" ").slice(3, -1);
//       let replace = str.replace(indexOfthreeInStr, after);
//       return replace;
//     }
//   }
//   console.log(swap("His name is Tom", "Tom", "john") == "His name is John");
//   console.log(swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms");
//   console.log(swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error");





 
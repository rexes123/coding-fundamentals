// let button = document.querySelector(".button");
// let text__content = document.querySelector(".quote");
// let text__author = document.querySelector(".author");

// const url = "https://api.quotable.io/random";
// button.addEventListener("click", getContent);
// window.addEventListener("load", getContent);

// function getContent () {
//   fetch(url)
//     .then((data) => response.json())
//     .then((item) => {
//       let content = data.content
//       let author = data.author

//       text__content.innerHTML = content;
//       text__author.innerHTML = author;

      
//     });
// };

let button = document.querySelector('.button')
let textcontent = document.querySelector('.content')
let textauthor = document.querySelector('.author')

const URL = "https://api.quotable.io/random";

function getQuote() {

  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      let content = item.content
      let author = item.author

      textcontent.innerHTML = content;
      textauthor.innerHTML = author;
    })
  
};

window.addEventListener("load", getQuote);
button.addEventListener("click", getQuote);



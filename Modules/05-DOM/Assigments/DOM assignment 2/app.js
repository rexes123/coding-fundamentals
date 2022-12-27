 const wrapper = document.querySelector(".wrapper")
 const palette = document.querySelector(".palette")
 
 document.addEventListener("keydown", (event) =>{
     console.log("keydown", event)
     if (event.ctrlKey && event.key === "k"){
         event.preventDefault();
         wrapper.classList.replace("hidden","display")
         palette.classList.toggle("fade-out")
         palette.classList.toggle("fade-in")
     } else{
         wrapper.classList.replace("display", "hidden")
         palette.classList.toggle("fade-in")
     }
 } )


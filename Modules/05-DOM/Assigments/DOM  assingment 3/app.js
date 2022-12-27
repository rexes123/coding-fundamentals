const closeButton = document.querySelector(".close-button")
const registerButton = document.querySelector(".register-button")
const wrapper = document.querySelector(".wrapper")


   closeButton.addEventListener("click", () => {
      wrapper.classList.toggle("hide");
   })
   
   registerButton.addEventListener("click", () => {
      wrapper.classList.toggle("hide")
   })
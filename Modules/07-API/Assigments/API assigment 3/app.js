const btn = document.querySelector('#fetch-user-btn')

{/* <script src="https://gist.github.com/rexes123/b78f30877659fb4fc8192a2579bf0691.js"></script> */}
const endpoint = 'https://api.github.com/gists/b78f30877659fb4fc8192a2579bf0691'

async function getData() {
   //This is async need to await 
    const response  = await fetch(endpoint) 
    const data = await response.json()
    // console.log(response)

    // let data = await response.json()
    // console.log(data)

    let DetailString = data.files["me.json"].content
    // console.log(userDetailString)
    // console.log(userDetailJSON)
  

    let ContentObject = JSON.parse(DetailString);


    document.querySelector("#name").innerHTML = `Name: ${ContentObject.name}`

    document.querySelector("#age").innerHTML = `Age: ${ContentObject.age}`

    const hobbies = ContentObject.hobbies
    hobbies.forEach((hobby) => {
        const hobbiesList = document.createElement("li")
        hobbiesList.innerHTML = hobby
        const hobbies = document.querySelector("#hobbies")
        hobbies.appendChild(hobbiesList)
    })

}

btn.addEventListener('click', async ()=>{

    getData()

})
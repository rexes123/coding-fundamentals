
const endpoint = "https://api.thecatapi.com/v1/breeds"

async function getData() {
    let response = await fetch(endpoint)
    console.log(response)
    
    let data = await response.json()
    console.log(data)


    data.forEach((data) => {

    //Create element method in Javascript
    //1)Create element => const Z = document.createElement('html element, example:h1, p, a, div and so on ')
    //2)Set textcontent/innerhtml of element => z.textContent = 'write something';/z.innerHtml = `<span>write something<span>`;
    //3)Add element to DOM => const x = document.querySelector('#x')
                                  //y.append.child(Z

    //Profile
    let x = document.querySelector("#card")// Let profile in <div></div>
    x.style.border = "1px solid grey"
    x.style.position = "absolute"

    let newDiv = document.createElement("div")

    x.appendChild(newDiv)

     //Image
     let Img = document.createElement("img")//Let image in <img src="">
     Img.src = data.image.url
     newDiv.appendChild(Img);
    
    //Name
    let name = document.createElement("h1")// Let name in <h1></h1>
    name.classList.add("name")
    name.innerHTML = data.name
    newDiv.appendChild(name)

    //Description
    let description = document.createElement("p")//Let description in <p></p>
    description.innerHTML = data.description
    newDiv.appendChild(description)

    //Link
    const link = document.createElement("a")//Let link in // <a href=""></a>
    link.href = data.image.url
    link.textContent = "Profile"
    newDiv.appendChild(link)
})}


getData()
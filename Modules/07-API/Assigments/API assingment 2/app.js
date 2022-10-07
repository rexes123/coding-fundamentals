    function getUsers(){
    document.querySelector('#output').style.display="block";
    const name=document.querySelector('#username').value;
    fetch(`https://api.github.com/users/${name}`)
    .then(response=>response.json().then(data=>{
        console.log(data)
        document.querySelector('#name').innerHTML=data.name;
        document.querySelector('#bio').innerHTML=data.bio;
        document.querySelector('#profile').innerHTML=`
        <img src="${data.avatar_url}" />
        `
    }))
}
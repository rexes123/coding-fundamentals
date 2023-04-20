//registerButton
const registerButton = document.querySelector('#register-button')
registerButton.addEventListener('click', function (e) {
    e.preventDefault()
    // Redirect to register.html page
    window.location.href = 'register.html'
})




const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', (e) => {
     e.preventDefault()

     const username = document.querySelector('#username').value;
     const password = document.querySelector('#password').value;

       // Check if user data already exists in localStorage
     const userKey = `user_${username}`;
    if (localStorage.getItem(userKey)) {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(userKey));

       // Check if password matches
       if (user.password === password) {
        const loginUsername = username;

        //Store the update username in localStorage
        localStorage.setItem('loggedInUsername', loginUsername)


        window.location.href = 'index.html';
      } else {
        // Display an error message indicating that the password is incorrect
        alert('Incorrect password. Please try again.');
      }
    } else {
      // Display an error message indicating that the username does not exist
      alert('Username not found. Please register first.');
    }

        //  Redirect the user to the game page since they are registered
        // window.location.href = 'index.html';
 
});

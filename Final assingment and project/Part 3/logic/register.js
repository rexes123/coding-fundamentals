const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //Assuming you have retrieved the 'username', 'password', '
  const user = {
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    email: email
  };

  //Check a unique key for each user based on their username  
  const userKey = `user_${user.username}`;
  const nameKey = `user_${user.lastname}`;
 


  //Check if user data already exists in localStorage
  if (localStorage.getItem(userKey)) {
    //If user data already exists, retrieve from localStorage
    user.playerWins = localStorage.getItem(`${userKey}_playerWins`);
    user.computerWins = localStorage.getItem(`${userKey}_computerWins`);
    user.lastname = localStorage.getItem(`${nameKey}_lastname`);
  } else {
    //If user data does not exist, initialise playerWins and computerWins to 0
    //Need to add logic here
    user.playerWins = 0;
    user.computerWins = 0;

    // Store the initial user data in localStorage
    localStorage.setItem(userKey, JSON.stringify(user));
  }

  // Update playerWins and computerWins values as needed


  // Store the updated user data in localStorage
  localStorage.setItem(userKey, JSON.stringify(user));


  let existingUsers = [];

  // Check if there are existing users in local storage.
  if (localStorage.getItem('users')) {
    existingUsers = JSON.parse(localStorage.getItem('users'));
  }

  // Add the new user to the existing users array
  existingUsers.push(user);

  // Save the updated user data to local storage
  localStorage.setItem('users', JSON.stringify(existingUsers));
  // Redirect the user to the login page
  window.location.href = 'login.html';
});

//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

localStorage.setItem('firstName', 'NAYAN');
localStorage.setItem('lastName', 'KUMAR RAJ');
localStorage.setItem('age', 21);
localStorage.setItem('country', 'USA'); 
localStorage.setItem('state', 'TEXAS');

console.log(localStorage);


//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

const storedFirstName = localStorage.getItem('firstName');
const storedLastName = localStorage.getItem('lastName');
const storedAge = localStorage.getItem('age');
const storedCountry = localStorage.getItem('country');
const storedState = localStorage.getItem('state');

console.log(localStorage)

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

localStorage.removeItem('state');
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear();
console.log(localStorage);


//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

const userString = JSON.stringify(user);
console.log(userString);

const object = localStorage.getItem('nameOfUser')
const name = JSON.parse(object);
alert("Welcome, " + name);
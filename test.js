
// Author: Adson Mettler do Nascimento

let names = ["Bob", "Sue", "Jorge", "Svetlana"];

names.push("Grace");
console.log(names);

names.pop()
console.log(names);

let mystring = "This is my string!";
mystring.length;
console.log(mystring.length);


// Function declaration / definition

function fullName(first, last) {
    return `${first} ${last}`;
  }


console.log(fullName());


// document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
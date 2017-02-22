// Example of some & every helpers - they return boolean value

const computers = [

    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32}
];

let a = computers.every(function(computer){

    return computer.ram > 16;
});
console.log(a);

let b = computers.some(function(computer){

    return computer.ram > 16;
});
console.log(b);

// Example 2

const names = [

    "Alexandria",
    "Rachael",
    "Joe"
];

names.every(function(name){

    return name.length > 4
});

names.some(function(name){

    return name.length > 4
});

// Example 3 - returns 'true' if every user has submitted a request form

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => user.hasSubmitted === true);

// Example 4 - assigns the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => request.status === 'pending');
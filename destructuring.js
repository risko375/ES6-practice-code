// Example 1 - pulling properties off an object

var expense = {

    type: 'Business',
    amount: '£45'
};

// ES5
// var type = expense.type;
// var amount = expense.amount;

//ES 6
const {type, amount} = expense;

// Example 2 - pulling properties off an object passing to function

var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 140088
};

function fileSummary({name, extension, size}){
    return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFiled);

// Example 3 - destructuring an array

const companies = [

    'Google',
    'Facebook',
    'Uber'
];

const [name, name2, ...rest] = companies

// Example 4 

const companies = [
    {name: 'Google', location: 'Mountain View' },
    {name: 'Facebook', location: 'Menlo Park' },
    {name: 'Uber', location: 'San Francisco'}
];

const [{ location }] = companies;
console.log(location);

// Example 5 

const Google = {
    locations: ['Mountain View', 'London', 'New York'] 
};

const{ locations: [ location ]} = Google;

console.log(location)
// 'Mounatin View'

// Example 6 - By destructuring, argument order not important

function signup({email,password,dateOfBirth,city,username}){
 // Create new user
}

// other code
// other code
// other code
// other code

const user = {

    username: 'myname',
    password: 'mypassword',
    email: 'myemail@me.com',
    dateOfBirth: '1/1/1991',
    city: 'London'
};

signup(user);

//Example 7 - Convert data from array to objects

const points = [
    [4,5],
    [10,1],
    [9,8]
];

points.map(([x,y]) => {

    return {x,y};
});

// Example 8 - recursion with destructuring to double array elements - easier with map - just for illustration

const numbers = [1,2,3];

function double([head, ...rest]) {
    
 if(!head){return [];}
        
 return [2 * head, ...double(rest)];
}


let a = double(numbers)
console.log(a);
//Examples of using find helper - useful for finding single records

let users = [

    { name: 'bob', id: 1},
    { name: 'kat', id: 2},
    { name: 'phil', id: 3},
    { name: 'bob', id: 4}
];

let a = users.find(function(user){

    return user.name === 'bob';
});
 
// returns 1st object with name bob
console.log(a);

// Example 2 - find a post that matches the comment id

let posts = [

    { id: 1, title: 'New Post'},
    { id: 2, title: 'Old Post'}
];

let comment = { postId: 1, comment: 'Great'};

function postForComment(posts, comment){

    return posts.find(function(post){
    
        return post.id === comment.postId;
    })
}

let a = postForComment(posts, comment);
console.log(a);

// Example 3 - Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin === true);

// Example 4 - Find the account with a balance of 12 and assign it to the variable 'account'

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance === 12)

// Example 5 - creating a findWhere function for shorthand approach to finding matching object 

function findWhere(array, criteria) {
  
var property = Object.keys(criteria);

var newArray = array.find((item) => {
    
    return item[property] === criteria[property];
});
  
  return newArray;
  
}

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

var a = findWhere(ladders, { height: 25 });

console.log(a);
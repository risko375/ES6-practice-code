// Examples of using filter helper

const products = [ 
    { name: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit'},
    { name: 'carrot', type: 'vegetable'},
    { name: 'apple', type: 'fruit'}
];

let fruits = products.filter(function(product){

    return product.type === 'fruit'
    
})

console.log(fruits);

// Example 2

const products = [ 
    { name: 'cucumber', type: 'vegetable', quantity: 5, price: 3 },
    { name: 'banana', type: 'fruit', quantity: 8, price: 6},
    { name: 'carrot', type: 'vegetable', quantity: 11, price: 2},
    { name: 'apple', type: 'fruit', quantity: 0, price: 1}
];

let basket = products.filter(function(product){
        return product.type === 'fruit' 
        && product.quantity > 0
        && product.price < 10
});
console.log(basket);

// Example 3 

let post = { id: 4, title: 'New Post'};
let comments = [
    { postId: 4, content: 'awesome post'},
    { postId: 3, content: 'it was ok'},
    { postId: 4, content: 'great'}
];

function commentsForPost(post, comments){

    return comments.filter(function(comment) {
    
        return comment.postId === post.id;
    });
}

let a = commentsForPost(post, comments);
console.log(a);


// Example 4 

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){return number > 50;});

console.log(filteredNumbers);

// Example 5

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});

console.log(filteredUsers);

// Example 6 - creating a reject function that works the opposite way to filter

function reject(array, iteratorFunction) {
    
    return array.filter(function(item){
        
        return !iteratorFunction(item);
    });
  
}
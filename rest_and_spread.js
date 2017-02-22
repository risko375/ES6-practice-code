// Example 1 - using rest operator to take unknown number of arguments
// and convert to an array which can then be summed using reduce

function addNumbers(...numbers){

    return numbers.reduce((sum, number) => {
    
        return sum + number;
    }, 0);

}

addNumbers(1,2,3,4,5,6,7,8,9,10);

// Example 2 - using spread operator to 'flatten' separate arrays into one

const defaultColours = ['red', 'green'];
const userFavColours = ['orange', 'yellow'];
const specialColours = ['fire red', 'fall orange'];

let palette = ['green', 'blue', ...userFavColours, ...defaultColours, ...specialColours ];

// Example 3 - checking shopping list for milk using spread and rest 

function validateShoppingList(...items){

    if(items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    
    return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

// Example 4 - Deprecating a library method using rest

const MathLibrary = {

    calculateProduct(...rest){
    
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a,b) {
  
        return a * b;
        
    }

};

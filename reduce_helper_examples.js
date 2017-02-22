// Examples of reduce helper - reduces array down to single value

var numbers = [ 10, 20, 30];

var sum = 0;

let a = numbers.reduce(function(sum, number) {
    return sum + number; 
}, 0);

console.log(a);

// Example 2

var primaryColours = [

    { colour: 'red'},
    { colour: 'yellow'},
    { colour: 'blue'}
];

let a = primaryColours.reduce(function(previous, primaryColour){
    previous.push(primaryColour.colour);
    return previous;
}, []);

console.log(a);

// Example 3 - using reduce to create a balanced parens function
// which return true if balanced i.e '(())' else false e.g (((

function balancedParens(string) {

    return !string.split('').reduce(function(previous,char){
    
        if(previous < 0) { return previous; }
        if( char === '(') { return ++previous; }
        if( char === ')') { return --previous; }
        return previous;
    },0);
}

let a = balancedParens(')()()')

console.log(a);

// Example 4 - calculate total distance of all trips

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(acc, trip){
    
    return acc += trip.distance;
    
},0);

// or using arrow function

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((acc, trip) => acc += trip.distance,0);

// Example 5 -  using'reduce' helper to create an object that tallies the number of sitting and standing desks

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    
    if(desk.type === 'sitting'){ acc.sitting++}
    if(desk.type === 'standing'){ acc.standing++}
    
    return acc;
    
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

// Example 5 using reduce and find to create function called 'unique' 
// that will remove all the duplicate values from an array 

function unique(array) {
    
   return array.reduce(function(previous, item){
       
       
       if (!previous.find(function(temp){
           
           return temp === item
       })){
           
           previous.push(item)
       }
       
       return previous
           
   },[]);
    
  
}
// Example of using Map helper

var cars = [
    {model: 'Buick', price:'Cheap'},
    {model: 'Camaro', price: 'Expensive'}
];

var prices = cars.map(function(car){

    return car.price;
});

console.log(prices);

// Example 2


var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    
    return image.height;
});

// Example 3

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    
   return trip.distance / trip.time;
});

// Example 4

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    
  return array.map(function(item){
      
      return item[property];
  });
    
}

pluck(paints,'color');
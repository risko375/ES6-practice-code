// A promise example. Promises have 3 states - unresolved, resolved and rejected

// When it is created it has a pending/unresolved status

// If resolve() is called the Promise will enter resolved state and any callbacks registered with the then property will be //called

promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    
       resolve();
    }, 3000);
});

promise_1
    .then(() => console.log('I ran!'))
    .then(() => console.log('Me to..'))
    .catch(() => console.log('Not me'));


// If reject() is called Promise will enter rejected state and any callbacks registered with the catch property will be called 

promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    
       reject();
    }, 3000);
});

promise_2
    .then(() => console.log('I didnt run!'))
    .then(() => console.log('Me neither..'))
    .catch(() => console.log('Uh oh something went wrong'));




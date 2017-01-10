// Can use fetch function to make AJAX requests and it returns a promise

url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));


// Gotcha with fetch is that if server returns error code it does not enter catch case.
// It only hits catch if the network request fails completely e.g mistyping domain name
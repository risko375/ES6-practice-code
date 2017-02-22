// Example 1 - create an admin user - automatically create user id if not supplied

function User(id) {

    this.id = id;
}

function generateId() {

    return Math.random() * 9999999;
    
}

function createAdminUser(user = new User(generateId())) {

    user.admin = true;
    
    return user;
}

createAdminUser();

//or if user exists

const user = new User(generateId());
createAdminUser(user);

----------------------------------------------------------------------------------

// Example 2 - Set method type to 'GET' by default if no argument supplied
    
function makeAjaxRequest(url, method = 'GET'){

    return method;
    // logic to make the request 
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com','POST');
    

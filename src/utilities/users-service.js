import * as usersAPI from './users-api';

//called in SignUpForm component
// save user data to local storage and set token
export async function signUp(userData) {
    try {
        const token = await usersAPI.signUp(userData);
        localStorage.setItem('token', token);
        return getUser();
    } catch {
        throw new Error("Invalid Sign Up");
    }
}

// called in utitilites/send-request
// read the token from the local storage and grab payload from JWT
// if expired, remove token. If all good, return token.
export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

// called in App.js
// get the token
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

// called in NavBar component.
// remove token from local storage
export function logOut() {
    localStorage.removeItem('token');
}

//called in LoginForm. "credentials" from form.
//If user has right credentials save token in local storage
export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

//assign date to token if there is one
export function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr));
}
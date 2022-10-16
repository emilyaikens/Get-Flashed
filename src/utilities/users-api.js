import {getToken} from "./users-service";

const BASE_URL = '/api/users';

//called in SignUpForm component. "userData" from form
export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

//called in LoginForm component. "credentials" from form
export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

async function sendRequest(url, method = 'GET', payload = null) {
    const options = {method};
    // if you want to send data to the server
    if (payload) {
        // we must send JSON
        options.headers = {
            'Content-Type': 'application/json'
        };
        // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    // tell fetch function to send data to URL with some data
    // if there is any data
    // this depends on HTTP methods such as GET OR POST
    const res = await fetch(url, options);
    // HTTP status code 200, means everything went fine
    if (res.ok) return res.json();
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
    throw new Error('Bad Request');
}

//called in utilities/users-service
export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}

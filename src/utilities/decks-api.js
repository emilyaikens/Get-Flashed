import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export function createDeck(deckData) {
    console.log(deckData) //this works, the form is sending data here.
    return sendRequest(BASE_URL, 'POST', deckData);
}

export function getAll() {
    return sendRequest(BASE_URL)
};

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

// export function deleteDeck(id) {
//     return sendRequest(`${BASE_URL}/${id}`, 'DELETE' );
// }


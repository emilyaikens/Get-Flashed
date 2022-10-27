import sendRequest from './send-request';

const BASE_URL = '/api/decks';

//called in NewDeckForm component. "deckData" from form
export function createDeck(deckData) {
    return sendRequest(BASE_URL, 'POST', deckData);
};

//called in DeckIndexPage.
export function getMyDecks() {
    return sendRequest(BASE_URL);
};

//called in ManageDeckPage. "id" is deck id from URL params
export function deleteDeck(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

//called in EditDeckNameForm component. "formData" from form, "id" is deck id from URL params
export function editDeck(formData, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
};

//called in BrowseAllDecksPage.
export function getAllDecks() {
    return sendRequest(`${BASE_URL}/all-decks`);
}

//called in DeckDetailsPage. "id" is deck id from URL params
export function findOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

//called in ManageDeckPage. "id" is deck id from URL params
export function deckOwner(id) {
    return sendRequest(`${BASE_URL}/owner/${id}`);
}

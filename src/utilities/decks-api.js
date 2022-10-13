import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export function createDeck(deckData) {
    return sendRequest(BASE_URL, 'POST', deckData);
};

export function getMyDecks() {
    return sendRequest(BASE_URL)
};

export function createCard(cardData) {
    return sendRequest(`${BASE_URL}/cards`, 'POST', cardData);
};

export function getCards(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteDeck(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function editDeckName(formData, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData)
};

export function deleteCard(card) {
    return sendRequest(`${BASE_URL}/card/${card.deckId}`, 'DELETE', card);
}


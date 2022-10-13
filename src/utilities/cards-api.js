import sendRequest from './send-request';

const BASE_URL = '/api/cards';

export function createCard(cardData) {
    return sendRequest(`${BASE_URL}/cards`, 'POST', cardData);
};

export function getCards(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteCard(card) {
    return sendRequest(`${BASE_URL}/card/${card.deckId}`, 'DELETE', card);
}
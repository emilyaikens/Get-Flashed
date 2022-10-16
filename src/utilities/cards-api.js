import sendRequest from './send-request';

const BASE_URL = '/api/cards';

//called in newCardForm component. "cardData" is from form
export function createCard(cardData) {
    return sendRequest(`${BASE_URL}/cards`, 'POST', cardData);
};

//called in deckDetails page. "id" is deck id from url params
export function getCards(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

//called in CardList component. "card" mapped in deck detailed then passed as prop to CardList
export function deleteCard(card) {
    return sendRequest(`${BASE_URL}/card/${card.deckId}`, 'DELETE', card);
}
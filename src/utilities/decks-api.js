import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export function getAll() {
    return sendRequest(BASE_URL)
};


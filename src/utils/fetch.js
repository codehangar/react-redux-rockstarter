import 'whatwg-fetch';

function checkStatus(response) {
    if (response.ok && response.status >= 200 && response.status < 300) {
        return response;
    }

    const error    = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJSON(response) {
    return response.json();
}

export default function(path, options = {}) {
    const headers = {
        'Content-Type': 'application/json'
    };
    const url     = `http://swapi.co/api${path}`;
    const opts    = Object.assign({}, options, { headers });
    return fetch(url, opts)
        .then(checkStatus)
        .then(parseJSON);
}

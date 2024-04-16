const API_URL = 'https://random.dog/woof.json';

class CancellationToken {
    constructor(event, controller) {
        this.event = event;
        this._signal = controller.signal;
        document.addEventListener(
            event.type,
            () => {
                controller.abort();
                console.log('Abort signal sent');
            },
            false
        );
    }

    cancel() {
        document.dispatchEvent(this.event);
    }

    get signal() {
        return this._signal;
    }

    throwIfCancellationRequested() {
        if (this.signal.aborted) {
            throw Error('Cancellation request');
        }
    }
}

async function fetchImage(url, token) {
    const signal = token !== undefined ? token.signal : undefined;
    const response = await fetch(url, {signal});
    console.log(`fetch response is ${response.statusText}`);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    return img;
}

async function imageUrlFromAPI(url) {
    const result = await fetch(url);
    const imageJSON = await result.json();
    return imageJSON.url;
}

async function appendImages(token) {
    const imgdiv = document.getElementById('images');
    let url;
    let img;
    try {
        url = await imageUrlFromAPI(API_URL);
        console.log(url);
        console.log(`Abort signal is ${token.signal.aborted}`);
        img = await fetchImage(url, token);
        token.throwIfCancellationRequested();
        console.log(`Abort signal after fetchImage is ${token.signal.aborted}`);
        imgdiv.appendChild(img);
    } catch (error) {
        console.error(error.message);
    }
}

const token = new CancellationToken(
    new Event('cancel'),
    new AbortController()
);

if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded', () => appendImages(token), false);
else Promise.resolve(appendImages(token));

setTimeout(() => token.cancel(), 1200);
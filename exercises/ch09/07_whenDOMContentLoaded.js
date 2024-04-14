'use strict';

const addImage = (url, element) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        const getImage = () => {
            if (request.status == 200) { 
            const blob = new Blob([request.response], {type: 'image/png'});
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            resolve(element.appendChild(img));
            } else {
                reject(Error(`${request.status}: ${request.statusText}`));
            }
        };
        request.addEventListener('load', getImage);
        request.addEventListener('error', () => reject(Error('Network error')));
        request.send();
    });
};

function whenDOMContentLoaded(urls) {
    return new Promise((resolve, reject) => {
        function getImages() {
            const imgdiv = document.getElementById('images');
            if (imgdiv === null) reject(Error('Not found DOM element'));
            let promise = Promise.resolve();
            for (let url of urls) {
                promise = promise.then(() => addImage(url, imgdiv));
            }
            resolve(promise);
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', getImages);
        } else getImages();
    });
}

let urls = [
    '/bookcode/hanafuda/1-1.png',
    '/bookcode/hanafuda/1-2.png',
    '/bookcode/hanafuda/1-3.png',
    '/bookcode/hanafuda/1-4.png',
];
whenDOMContentLoaded(urls)
    .then(() => console.log('ok'), (e) => console.error(e.message));
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

document.addEventListener('DOMContentLoaded', () => {
  const imgdiv = document.getElementById('images')
  Promise.resolve()
    .then(() => addImage('/bookcode/hanafuda/1-1.png', imgdiv))
    .then(() => addImage('/bookcode/hanafuda/1-2.png', imgdiv))
    .then(() => addImage('/bookcode/hanafuda/1-3.png', imgdiv))
    .then(() => addImage('/bookcode/hanafuda/1-4.png', imgdiv));
});
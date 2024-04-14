const loadImage = url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        const getImage = () => {
            if (request.status == 200) { 
                const blob = new Blob([request.response], {type: 'image/png'});
                const img = document.createElement('img');
                img.src = URL.createObjectURL(blob);
                resolve(img);
            } else
                reject(Error(`${request.status}: ${request.statusText}`));
        };
        request.addEventListener('load', getImage);
        request.addEventListener('error', () => reject(Error('Network error')));
        request.send();
    });
};

let urls = [
    '/bookcode/hanafuda/1-1.png',
    '/bookcode/hanafuda/1-2.png',
    '/bookcode/hanafuda/1-3.png',
    '/bookcode/hanafuda/1-4.png',
    'https://commons.wikimedia.org/wiki/File:17_layer_cube.png#/media/%D0%A4%D0%B0%D0%B9%D0%BB:17_layer_cube.png'
];
const promises = urls.map(loadImage);

Promise.allSettled(promises)
    .then(results => {
        const imgdiv = document.getElementById('images');
        for (let result of results)
            if (result.status === 'fulfilled')
                imgdiv.appendChild(result.value);
            else console.error(result.reason);
    });
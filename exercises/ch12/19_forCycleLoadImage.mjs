async function appendImages(urls) {
    const element = document.getElementById('images');
    for (const p of urls.map(loadImage))
        p.then(img => element.appendChild(img));
    for (const p of urls.map(loadImage)) {
        element.appendChild(await p);
    }
}

function loadImage(url) {
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

const urls = [
    '/bookcode/hanafuda/1-1.png',
    '/bookcode/hanafuda/1-2.png',
    '/bookcode/hanafuda/1-3.png',
    '/bookcode/hanafuda/1-4.png',
];

if (document.readyState == 'loading')
    document.addEventListener(
        'DOMContentLoaded',
        async () => await appendImages(urls),
        false
    );
else await appendImages(urls);

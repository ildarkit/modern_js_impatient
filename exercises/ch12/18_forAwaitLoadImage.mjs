async function appendImages(promises) {
    const element = document.getElementById('images');
    for (const img of await Promise.all(promises)) {
        element.appendChild(img);
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

const imgPromises = [
    '/bookcode/hanafuda/1-1.png',
    '/bookcode/hanafuda/1-2.png',
    '/bookcode/hanafuda/1-3.png',
    '/bookcode/hanafuda/1-4.png',
].map(loadImage);

if (document.readyState == 'loading')
    document.addEventListener(
        'DOMContentLoaded',
        async () => await appendImages(imgPromises),
        false
    );
else await appendImages(imgPromises);

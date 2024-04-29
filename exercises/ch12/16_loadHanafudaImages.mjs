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

async function* loadHanafudaImages(month) {
    for (let i = 1; i <= 4; i++) {
        yield await loadImage(`/bookcode/hanafuda/${month}-${i}.png`);
    }
}

async function appendImages() {
    const imgdiv = document.getElementById('images');
    const gen = loadHanafudaImages(1);
    let result = await gen.next();
    while (!result.done) {
        imgdiv.appendChild(result.value);  
        result = await gen.next();
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', appendImages, false);
} else await appendImages();
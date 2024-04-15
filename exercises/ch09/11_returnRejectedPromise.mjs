const loadImage = url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        const getImage = () => {
            if (request.status == 200) { 
                const blob = new Blob([request.response], {type: 'image/jpg'});
                const img = document.createElement('img');
                img.src = URL.createObjectURL(blob);
                // resolve(img);
                reject(Error('rejected promise'));
            } else
                reject(Error(`${request.status}: ${request.statusText}`));
        };
        request.addEventListener('load', getImage);
        request.addEventListener('error', () => reject(Error('Network error')));
        request.send();
    });
};

const caughtLoadDogImage = async () => {
    try {
        const result = await fetch('https://random.dog/woof.json');
        const imageJSON = await result.json();
        return await loadImage(imageJSON.url);
    } catch (err) {
        console.error(err.message);
        return document.createElement('img');
    }
};

const uncaughtLoadDogImage = async () => {
    try {
        const result = await fetch('https://random.dog/woof.json');
        const imageJSON = await result.json();
        return loadImage(imageJSON.url);
    } catch (err) {
        console.error(err.message);
        return document.createElement('img');
    }
};

let imgdiv = document.getElementById('images');
imgdiv.appendChild(await caughtLoadDogImage());
imgdiv.appendChild(await uncaughtLoadDogImage());
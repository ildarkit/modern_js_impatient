const API_URL = 'https://random.dog/woof.json';

async function fetchAwaitImage(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    return img;
}

function fetchImage(url) {
    const img = document.createElement('img');
    return fetch(url)
        .then(response => response.blob())
        .then(blob => {
            img.src = URL.createObjectURL(blob);
            return img;
        });
}

async function imageUrlFromAPI(url) {
    const result = await fetch(url);
    const imageJSON = await result.json();
    return imageJSON.url;
};

async function appendImages() {
    const imgdiv = document.getElementById('images');
    try {
        const url = await imageUrlFromAPI(API_URL);
        imgdiv.appendChild(await fetchAwaitImage(url));
        fetchImage(url).then(img => imgdiv.appendChild(img));
    } catch (error) {
        console.error(error.message);
    }
}

if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded', appendImages, false);
else await appendImages();
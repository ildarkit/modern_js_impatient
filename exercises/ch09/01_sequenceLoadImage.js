'use strict'

const addImage = (url, arr, i) => {
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.responseType = 'blob'

  request.addEventListener('load', () => {
    if (request.status == 200) { 
      const blob = new Blob([request.response], {type: 'image/png'})
      const img = document.createElement('img')
      img.src = URL.createObjectURL(blob)
      arr[i] = img;
    } else {
      console.log(`${request.status}: ${request.statusText}`)
    }
  })
  request.addEventListener('error', event => console.log('Network error'));
  request.send()
}

document.addEventListener('DOMContentLoaded', () => { 
    const imgdiv = document.getElementById('images');
    let urls = [
        '/bookcode/hanafuda/1-1.png',
        '/bookcode/hanafuda/1-2.png',
        '/bookcode/hanafuda/1-3.png',
        '/bookcode/hanafuda/1-4.png'
    ];
    let images = new Array(urls.length);

    function loaded() {
        if (images[images.length - 1] === undefined)
            setTimeout(loaded, 10);
        else {
            for (let image of images) {
                imgdiv.appendChild(image);
            }
        }
    } 

    for (let i = 0; i < urls.length; i++) {
        addImage(urls[i], images, i);
    }
    setTimeout(loaded, 50); 
})
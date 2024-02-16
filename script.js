const sketchpad = document.querySelector('.sketchpad');

var fragment = document.createDocumentFragment();

const pix = document.createElement('div');
pix.setAttribute('style', 'pix');

for (let i = 1; 1 < 16 * 16 - 1; i++) {
    const clonedPix = document.createElement('div');
    fragment.appendChild(clonedPix);
}

sketchpad.appendChild(fragment);
// import styles
import styles from './style.css';

// import assets
import image from './assets/js-playground.png';

// your app
const p = document.createElement('p');
p.innerHTML = 'Welcome to JS Playground';

const img = document.createElement('img');
img.src = image;

document.body.appendChild(p);
document.body.appendChild(img);

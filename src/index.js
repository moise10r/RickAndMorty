import './style.css';
import logo from './assets/R&M-logo.png';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);
import './index.css';
import './detailPage.js';
// console.log('Hello, world!');

console.log('Hello, world!');

const tooltip = document.getElementById('tooltip');
const links = document.querySelectorAll('.straat-link');

links.forEach(link => {
  const name = link.dataset.straat;

  link.addEventListener('mouseenter', (e) => {
    tooltip.style.display = 'block';
    tooltip.textContent = name;
  });

  link.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });

  link.addEventListener('mousemove', (e) => {
    const mapWrapper = document.querySelector('.map-wrapper');
    const rect = mapWrapper.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
    tooltip.style.top = (e.clientY - rect.top - 10) + 'px';
  });
});

const tooltip = document.getElementById('tooltip');
const links = document.querySelectorAll('.straat-link');

links.forEach(link => {
  const name = link.dataset.straat;

  link.addEventListener('mouseenter', (e) => {
    tooltip.style.display = 'block';
    tooltip.textContent = name;
  });

  link.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });

  link.addEventListener('mousemove', (e) => {
    const mapWrapper = document.querySelector('.map-wrapper');
    const rect = mapWrapper.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
    tooltip.style.top = (e.clientY - rect.top - 10) + 'px';
  });
});
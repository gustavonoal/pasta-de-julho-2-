const sky = document.getElementById('sky');
const Btn = document.getElementById('disparar');
Btn.addEventListener('click', () => {
    const estrela = document.createElement('div');
    estrela.classList.add('estrela');
    const startX = Math.random() * window.innerWidth;
    estrela.style.left = `${startX}px`;
    estrela.style.top = '0px';
    sky.appendChild(estrela);
    estrela.addEventListener('animationend', () => {
        estrela.remove();
    });
});
const heart = document.getElementById('heart');
const toggleBtn = document.getElementById('toggleBtn');
let batendo = false;
toggleBtn.addEventListener('click', () => {
    batendo = !batendo;
    heart.classList.toggle('bater', batendo);
    toggleBtn.textContent = batendo ? 'Parar Batimento' : 'Ativar Batimento';
});
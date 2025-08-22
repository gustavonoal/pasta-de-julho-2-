const regua = document.getElementById('regua');
const marcador = document.getElementById('marcador');
const info = document.getElementById('info');
for (let i = 0; i <= window.innerWidth; i += 10) {
    const marca = document.createElement('div');
    if (i % 50 === 0) {
        marca.style.height = '40px';
        marca.textContent= i;
    }
    regua.appendChild(marca);
}
document.addEventListener('mousemove', (e) => {
    marcador.style.left = e.clientX + 'px';
    info.textContent = `${e.clientX}`;
    if (e.clientX > window.innerWidth - 60) {
        info.style.left = "-60px";
    } else {
        info.style.left = "5px";
    }
});
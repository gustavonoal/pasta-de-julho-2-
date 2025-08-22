const roleta = document.getElementById('roleta');
const resultado = document.getElementById('resultado');
const Btn = document.getElementById('girar');
const premios = [
    "1 Ano de Café Grátis",
    "Viagem para o Japão",
    "Vale-Pizza 🍕",
    "Nada... 🤣",
    "R$ 10.000 em Bitcoin",
    "Abraço Virtual 🤗"
];
let girando = false;
Btn.addEventListener('click', () => {
    if (girando) return;
    girando = true;
    resultado.textContent = "";
    const numPremios = premios.length;
    const sorteado = Math.floor(Math.random() * numPremios);
    const grausPorSetor = 360 / numPremios;
    const anguloFinal = 360 * 5 +
    (360 - sorteado * grausPorSetor - grausPorSetor / 2);
    roleta.style.transform = `rotate(${anguloFinal}deg)`;
    setTimeout(() => {
        resultado.textContent = `Você ganhou: ${premios[sorteado]}!`;
        girando = false;
    }, 4000)
});
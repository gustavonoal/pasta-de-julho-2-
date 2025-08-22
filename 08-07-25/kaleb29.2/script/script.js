const game = document.getElementById('game');
const mensagem = document.getElementById('mensagem');
const nivelEl = document.getElementById('nivel');
let current = 1;
let sequence = [];
let nivel = 1;
const maxNumeros = 20;
function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
}
function iniciarJogo() {
    const totalNumeros = Math.min(nivel + 3, maxNumeros);
    sequence = embaralhar([...Array(totalNumeros).keys()].map(n => n + 1));
    current = 1;
    mensagem.textContent = '';
    nivelEl.textContent = `Nivel: ${nivel}`;
    game.innerHTML = '';
    sequence.forEach(num => {
        const Btn = document.createElement('button');
        Btn.textContent = num;
        Btn.className = 'number';
        Btn.addEventListener('click', () => verificarNumero(Btn, num));
        game.appendChild(Btn);
    });
}function verificarNumero(botao, numero) {
    if (numero === current) {
        botao.disabled = true;
        botao.style.backgroundColor = '#28a745';
        current++;
        if (current > sequence.length) {
            mensagem.textContent = 'Parabéns! Proximo nível...';
            setTimeout(() => {
                nivel++;
                iniciarJogo();
            }, 1000);
        }
    } else {
        mensagem.textContent = 'Errado! Reiniciando nivel...';
        setTimeout(iniciarJogo, 1000);
    }
}
iniciarJogo();
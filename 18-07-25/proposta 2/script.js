document.getElementById('adicionarRoupa').addEventListener('click', function() {
    const container = document.getElementById('roupasContainer');
    const roupas = container.querySelectorAll('.roupa');
    if (roupas.length >= 3) {
        alert('Você só pode adicionar até 3 tipos de roupas.');
        return;
    }
    const div = document.createElement('div');
    div.className = 'roupa';
    div.innerHTML = `
        <select class="tipoRoupa">
            <option value="camisa" data-preco="40">Camisas</option>
            <option value="calca" data-preco="70">Calças</option>
            <option value="jaqueta" data-preco="120">Jaquetas</option>
        </select>
        <input type="number" class="quantidadeRoupa" min="0" value="0" required>`;
    container.appendChild(div);
});
document.getElementById('orcamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let total = 0;
    const roupas = document.querySelectorAll('.roupa');
    roupas.forEach(function(roupa) {
        const select = roupa.querySelector('.tipoRoupa');
        const preco = Number(select.options[select.selectedIndex].getAttribute('data-preco'));
        const quantidade = Number(roupa.querySelector('.quantidadeRoupa').value);
        total += preco * quantidade;
    });
    document.getElementById('resultado').textContent = `Orçamento total: R$ ${total.toFixed(2)}`;
});
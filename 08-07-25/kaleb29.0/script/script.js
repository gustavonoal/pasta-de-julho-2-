function calcularDias() {
    const dataInput = document.getElementById("dataNascimento").value;
    if (!dataInput) {
        alert ("Por favor, insira sua data de nascimento.");
        return;
    }
    const nascimento = new Date(dataInput);
    const hoje = new Date();
    nascimento.setHours(0, 0, 0, 0);
    hoje.setHours(0, 0, 0, 0);
    const diffMilissegundos = hoje - nascimento;
    const diasVividos = Math.floor (diffMilissegundos / (1000 * 60 * 60 * 24));
    document.getElementById("resultado").innerHTML = `Você viveu aproximadamente ${diasVividos} dias até hoje`;
}
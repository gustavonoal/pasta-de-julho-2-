const form = document.getElementById('portfolio-form');
const visualizacao = document.getElementById('portfolio-visualizacao');
const editarBtn = document.getElementById('editar');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = form.nome.value;
    const texto = form['texto-livre'].value;
    const habilidades = form.habilidades.value.split(',').map(h => h.trim());
    const contatoNome = form['contato-nome'].value;
    const contatoEmail = form['contato-email'].value;
    const contatoWhatsapp = form['contato-whatsapp'].value;
    const contatoLinkedin = form['contato-linkedin'].value;
    document.getElementById('visu-nome').textContent = nome;
    document.getElementById('visu-texto').textContent = texto;
    const ul = document.getElementById('visu-habilidades');
    ul.innerHTML = '';
    habilidades.forEach(hab => {
        const li = document.createElement('li');
        li.textContent = hab;
        ul.appendChild(li);
    });
    const contatoDiv = document.getElementById('visu-contato');
    contatoDiv.innerHTML = `
        <span><strong>Nome:</strong> ${contatoNome}</span>
        <span><strong>Email:</strong> ${contatoEmail}</span>
        <span><strong>WhatsApp:</strong> ${contatoWhatsapp}</span>
        <span><strong>LinkedIn:</strong> <a href="${contatoLinkedin}" target="_blank">${contatoLinkedin}</a></span>
    `;
    form.style.display = 'none';
    visualizacao.style.display = 'block';
});
editarBtn.addEventListener('click', function() {
    visualizacao.style.display = 'none';
    form.style.display = 'block';
});